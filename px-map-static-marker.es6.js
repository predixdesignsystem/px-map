(function(){
  'use strict';

  class PxMapStaticMarker {
    /* Name for the component */
    get is() { return 'px-map-static-marker'; }

    /* Behaviors to import for this component */
    get behaviors() {
      return [
        window.PxMapBehavior.DistributeProperties,
        window.PxMapBehavior.Layer
      ];
    }

    /* Properties to attach to distributed light DOM children */
    get distributions() { return ['layerInstance as parentInstance']; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * The latitude of the marker. Set a value to draw the maker at a default
         * latitude. Listen for updates if the marker is draggable or
         * created dynamically by the user.
         *
         * @type {Number}
         */
        lat: {
          type: Number,
          notify: true
        },

        /**
        * The longitude of the marker. Set a value to draw the maker at a default
        * longitude. Listen for updates if the marker is draggable or
        * created dynamically by the user.
         *
         * @type {Number}
         */
        lon: {
          type: Number,
          notify: true
        },

        /**
         * The visual type of the marker. Sets the color of the marker to indicate
         * the state of the thing it represents. Choose from 'important', 'warning',
         * or 'info', or 'unknown'. Defaults to 'info'.
         *
         * @type {String}
         */
        type: {
          type: String,
          reflectToAttribute: true,
          value: 'info'
        },
        // @TODO: The type cannot be updated right now. Need to determine how
        // to change the class on the Leaflet marker after it is attached
        // dynamically.

        /**
         * A reference to the parent instance that this component will attach
         * to when drawn on the map.
         *
         * @type {Object}
         */
        parentInstance: {
          type: Object,
          notify: true,
          observer: 'ensureLayerAttached'
        }
      }
    }

    _createLayer() {
      const marker = this._createMarker();
      return marker;
    }

    _attachLayer() {
      if (this.parentInstance) {
        this._captureMarkerEvents(this.layerInstance);
        return this.parentInstance;
      }
    }

    /**
     * Creates a marker from this marker's current properties and returns
     * the new instance.
     */
    _createMarker() {
      const geometry = [this.lat, this.lon];
      const icon = this._createStaticMarkerIcon();
      const marker = L.marker(geometry, { icon: icon });
      return marker;
    }

    /**
     * Creates and configures a styled icon that can be attached to a marker.
     */
    _createStaticMarkerIcon() {
      const options = {};

      // To get shady DOM CSS styling, we need to hack `style-scope px-map`
      // onto the className to have styles applied
      var typeModifier = (this.type && this.type.length) ? `static-map-icon--${this.type}` : '';
      options.className = `static-map-icon ${typeModifier}`;

      // HTML that we style with CSS to 'draw' the marker
      options.html = `
      <i class="static-map-icon__body style-scope px-map"></i>
      <i class="static-map-icon__marker style-scope px-map"></i>
      <i class="static-map-icon__descender style-scope px-map"></i>`

      // Set the icon size, anchor, and popup anchor
      options.popupAnchor = L.point(1,-38);
      options.iconSize = L.point(50, 50);
      options.iconAnchor = L.point(9.01, 39.5);

      return L.divIcon(options);
    }

    /**
     * Configures handler functions to capture, react to, or forward events
     * from a marker instance.
     *
     * @param {Object} marker
     */
    _captureMarkerEvents(marker) {
      marker.on('add', (evt) => {
        this.fire(`px-map-marker-${evt.type}`, evt);
      }, this);
    }

  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapStaticMarker);
})()


