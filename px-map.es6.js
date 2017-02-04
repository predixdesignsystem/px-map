(function() {
  'use strict';

  class PxMap {
    /* Name for the component */
    get is() { return 'px-map'; }

    /* Behaviors to import for this component */
    get behaviors() { return [window.PxMapBehaviors.DistributeProperties]; }

    /* Properties to attach to distributed light DOM children */
    get distributions() { return ['mapInstance']; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * The active map instance. Currently, the only mapping base library offered
         * is Leaflet, so this will be a reference to the `L.map` that is displaying
         * all the relevant map data.
         *
         * This is exposed as a framework-level building block to allow binding of the
         * map instance to other elements that call methods on it. Do not call methods
         * directly on the map instance. Use the web component APIs provided by
         * `px-map` and its subcomponents to manipulate the map. If you call methods
         * directly on this instance, your data model may become out-of-sync.
         *
         * This map instance will need to be passed down to subcomponents so they
         * can draw themselves on the map. Use declarative data binding to pass it.
         * For example:
         *
         * ```
         * <px-map map-instance="{{map}}">
         *   <px-map-overlay-layer map-instance="{{map}}"></px-map-overlay-layer>
         * </px-map>
         * ```
         *
         * You can also use the `DistributeProperties` behavior to automatically
         * distribute the map instance to all light DOM children as they are added,
         * and keep the map instance up-to-date.
         *
         * @type {Object}
         */
        mapInstance: {
          type: Object,
          notify: true,
          readOnly: true
        },

        // ---------------------------------------------------------------------
        // CONFIGURES THE VIEW SETTINGS FOR THE ACTIVE MAP
        // ---------------------------------------------------------------------

        /**
         * The Coordinate Reference System to use when drawing the map. Leave the
         * default if you're not sure what this means.
         *
         * @type {String}
         */
        crs: {
          type: String,
          value: 'L.CRS.EPSG3857',
          notify: true
        },

        /**
         * The latitude of the active map center. Can be used to set or update
         * the center of the map, or read from after the user moves the map to
         * get updated coordinates.
         *
         * @type {Number}
         */
        lat: {
          type: Number,
          value: 37.7672375,
          notify: true
        },

        /**
         * The longitude of the active map center. Can be used to set or update
         * the center of the map, or read from after the user moves the map to
         * get updated coordinates.
         *
         * @type {Number}
         */
        lon: {
          type: Number,
          value: -121.9584131,
          notify: true
        },

        /**
         * The zoom level of the active map. Can be used to set or update
         * the zoom level of the map, or read from after the user changes the
         * map zoom level to an updated value.
         *
         * @type {Number}
         */
        zoom: {
          type: Number,
          value: 10,
          notify: true
        },

        /**
         * The maximum zoom level for the active map. Will be applied to all
         * layers of the map.
         *
         * @type {Number}
         */
        maxZoom: {
          type: Number,
        },

        /**
         * The minimum zoom level for the active map. Will be applied to all
         * layers of the map.
         *
         * @type {Number}
         */
        minZoom: {
          type: Number,
        },

        /**
         * Restricts the view of the map to a given geographical boundary. The
         * user will be bounced back if they attempt to pan outside the view.
         * Disabled by default, letting the user pan to any point on the map.
         *
         * Pass an array of `<LatLng>` values like the following:
         *
         *        [40.712, -74.227], [40.774, -74.125]
         *
         * @type {Array}
         */
        bounds: {
          type: Array
        },

        // ---------------------------------------------------------------------
        // ENABLES FEATURES THAT CHANGE THE MAP BEHAVIOR
        // ---------------------------------------------------------------------

        // ...

        // ---------------------------------------------------------------------
        // TELL THE MAP HOW TO RESIZE
        // ---------------------------------------------------------------------

        /**
         * Uses flexbox to set the size of the map. Set the parent container
         * to use `display: flex;` in your CSS and the map will automatically
         * fill the container's available height and width.
         *
         * @type {Boolean}
         */
        flexToSize: {
          type: Boolean,
          reflectToAttribute: true,
          value: false
        }
      }
    }

    ready() {
      window.requestAnimationFrame(this._drawMap.bind(this));
    }

    /**
     * Attemps to draw the map, if it hasn't already been drawn. If the parent
     * has no height, throws it back into the stack to draw on the next
     * animation frame.
     */
    _drawMap() {
      const x = this._drawX = this.parentElement.clientWidth;
      const y = this._drawY = this.parentElement.clientHeight;

      if (!x || !y) {
        window.requestAnimationFrame(this._drawMap.bind(this));
        return;
      }

      // Try to find an initialized map instance. If there is none, create it.
      if (!this.mapInstance) {
        const mapDrawEl = Polymer.dom(this.root).querySelector('#map');
        let map = L.map(mapDrawEl, {
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        });

        // @TODO: This is a shim for browsers without shadow DOM. We need to
        // re-append the `#map` element or it won't get the 'style-scope' CSS
        // classes needed to style it or its children. That's bad. When the
        // polyfill is updated or support is cut for browsers without shadow
        // DOM, this should be removed.
        Polymer.dom(this.root).appendChild(mapDrawEl);

        // Attach to the read-only `mapInstance`
        this._setMapInstance(map);
      }

      // Ensure a tile layer is applied to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      }).addTo(this.mapInstance);

      // Set the view from current defaults
      this._updateMapView();

      // Temporary
      // L.marker([this.lat, this.lon]).addTo(this.mapInstance);
      // let getStyles = Polymer.dom(this.root).appendChild(/*div*/).classList
      // let staticMarkerDivIcon = L.divIcon({className: 'static-map-icon style-scope px-map', html: '<i class="static-map-icon__body style-scope px-map"></i><i class="static-map-icon__marker style-scope px-map"></i><i class="static-map-icon__descender style-scope px-map"></i>'});
      // let newMarker = L.marker([this.lat, this.lon], {icon:staticMarkerDivIcon}).addTo(this.mapInstance);
    }

    /**
     * Called when the `lat`, `lon`, or `zoom` is set or updated. Sets the active
     * map center to the new values.
     */
    _updateMapView() {
      if (this.mapInstance) {
        let updateFn = () => { this.mapInstance.setView([this.lat, this.lon], this.zoom) };
        this.debounce('update-map-view', updateFn, 1);
      }
    }

  }

  /* Register this element with the Polymer constructor */
  Polymer(PxMap);
})()
