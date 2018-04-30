/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /* Ensures the klass namespace is created */
  window.PxMap = (window.PxMap || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.Marker
   */
  PxMapBehavior.MarkerImpl = {
    properties: {
      /**
       * [REQUIRED] The latitude of the marker. Set a value to draw the marker at a coordinate
       * when the map is loaded. Listen for updates to track the marker's location
       * if the marker is draggable or created dynamically by the user.
       *
       * @type {Number}
       */
      lat: {
        type: Number,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * [REQUIRED] The longitude of the marker. Set a value to draw the marker at a coordinate
       * when the map is loaded. Listen for updates to track the marker's location
       * if the marker is draggable or created dynamically by the user.
       *
       * @type {Number}
       */
      lng: {
        type: Number,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * A human-readable name for this layer group. If a tooltip is attached,
       * this name will be shown on hover over the marker.
       *
       * @type {String}
       */
      name: {
        type: String,
        notify: true,
        observer: 'shouldUpdateInst'
      }
    },

    /**
     * Returns true if there is a valid latitude and longitude.
     * Used by child elements to determine if they are ready to
     * be added to their parent.
     */
    canAddInst() {
      return this.latLngIsValid(this.lat, this.lng, true);
    },

    /**
     * Returns true if val can be used as a number in L.LatLng
     *
     * @param {*} val
     * @return {Boolean}
     */
    _canBeNum(val) {
      return (!isNaN(val) && val !== "");
    },

    /**
     * Returns true if lat and lng are valid values that can be used to set a
     * marker's location. Prints an error if values are invalid (unless `hideError`
     * is set to true).
     *
     * @param {Number} lat
     * @param {Number} lng
     * @param {Boolean} hideError
     * @return {Boolean}
     */
    latLngIsValid(lat, lng, hideError) {
      var isValid = (typeof lat !== 'undefined' && this._canBeNum(lat)) && (typeof lng !== 'undefined' && this._canBeNum(lng));
      if (isValid) return true;
      if (!hideError) {
        console.log(`PX-MAP CONFIGURATION ERROR:
        You entered an invalid \`lat\` or \`lng\` attribute for ${this.is}. You must pass a valid number.`);
      }
      return false;
    },

    // extends the layer `addInst` method to harvest and fire events when the
    // markers are added
    addInst(parent) {
      // Bind custom events. Events will be unbound automatically.
      const addedFn = this._handleMarkerAdded.bind(this);
      const removedFn = this._handleMarkerRemoved.bind(this);
      const tapFn = this._handleMarkerTapped.bind(this);
      const mouseOverFn = this._handleMarkerMouseOver.bind(this);
      const mouseOutFn = this._handleMarkerMouseOut.bind(this);
      this.bindEvents({
        'add' : addedFn,
        'remove' : removedFn,
        'click' : tapFn,
        'mouseover' : mouseOverFn,
        'mouseout' : mouseOutFn
      }, this.marker);

      // Now call layer's add
      PxMapBehavior.LayerImpl.addInst.call(this, parent);
    },

    removeInst(parent) {
      // Fire the removed event. If the marker is removed after its events are
      // cleaned up we'll never hit the `_handleMarkerRemoved` function.
      this._handleMarkerRemoved();

      // Now call layer's remove
      PxMapBehavior.LayerImpl.removeInst.call(this, parent);
    },

    /**
     * Creates new instance of leaflet marker.
     * Returns this.marker
     */
    createInst(options) {
      this.marker = L.marker(options.geometry, options.config);

      /*
       * Used by other map elements to determine if this is a marker. Useful for
       * looping through layers and determining which should be added to the
       * visible bounds of the map.
       */
      this.marker.isMarker = true;

      return this.marker;
    },

    /**
     * Compares lastOptions with nextOptions and only updates what as changed.
     * If marker has been removed set the opacity to 0.
     * If marker has been added set the opacity to 1.
     * If marker has moved or been added update the Lat and Lng.
     * If marker icon has changed update the icon.
     */
    updateInst(lastOptions, nextOptions) {
      const geomWasDefined = (typeof lastOptions.geometry === 'object');
      const geomIsDefined = (typeof nextOptions.geometry === 'object');
      const geomIsDifferent = (geomWasDefined && geomIsDefined &&
        (lastOptions.geometry.lat !== nextOptions.geometry.lat || lastOptions.geometry.lng !== nextOptions.geometry.lng)
      );
      if (geomWasDefined && !geomIsDefined) {
        this.elementInst.setOpacity(0);
      }
      if (!geomWasDefined && geomIsDefined) {
        this.elementInst.setLatLng(nextOptions.geometry);
        this.elementInst.setOpacity(1);
      }
      if (geomIsDifferent) {
        this.elementInst.setLatLng(nextOptions.geometry);
      }
      if (lastOptions.config.icon !== nextOptions.config.icon) {
        this.elementInst.setIcon(nextOptions.config.icon);
      }
    },

    getInstOptions() {
      const geometry = this.getLatLng();
      const config = {};
      config.title = (this.name || '');
      config.icon = this.getMarkerIcon();

      return { geometry, config };
    },

    // CUSTOM METHODS FOR MARKERS...

    /**
     * Returns the current latitude and longitude of the marker as an
     * `L.LatLng` object. If either `lat` or `lng` is not defined or has an
     * invalid value, returns undefined.
     *
     * @return {L.LatLng|undefined}
     */
    getLatLng() {
      if (this.latLngIsValid(this.lat, this.lng)) {
        return L.latLng(this.lat, this.lng);
      }
    },

    // SHOULD BE IMPLEMENTED WHEN EXTENDING...

    getMarkerIcon() {
      throw new Error('The `getMarkerIcon` method must be implemented.');
    },


    // HANDLE EVENTS...

    /**
     * Called when the marker is added to a layer instance.
     */
    _handleMarkerAdded() {
      const latLng = this.getLatLng();
      const detail = {};
      if (latLng) {
        detail.latLng = latLng;
        detail.lat = latLng.lat;
        detail.lng = latLng.lng;
      }
      this.fire('px-map-marker-added', detail);
    },
    /**
     * Fired when the marker is attached to a parent layer (e.g. the map).
     *
     *   * {Object} detail - Contains the event details
     *   * {Number|undefined} detail.lat - Latitude of the marker
     *   * {Number|undefined} detail.lng - Longitude of the marker
     *   * {L.LatLng|undefined} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-added
     */

    _handleMarkerRemoved() {
      const latLng = this.getLatLng();
      const detail = {};
      if (latLng) {
        detail.latLng = latLng;
        detail.lat = latLng.lat;
        detail.lng = latLng.lng;
      }
      this.fire('px-map-marker-removed', detail);
    },
    /**
     * Fired when the marker is detached to a parent layer (e.g. the map) and
     * removed from the DOM.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number|undefined} detail.lat - Latitude of the marker before removal
     *   * {Number|undefined} detail.lng - Longitude of the marker before removal
     *   * {L.LatLng|undefined} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-removed
     */

    _handleMarkerTapped() {
      const latLng = this.getLatLng();
      const detail = {};
      if (latLng) {
        detail.latLng = latLng;
        detail.lat = latLng.lat;
        detail.lng = latLng.lng;
      }
      this.fire('px-map-marker-tapped', detail);
    },
    /**
     * Fired when the marker is clicked or tapped by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number|undefined} detail.lat - Latitude of the marker
     *   * {Number|undefined} detail.lng - Longitude of the marker
     *   * {L.LatLng|undefined} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-tapped
     */

    _handleMarkerMouseOver() {
      const latLng = this.getLatLng();
      const detail = {};
      if (latLng) {
        detail.latLng = latLng;
        detail.lat = latLng.lat;
        detail.lng = latLng.lng;
      }
      this.fire('px-map-marker-mouse-over', detail);
    },
    /**
     * Fired when the mouse is hovered over the marker.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number|undefined} detail.lat - Latitude of the marker
     *   * {Number|undefined} detail.lng - Longitude of the marker
     *   * {L.LatLng|undefined} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-mouse-over
     */

    _handleMarkerMouseOut() {
      const latLng = this.getLatLng();
      const detail = {};
      if (latLng) {
        detail.latLng = latLng;
        detail.lat = latLng.lat;
        detail.lng = latLng.lng;
      }
      this.fire('px-map-marker-mouse-out', detail);
    }
    /**
     * Fired when the mouse pointer no longer is over the pointer.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number|undefined} detail.lat - Latitude of the marker
     *   * {Number|undefined} detail.lng - Longitude of the marker
     *   * {L.LatLng|undefined} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-mouse-out
     */
  };
  /* Bind Marker behavior */
  /** @polymerBehavior */
  PxMapBehavior.Marker = [
    PxMapBehavior.Layer,
    PxMapBehavior.ParentLayer,
    PxMapBehavior.MarkerImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.SymbolMarker
   */
  PxMapBehavior.SymbolMarkerImpl = {
    properties: {
      /**
       * The visual type of the marker. Sets the color of the marker to indicate
       * the state of the thing it represents.
       *
       * - 'important' is red
       * - 'warning' is orange
       * - 'info' is blue
       * - 'unknown' is gray
       * - 'custom-n' is a custom color defined by the developer. Custom types
       * may be defined from 'custom-0' through 'custom-100' and must be defined
       * consecutively with no breaks between numbers.
       *
       * @type {String}
       */
      type: {
        type: String,
        reflectToAttribute: true,
        value: 'info',
        observer: '_updateMarkerIcon'
      },

      /**
       * An svg icon from px-icon-set that will be displayed in a map marker
       *
       * For example, this would set the marker's symbol to an airplane icon:
       *
       *     'px-obj:airplane'
       *
       * @type {String}
       */
      icon: {
        type: String,
        observer: '_updateMarkerIcon'
      }
    },

    /**
     * If this.markerIcon exist return the markerIcon.
     * If this.markerIcon doesn't exist create a new
     * markerIcon and return it.
     *
     * @return {this.markerIcon}
     */
    getMarkerIcon() {
      if (!this.markerIcon) {
        const options = this._getMarkerIconOptions();
        this.markerIcon = new PxMap.SymbolIcon(options);
      }
      return this.markerIcon;
    },

    /**
     *
     */
    _updateMarkerIcon() {
      if (!this.markerIcon) return;

      const options = this._getMarkerIconOptions();
      this.markerIcon = new PxMap.SymbolIcon(options);

      this.shouldUpdateInst();
    },

    /**
     *
     */
    _getMarkerIconOptions() {
      let options = {
        type: this.type,
        symbol: this.symbolClass,
        icon: this.icon,
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined,
        stroke: this.getComputedStyleValue("--iron-icon-stroke-color"),
        strokeWidth: this.getComputedStyleValue("--iron-icon-stroke-width"),
        fill: this.getComputedStyleValue("--iron-icon-fill-color")
      };

      if (this.type.slice(0,7) === "custom-") {
        options.color = this.getComputedStyleValue(`--px-map-color-${this.type}`);
      }

      return options;
    }
  };

  /* Bind SymbolMarker behavior */
  /** @polymerBehavior */
  PxMapBehavior.SymbolMarker = [
    PxMapBehavior.Marker,
    PxMapBehavior.SymbolMarkerImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.StaticMarker
   */
  PxMapBehavior.StaticMarkerImpl = {
    properties: {
      /**
       * The visual type of the marker. Sets the color of the marker to indicate
       * the state of the thing it represents.
       *
       * - 'important' is red
       * - 'warning' is orange
       * - 'info' is blue
       * - 'unknown' is gray
       * - 'custom-n' is a custom color defined by the developer. Custom types
       * may be defined from 'custom-0' through 'custom-100' and must be defined
       * consecutively with no breaks between numbers.
       *
       * @type {String}
       */
      type: {
        type: String,
        reflectToAttribute: true,
        value: 'info',
        observer: '_updateMarkerIcon'
      }
    },

    /**
     * If this.markerIcon exist return the markerIcon.
     * If this.markerIcon doesn't exist create a new
     * markerIcon and return it.
     * @return {this.markerIcon}
     */
    getMarkerIcon() {
      if (!this.markerIcon) {
        const options = this._getMarkerIconOptions();
        this.markerIcon = new PxMap.StaticIcon(options);
      }

      return this.markerIcon;
    },

    /**
     *
     */
    _updateMarkerIcon() {
      if (!this.markerIcon) return;

      const options = this._getMarkerIconOptions();
      this.markerIcon = new PxMap.StaticIcon(options);

      this.shouldUpdateInst();
    },

    /**
     *
     */
    _getMarkerIconOptions() {
      let options = {
        type: this.type || '',
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };

      if (this.type.slice(0,7) === "custom-") {
        options.color = this.getComputedStyleValue(`--px-map-color-${this.type}`);
      }

      return options;
    }
  };
  /* Bind StaticMarker behavior */
  /** @polymerBehavior */
  PxMapBehavior.StaticMarker = [
    PxMapBehavior.Marker,
    PxMapBehavior.StaticMarkerImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.LocateMarker
   */
  PxMapBehavior.LocateMarkerImpl = {
    properties: {
      /**
       * The accuracy margin of error in meters from the centerpoint of the
       * location marker. (e.g. `12.23` for 12.23 meters)
       *
       * @type {Number}
       */
      accuracy: {
        type: Number,
        observer: 'shouldUpdateInst'
      }
    },

    /**
     *
     */
    createInst(options) {
      // There are two different pieces that make up the locate marker: a
      // `CircleMarker` which draws the base blue dot, and an optional `Circle`
      // representing the accuracy of the location. They're combined together
      // in a `FeatureGroup` to ensure they share interactive bindings like popups.
      this.markerBaseIcon = new CircleMarkerWithTitle(options.geometry, options.baseConfig);
      this.markerAccuracyIcon = L.circle(options.geometry, options.accuracyRadius, options.accuracyConfig);
      this.markerGroup = L.featureGroup([this.markerAccuracyIcon, this.markerBaseIcon]);

      /*
       * Used by other map elements to determine if this is a marker. Useful for
       * looping through layers and determining which should be added to the
       * visible bounds of the map.
       */
      this.markerGroup.isMarker = true;

      /*
       * Bind the `getLatLng` method to this `FeatureGroup` instance so it can
       * walk like a marker and talk like a marker.
       */
      this.markerGroup.getLatLng = this.getLatLng.bind(this);

      return this.markerGroup;
    },

    /**
     *
     */
    updateInst(lastOptions, nextOptions) {
      const geomWasDefined = (typeof lastOptions.geometry === 'object');
      const geomIsDefined = (typeof nextOptions.geometry === 'object');
      const geomIsDifferent = (geomWasDefined && geomIsDefined &&
        (lastOptions.geometry.lat !== nextOptions.geometry.lat || lastOptions.geometry.lng !== nextOptions.geometry.lng)
      );
      if (geomWasDefined && !geomIsDefined) {
        this.markerBaseIcon.setStyle({ opacity: 0, fillOpacity: 0 });
        this.markerAccuracyIcon.setStyle({ opacity: 0, fillOpacity: 0 });
      }
      if (!geomWasDefined && geomIsDefined) {
        this.markerBaseIcon.setLatLng(nextOptions.geometry);
        this.markerAccuracyIcon.setLatLng(nextOptions.geometry);
        this.markerBaseIcon.setStyle(nextOptions.baseConfig);
        this.markerAccuracyIcon.setStyle(nextOptions.accuracyConfig);
      }
      if (geomIsDifferent) {
        this.markerBaseIcon.setLatLng(nextOptions.geometry);
        this.markerAccuracyIcon.setLatLng(nextOptions.geometry);
      }
      if (lastOptions.accuracyRadius !== nextOptions.accuracyRadius) {
        this.markerAccuracyIcon.setRadius(nextOptions.accuracyRadius);
      }
      if (lastOptions.baseConfig.title !== nextOptions.baseConfig.title) {
        this.markerBaseIcon.setTitle(nextOptions.baseConfig.title);
      }
    },

    /**
     *
     */
    getInstOptions() {
      // Get the geometry of the marker
      const geometry = this.getLatLng();

      // Configure the base icon. Most options are static, but the border color
      // and fill color can be set with CSS variables.
      const baseConfig = {};
      baseConfig.radius = 7.5;
      baseConfig.stroke = true;
      baseConfig.color = this.getComputedStyleValue('--internal-px-map-marker-locate-icon-border-color');
      baseConfig.weight = 3;
      baseConfig.opacity = 1;
      baseConfig.fill = true;
      baseConfig.fillColor = this.getComputedStyleValue('--internal-px-map-marker-locate-icon-color');
      baseConfig.fillOpacity = 1;
      baseConfig.className = `map-marker-locate-base ${this.isShadyScoped() ? this.getShadyScope() : ''}`;
      baseConfig.title = (this.name || '');

      // Calculates the radius of the circle from the accuracy passed in and
      // the minimum size required to draw the base marker
      const accuracyRadius = this.accuracy || 0;

      // Configure the accuracy icon
      const accuracyConfig = {};
      accuracyConfig.stroke = false;
      accuracyConfig.opacity = 0;
      accuracyConfig.fill = true;
      accuracyConfig.fillColor = this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-color');
      accuracyConfig.fillOpacity = this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-opacity');
      accuracyConfig.className = `map-marker-locate-accuracy ${this.isShadyScoped() ? this.getShadyScope() : ''}`;

      return { geometry, baseConfig, accuracyRadius, accuracyConfig };
    }
  };
  /* Bind LocateMarker behavior */
  /** @polymerBehavior */
  PxMapBehavior.LocateMarker = [
    PxMapBehavior.Marker,
    PxMapBehavior.LocateMarkerImpl
  ];

  const CircleMarkerWithTitle = L.CircleMarker.extend({
    options: {
      title: ''
    },

    setTitle: function (title) {
      this.options.title = title || '';
      if (this._path && this.options.title === '') {
        this._path.innerHTML = '';
      }
      if (this._path && this.options.title !== '') {
        this._path.innerHTML = `<title>${this.options.title}</title>`;
      }
    },

    onAdd: function() {
      L.CircleMarker.prototype.onAdd.call(this);
      if(this.options.title !== '') {
        this._path.innerHTML = `<title>${this.options.title}</title>`;
      }
    }
  });

  /* Bind CircleMarkerWithTitle klass */
  PxMap.CircleMarkerWithTitle = CircleMarkerWithTitle;

})();
