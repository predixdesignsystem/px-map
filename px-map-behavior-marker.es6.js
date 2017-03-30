(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

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
       * this name will be shown on hover over the marker. If the map has a layer
       * control panel, the user will click this name to show, hide, or
       * manipulate this layer.
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
      return (typeof this.lat === 'number') && (typeof this.lng === 'number');
    },

    // extends the layer `addInst` method to harvest and fire events when the
    // markers are added
    addInst(parent) {
      // Bind custom events. Events will be unbound automatically.
      const addedFn = this._handleMarkerAdded.bind(this);
      const removedFn = this._handleMarkerRemoved.bind(this);
      const tapFn = this._handleMarkerTapped.bind(this);
      this.bindEvents({
        'add' : addedFn,
        'remove' : removedFn,
        'click' : tapFn
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
        this.elementInst.setOpacity(1);
      }
      if (geomIsDifferent || (!geomWasDefined && geomIsDefined)) {
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
     * `L.LatLng` object. If either `lat` or `lng` are not defined,
     * returns undefined.
     *
     * @return {L.LatLng|undefined}
     */
    getLatLng() {
      if (!this.lat || !this.lng) return undefined;
      return L.latLng(this.lat, this.lng);
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
      const {lat, lng} = latLng;
      const detail = {
        latLng: latLng,
        lat: lat,
        lng: lng
      };
      this.fire('px-map-marker-added', detail);
    },
    /**
     * Fired when the marker is attached to a parent layer (e.g. the map).
     *
     *   * {Object} detail - Contains the event details
     *   * {Number} detail.lat - Latitude of the marker
     *   * {Number} detail.lng - Longitude of the marker
     *   * {L.LatLng} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-added
     */

    _handleMarkerRemoved() {
      const latLng = this.getLatLng();
      const {lat, lng} = latLng;
      const detail = {
        latLng: latLng,
        lat: lat,
        lng: lng
      };
      this.fire('px-map-marker-removed', detail);
    },
    /**
     * Fired when the marker is detached to a parent layer (e.g. the map) and
     * removed from the DOM.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number} detail.lat - Latitude of the marker before removal
     *   * {Number} detail.lng - Longitude of the marker before removal
     *   * {L.LatLng} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-removed
     */

    _handleMarkerTapped() {
      const latLng = this.getLatLng();
      const {lat, lng} = latLng;
      const detail = {
        latLng: latLng,
        lat: lat,
        lng: lng
      };
      this.fire('px-map-marker-tapped', detail);
    }
    /**
     * Fired when the marker is clicked or tapped by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number} detail.lat - Latitude of the marker
     *   * {Number} detail.lng - Longitude of the marker
     *   * {L.LatLng} detail.latLng - Custom Leaflet object containing the lat and lng
     *
     * @event px-map-marker-tapped
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
       * A string of CSS class names that will be set on the `<i></i>` element
       * in the marker to draw its symbol. Use a fontawesome icon class
       * (http://fontawesome.io/) or load your own icon font and define your
       * own class.
       *
       * For example, this would set the marker's symbol to a briefcase icon:
       *
       *     'fa fa-briefcase'
       *
       * @type {String}
       */
      symbolClass: {
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
      return {
        type: this.type,
        symbol: this.symbolClass,
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };
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
      return {
        type: this.type || '',
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };
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
      this.markerBaseIcon = L.circleMarker(options.geometry, options.baseConfig);
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
      // If LatLng was previously defined and now is not, hide the markers
      if (geomWasDefined && !geomIsDefined) {
        this.markerBaseIcon.setStyle({ opacity: 0, fillOpacity: 0 });
        this.markerAccuracyIcon.setStyle({ opacity: 0, fillOpacity: 0 });
      }
      // If LatLng has changed or if it was just defined, set the new LatLng
      if (geomIsDifferent || (!geomWasDefined && geomIsDefined)) {
        this.markerBaseIcon.setLatLng(nextOptions.geometry);
        this.markerAccuracyIcon.setLatLng(nextOptions.geometry);
      }
      // If LatLng was just defined, ensure the markers are shown
      if (lastOptions && (!geomWasDefined && geomIsDefined)) {
        this.markerBaseIcon.setStyle(nextOptions.baseConfig);
        this.markerAccuracyIcon.setStyle(nextOptions.accuracyConfig);
      }

      if (lastOptions.accuracyRadius !== nextOptions.accuracyRadius) {
        this.markerAccuracyIcon.setRadius(nextOptions.accuracyRadius);
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
})();
