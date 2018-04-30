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

  /**
   *
   * @polymerBehavior PxMapBehavior.Control
   */
  PxMapBehavior.ControlImpl = {
    properties: {
      /**
       * Positions the control in one of the map corners. Choose from 'topright',
       * 'topleft', 'bottomright', or 'bottomleft'.
       *
       * @type {String}
       */
      position: {
        type: String,
        value: 'bottomright',
        observer: 'shouldUpdateInst'
      }
    },

    addInst(parent) {
      this.elementInst.addTo(parent);
    },

    removeInst(parent) {
      this.elementInst.remove();
    },

    getInstOptions() {
      return {
        position: this._getValidPosition()
      }
    },

    _getValidPosition() {
      const positionIsValid = (/^(topright|topleft|bottomright|bottomleft)$/.test(this.position));

      if (!positionIsValid) {
        console.log(`PX-MAP CONFIGURATION ERROR:
          You entered an invalid \`position\` attribute '${this.position}' for ${this.is}.
          Position must be a string with one of the following values:
          - 'topright'
          - 'topleft'
          - 'bottomright'
          - 'bottomleft'
          Defaulting to 'bottomright'.`);

        return 'bottomright';
      }

      return this.position;
    }
  };
  /* Bind Control behavior */
  /** @polymerBehavior */
  PxMapBehavior.Control = [
    PxMapBehavior.Layer,
    PxMapBehavior.ControlImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.ZoomControl
   */
  PxMapBehavior.ZoomControlImpl = {
    properties: {
      /**
       * A valid IETF language tag as a string that `app-localize-behavior` will
       * use to localize this component (see https://en.wikipedia.org/wiki/IETF_language_tag)
       * for a list of valid tags.
       *
       * Examples:
       * - 'en' (English)
       * - 'es' (Spanish)
       * - 'zh-cn' (Simplified Chinese)
       *
       * See https://github.com/PolymerElements/app-localize-behavior for API
       * documentation and more information.
       *
       * @type {String}
       */
      language: {
        type: String,
        value: 'en'
      },

      /**
       * Object providing localized strings that `app-localize-behavior` will use
       * to localize this component. The first key should be a valid IETF language
       * tag, followed by key/value pairs for each string you need to localize.
       * Settings can also be loaded from a locales.json file at the app level.
       *
       * For this component, the following keys can be localized:
       * - 'Zoom in' - [en default] 'Zoom in'
       * - 'Zoom out' - [en default] 'Zoom out'
       *
       * See https://github.com/PolymerElements/app-localize-behavior for API
       * documentation and more information.
       *
       * @type {Object}
       */
      resources: {
        type: Object,
        value: function() {
          return {
            'en': {'Zoom in': 'Zoom in', 'Zoom out': 'Zoom out'}
          };
        }
      }
    },

    createInst(options) {
      return new PxMap.ZoomControl(options);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.position !== nextOptions.position) {
        this.elementInst.setPosition(nextOptions.position);
      }
    },

    getInstOptions() {
      const options = PxMapBehavior.ControlImpl.getInstOptions.call(this);

      options.position = this.position;

      options.zoomInText = '<px-icon icon="px-utl:add"></px-icon>'
      options.zoomOutText = '<px-icon icon="px-utl:remove"></px-icon>'

      // @TODO: An import order issue with the `AppLocalizeBehavior` mixin can
      // cause the zoom control not to draw. Check if this.localize exists
      // and can be called before doing so.
      if (typeof this.localize === 'function') {
        options.zoomInTitle = this.localize('Zoom in');
        options.zoomOutTitle =  this.localize('Zoom out');
      }

      return options;
    }
  };
  /* Bind ZoomControl behavior */
  /** @polymerBehavior */
  PxMapBehavior.ZoomControl = [
    Polymer.AppLocalizeBehavior,
    PxMapBehavior.Control,
    PxMapBehavior.ZoomControlImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.ScaleControl
   */
  PxMapBehavior.ScaleControlImpl = {
    properties: {
      /**
       * Shows an imperial unit scale (ft/mi) line if enabled. Multiple unit scales
       * can be enabled to show multiple scales. If no units are enabled,
       * the scale cannot be drawn.
       *
       * @type {Boolean}
       */
      imperialUnits: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Shows a metric unit scale (m/km) line if enabled. Multiple unit scales
       * can be enabled to show multiple scales. If no units are enabled,
       * the scale cannot be drawn.
       *
       * @type {Boolean}
       */
      metricUnits: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Enable this property to reverse the scale's colors, making it
       * easier to read against a dark tile layer.
       *
       * @type {Boolean}
       */
      reverseColors: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      }
    },

    createInst(options) {
      return new PxMap.ScaleControl(options);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.position !== nextOptions.position) {
        this.elementInst.setPosition(nextOptions.position);
      }
      if (lastOptions.reverseColors !== nextOptions.reverseColors) {
        this.elementInst.setReverseColors(nextOptions.reverseColors);
      }
      if (lastOptions.metric !== nextOptions.metric) {
        this.elementInst.showMetric(nextOptions.metric);
      }
      if (lastOptions.imperial !== nextOptions.imperial) {
        this.elementInst.showImperial(nextOptions.imperial);
      }
    },

    getInstOptions() {
      const options = PxMapBehavior.ControlImpl.getInstOptions.call(this);

      options.imperial = this.imperialUnits;
      options.metric = this.metricUnits;
      options.reverseColors = this.reverseColors;

      return options;
    }
  };
  /* Bind ScaleControl behavior */
  /** @polymerBehavior */
  PxMapBehavior.ScaleControl = [
    PxMapBehavior.Control,
    PxMapBehavior.ScaleControlImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.LocateControl
   */
  PxMapBehavior.LocateControlImpl = {
    properties: {
      /**
       * A title for the locate button. Will be used to inform users with
       * screen reading devices what the button does.
       *
       * @type {String}
       */
      locateTitle: {
        type: String,
        value: 'Zoom to your location',
        observer: 'shouldUpdateInst'
      },

      /**
       * If enabled, the map will set its view center to the user's current
       * location after a successful locate browser API call.
       *
       * @type {Boolean}
       */
      moveToLocation: {
        type: Boolean,
        value: false
      },

      /**
       * The maximum zoom level to set when the map moves to the user's location.
       * The `moveToLocation` attribute must also be set for the map to move to the
       * user's location after a location event.
       *
       * @type {Number}
       */
      moveMaxZoom: {
        type: Number,
        observer: 'shouldUpdateInst'
      },

      /**
       * After the user's location is successfully found, the result will be
       * placed here. The object will have the following keys:
       *
       * - {Number} `lat` - User's found latitude
       * - {Number} `lng` - User's found longitude
       * - {Number} `timestamp` - Timestamp (UNIX format) for the location event
       * - {Number} `accuracy` - The accuracy margin of error in meters from the centerpoint
       * - {L.LatLngBouds} `bounds` - A bounding rectangle detailing the accuracy of the location
       *
       * @type {Object}
       */
      lastFoundLocation: {
        type: Object,
        value: function(){ return {}; },
        notify: true
      }
    },

    addInst(parent) {
      PxMapBehavior.ControlImpl.addInst.call(this, parent);

      // Bind custom events for this control. Events will be unbound automatically.
      const foundFn = this._handleLocationFound.bind(this);
      const errorFn = this._handleLocationError.bind(this);
      const tapFn = this._handleLocationTap.bind(this);
      this.bindEvents({
        'locationfound' : foundFn,
        'locationerror' : errorFn,
        'controlclick' : tapFn
      });
    },

    removeInst(parent) {
      PxMapBehavior.ControlImpl.removeInst.call(this, parent);

      // Unbind events if necessary...
    },

    createInst(options) {
      return new PxMap.LocateControl(options);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.position !== nextOptions.position) {
        this.elementInst.setPosition(nextOptions.position);
      }
      if (lastOptions.moveMaxZoom !== nextOptions.moveMaxZoom) {
        this.elementInst.setMoveMaxZoom(nextOptions.moveMaxZoom);
      }
    },

    getInstOptions() {
      return {
        position: this.position,
        locateIcon: '<px-icon icon="px-vis:crosshair"></px-icon>',
        locateTitle: this.locateTitle,
        moveToLocation: this.moveToLocation,
        moveMaxZoom: this.moveMaxZoom
      };
    },

    /**
     * Bound to the control instance's `locationfound` event. Called when that
     * event is fired. Parses the event details and fires an event from this
     * component that the developer can handle. Also sets the `lastFoundLocation`
     * property and notifies it.
     */
    _handleLocationFound(evt) {
      if (!evt) return;

      const detail = {
        lat: evt.latitude || null,
        lng: evt.longitude || null,
        timestamp: evt.timestamp || null,
        bounds: evt.bounds || null
      };

      // Attempt to calculate the distance in meters from the center
      // of the bounds to its NorthWest extent. This is our accuracy.
      detail.accuracy = (evt.bounds.getCenter() && evt.bounds.getNorthWest()) ? evt.bounds.getCenter().distanceTo(evt.bounds.getNorthEast()) : null;

      this.fire('px-map-control-locate-succeeded', detail);

      this.set('lastFoundLocation', detail);
      this.notifyPath('lastFoundLocation.*');
    },
    /**
     * Fired after the user's location is successfully found.
     *
     * @event px-map-control-locate-succeeded
     * @param {Object} detail
     * @param {Number} detail.lat - The user's found latitude
     * @param {Number} detail.lng - The user's found longitude
     * @param {Number} detail.timestamp - The UNIX formatted timestamp detailing when  the location was found
     * @param {L.LatLngBouds} [detail.bounds] - A custom Leaflet object describing the visible bounds of the map after moving to the user's location, if available
     * @param {Number} [detail.accuracy] - The margin of error of the accuracy in meters from its centerpoint to its maximum extent
     */

    /**
     * Bound to the control instance's `locationerror` event. Called when that
     * event is fired. Parses the event details and fires an event from this
     * component that the developer can handle.
     */
    _handleLocationError(evt) {
      if (!evt) return;

      const detail = {
        message: evt.message || null
      };

      this.fire('px-map-control-locate-failed', detail);
    },
    /**
     * Fired after the control fails to find the user's location.
     *
     * @event px-map-control-locate-failed
     * @param {Object} detail
     * @param {String} detail.message - A message describing the reason for the failure
     */

     /**
      * Bound to the control instance's `controlclick` event. Called when that
      * event is fired, but only handles the event if its `evt.action` is 'locate'.
      * Fires an event from this component that the developer can handle.
      */
    _handleLocationTap(evt) {
      if (!evt || evt.action !== 'locate') return;

      this.fire('px-map-locate-button-tapped');
    }
    /**
     * Fired when the user clicks the locate button and initiates a location search.
     *
     * @event px-map-locate-button-tapped
     */
  };
  /* Bind LocateControl behavior */
  /** @polymerBehavior */
  PxMapBehavior.LocateControl = [
    PxMapBehavior.Control,
    PxMapBehavior.LocateControlImpl
  ];

  /****************************************************************************
   * KLASSES
   ****************************************************************************/

  /* Ensures the klass namespace is created */
  window.PxMap = (window.PxMap || {});

  /**
   *
   * @class PxMap.ScaleControl
   */
  class ScaleControl extends L.Control.Scale {
    initialize(options) {
      super.initialize(options);
    }

    onAdd(map) {
      // Call default `onAdd` for scale to get the container
      this.__scaleContainer = super.onAdd(map);

      // Determine if we should add the reverse modifier CSS class
      if (this.options.reverseColors === true) {
        L.DomUtil.addClass(this.__scaleContainer, 'leaflet-control-scale--reverse');
      }

      return this.__scaleContainer;
    }

    onRemove(map) {
      super.onRemove(map);

      // Clean up scaleContainer reference
      this.__scaleContainer = null;
    }

    /**
     * Updates the `reverseColors` setting for the scale control. If the
     * `shouldReverse` param doesn't match the current classes on the
     * scale, updates the scale with the necessary classes.
     *
     * @param {Boolean} shouldReverse - If `true`, scale should be reversed. If `false`, it should not be.
     */
    setReverseColors(shouldReverse) {
      if (!this.__scaleContainer) return;

      if (shouldReverse && !this.options.reverseColors) {
        this.options.reverseColors = true;
        L.DomUtil.addClass(this.__scaleContainer, 'leaflet-control-scale--reverse');
      }

      if (!shouldReverse && this.options.reverseColors) {
        this.options.reverseColors = false;
        L.DomUtil.removeClass(this.__scaleContainer, 'leaflet-control-scale--reverse');
      }
    }

    /**
     * Shows or hides the imperial unit scale.
     *
     * @param {Boolean} shouldShowImperial - If `true`, ensures imperial unit scale is visible.
     */
    showImperial(shouldShowImperial) {
      if (!this.__scaleContainer) return;

      // No imperial scale exists, create one
      if (shouldShowImperial && !this.options.imperial && !this._iScale) {
        this._iScale = L.DomUtil.create('div', 'leaflet-control-scale-line', this.__scaleContainer);
        this.options.imperial = true;
      }

      // We should remove the existing imperial scale
      if (!shouldShowImperial && this.options.imperial && this._iScale) {
        this.options.imperial = false;
        L.DomUtil.remove(this._iScale);
        this._iScale = null;
      }

      // Update the scale
      this._update();
    }

    /**
     * Shows or hides the metric unit scale.
     *
     * @param {Boolean} shouldShowMetric - If `true`, ensures metric unit scale is visible.
     */
    showMetric(shouldShowMetric) {
      if (!this.__scaleContainer) return;

      // No metric scale exists, create one
      if (shouldShowMetric && !this.options.metric && !this._mScale) {
        this._mScale =  L.DomUtil.create('div', 'leaflet-control-scale-line', this.__scaleContainer);
        this.options.metric = true;
      }

      // We should remove the existing metric scale
      if (!shouldShowMetric && this.options.metric && this._mScale) {
        this.options.metric = false;
        L.DomUtil.remove(this._mScale);
        this._mScale = null;
      }

      // Update the scale
      this._update();
    }

  };
  /* Bind ScaleControl klass */
  PxMap.ScaleControl = ScaleControl;

  /**
   *
   * @class PxMap.ZoomControl
   */
  class ZoomControl extends L.Control.Zoom {
    _zoomIn(e) {
      super._zoomIn(e);

      if (this._map && this._map.fire) {
        this._map.fire('controlclick', {
          src: this,
          action: 'zoomin'
        })
      }
    }

    _zoomOut(e) {
      super._zoomOut(e);

      if (this._map && this._map.fire) {
        this._map.fire('controlclick', {
          src: this,
          action: 'zoomout'
        });
      }
    }

    _fireZoomClickEvt(evt) {
    }
  };
  /* Bind ZoomControl klass */
  PxMap.ZoomControl = ZoomControl;

  /**
   *
   * @class PxMap.LocateControl
   */
  class LocateControl extends L.Control {
    initialize(options={}) {
      const defaultOptions = {
        position: 'bottomright',
        className: '',
        locateIcon: '<px-icon icon="px-utl:location"></px-icon>',
        locateTitle: 'Zoom to your location',
        locateTimeout: 10000,
        moveToLocation: true,
        moveMaxZoom: null
      };
      const composedOptions = Object.assign(defaultOptions, options);
      L.Util.setOptions(this, composedOptions);
    }

    onAdd(map) {
      const locateName = 'leaflet-control-locate';
      this.__container = L.DomUtil.create('div', `${locateName} leaflet-bar ${this.options.className}`);
      this.__locateButton = this._createButton(this.options.locateIcon, this.options.locateTitle, 'leaflet-control-locate-button', this.__container);

      /* Bind map events */
      L.DomEvent.on(map, 'locationfound', this._locationFound, this);
      L.DomEvent.on(map, 'locationerror', this._locationError, this);

      /* Bind button events */
      L.DomEvent.disableClickPropagation(this.__locateButton);
      L.DomEvent.on(this.__locateButton, 'click', L.DomEvent.stop);
      L.DomEvent.on(this.__locateButton, 'click', this._locate, this);
      L.DomEvent.on(this.__locateButton, 'click', this._refocusOnMap, this);

      return this.__container;
    }

    onRemove(map) {
      /* Unbind map events */
      L.DomEvent.off(map, 'locationfound', this._locationFound, this);
      L.DomEvent.off(map, 'locationerror', this._locationError, this);

      /* Unbind button events */
      L.DomEvent.off(this.__locateButton, 'click', L.DomEvent.stop);
      L.DomEvent.off(this.__locateButton, 'click', this._locate, this);
      L.DomEvent.off(this.__locateButton, 'click', this._refocusOnMap, this);
    }

    /**
     * Sets the max zoom level after location is found
     *
     * @param {Number|String} zoom
     */
    setMoveMaxZoom(zoom) {
      if (typeof zoom === 'string' && zoom.length && !isNaN(zoom)) {
        zoom = parseInt(zoom);
      }
      if (typeof zoom === 'number' && this.options.moveMaxZoom !== zoom) {
        this.options.moveMaxZoom = zoom;
      }
    }

    on(...args) {
      if (!this._map) {
        return undefined;
      }
      return this._map.on(...args);
    }

    off(...args) {
      if (!this._map) {
        return undefined;
      }
      return this._map.off(...args);
    }

    /**
     * Internal method that calls the public `locate` method and fires an event
     * to notify that the button has been clicked.
     */
    _locate(evt) {
      this._map.fire('controlclick', {
        src: this,
        action: 'locate'
      });
      this.locate(evt);
    }

    locate() {
      this.__locating = true;
      this._map.locate({
        setView: this.options.moveToLocation,
        maxZoom: this.options.moveMaxZoom,
        timeout: this.options.locateTimeout
      });
      this._setLocatingState();
    }

    reset() {
      this._setReadyState();
    }

    isDisabled() {
      return this.__disabled || false;
    }

    _createButton(html, title, className, container, clickFn) {
      const buttonEl = L.DomUtil.create('a', className, container);
      buttonEl.innerHTML = html;
      buttonEl.href = '#';
      buttonEl.title = title;

      // Tells screen readers to treat this as a button and read its title
      buttonEl.setAttribute('role', 'button');
      buttonEl.setAttribute('aria-label', title);

      return buttonEl;
    }

    _locationFound(evt) {
      if (this.__locating) {
        this.__locating = false;
        this._setReadyState();
      }
    }

    _locationError(evt) {
      if (this.__locating) {
        this.__locating = false;
        this._setReadyState();
      }
    }

    _setLocatingState() {
      if (!this.__locateButton || !this.__locating) return;

      L.DomUtil.addClass(this.__locateButton, 'leaflet-control-locate-button--locating');

      this.__disabled = true;
      this._updateDisabled();
    }

    _setReadyState() {
      if (!this.__locateButton || this.__locating) return;

      this.__locateButton.innerHTML = this.options.locateIcon;
      L.DomUtil.removeClass(this.__locateButton, 'leaflet-control-locate-button--locating');
      L.DomUtil.removeClass(this.__locateButton, 'leaflet-control-locate-button--error');

      this.__disabled = false;
      this._updateDisabled();
    }

    _updateDisabled() {
      if (!this.__locateButton) return;

      if (this.__disabled) {
        L.DomUtil.addClass(this.__locateButton, 'leaflet-control-locate-button--disabled');
      }
      if (!this.__disabled) {
        L.DomUtil.removeClass(this.__locateButton, 'leaflet-control-locate-button--disabled');
      }
    }
  };
  /* Bind LocateControl klass */
  PxMap.LocateControl = LocateControl;
})();