// (function(){
//   'use strict';
//
//   class PxMapStaticMarker {
//     /* Name for the component */
//     get is() { return 'px-map-static-marker'; }
//
//     /* Behaviors to import for this component */
//     get behaviors() { return [window.PxMapBehavior.DistributeProperties]; }
//
//     /* Properties to attach to distributed light DOM children */
//     get distributions() { return ['markerInstance']; }
//
//     /* Properties for this component */
//     get properties() {
//       return {
//         /**
//          * The latitude of the marker. Set a value to draw the maker at a default
//          * latitude. Listen for updates if the marker is draggable or
//          * created dynamically by the user.
//          *
//          * @type {Number}
//          */
//         lat: {
//           type: Number,
//           notify: true
//         },
//
//         /**
//         * The longitude of the marker. Set a value to draw the maker at a default
//         * longitude. Listen for updates if the marker is draggable or
//         * created dynamically by the user.
//          *
//          * @type {Number}
//          */
//         lon: {
//           type: Number,
//           notify: true
//         },
//
//         /**
//          * The marker instance created by this component and attached to a layer.
//          * Used to show a point on the map.
//          *
//          * @type {Object}
//          */
//         markerInstance: {
//           type: Object,
//           notify: true,
//           readOnly: true
//         },
//
//         /**
//          * A reference to the layer instance passed down from the parent
//          * `px-map-overlay-layer` this marker belongs to. Used by the component
//          * to draw itself on the layer.
//          *
//          * @type {Object}
//          */
//         layerInstance: {
//           type: Object,
//           notify: true
//         },
//
//         /**
//          * A reference to the active map instance passed down from `px-map`.
//          * Used by this component to draw itself on the map.
//          *
//          * @type {Object}
//          */
//         mapInstance: {
//           type: Object,
//           notify: true
//         }
//       }
//     }
//
//     attached() {
//       window.requestAnimationFrame(this._drawMarker.bind(this));
//     }
//
//     /**
//      * Attempts to create the marker so it can be attached to a layer.
//      */
//     _drawMarker() {
//       if (!this.markerInstance) {
//         let marker = this._createMarker();
//         this._setMarkerInstance(marker);
//       }
//       this._attachMarkerToMap();
//     }
//
//     /**
//      * If a layer has been applied to this marker, attach the marker to the layer
//      * so it can be drawn on the map. If no layer instance is ready, throws the
//      * task back into the stack to attach to the layer once it's ready.
//      */
//     _attachMarkerToMap() {
//       if (this.markerInstance && this.layerInstance && this.layerInstance.hasLayer && !this.layerInstance.hasLayer(this.markerInstance)) {
//         this.markerInstance.addTo(this.layerInstance);
//       }
//       else {
//         window.requestAnimationFrame(this._attachMarkerToMap.bind(this));
//       }
//     }
//
//     /**
//      * Creates a marker from this marker's current properties and returns
//      * the new instance.
//      */
//     _createMarker() {
//       // Create the marker instance
//       const geometry = [this.lat, this.lon];
//       const icon = this._createStaticMarkerIcon();
//       const marker = L.marker(geometry, { icon: icon });
//
//       // Attach event handlers to the marker
//       this._captureMarkerEvents(marker);
//
//       // Return the marker instance to be attached
//       return marker;
//     }
//
//     /**
//      * Creates and configures a styled icon that can be attached to a marker.
//      */
//     _createStaticMarkerIcon() {
//       const options = {};
//
//       // To get shady DOM CSS styling, we need to hack `style-scope px-map`
//       // onto the className to have styles applied
//       options.className = 'static-map-icon style-scope px-map';
//
//       // HTML that we style with CSS to 'draw' the marker
//       options.html = `
//       <i class="static-map-icon__body style-scope px-map"></i>
//       <i class="static-map-icon__marker style-scope px-map"></i>
//       <i class="static-map-icon__descender style-scope px-map"></i>`
//
//       // Anchor the popup open position
//       options.popupAnchor = L.point(1,-38);
//
//       return L.divIcon(options);
//     }
//
//     /**
//      * Configures handler functions to capture, react to, or forward events
//      * from a marker instance.
//      *
//      * @param {Object} marker
//      */
//     _captureMarkerEvents(marker) {
//       marker.on('add', (evt) => {
//         this.fire(`px-map-marker-${evt.type}`, evt);
//       }, this);
//     }
//
//   }
//
//   /* Register this component with the Polymer constructor. */
//   Polymer(PxMapStaticMarker);
// })()
