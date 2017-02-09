(function(){
  'use strict';

  class PxMapStaticMarker {
    /* Name for the component */
    get is() {
      return 'px-map-static-marker';
    }

    /* Behaviors to import for this component */
    get behaviors() {
      const ns = window.PxMapBehavior;
      return [
        ns.DistributeProperties,
        ns.ElementInstance,
        ns.LayerInstance,
        ns.MarkerInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {
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
        }
        // @TODO: The `type` cannot be updated right now. Need to determine how
        // to change the class on the Leaflet marker after it is attached
        // dynamically.
      }
    }

    _createMarkerIcon() {
      const icon = this._createStaticMarkerIcon();
      return icon;
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
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapStaticMarker);
})();

// (function(){
//   'use strict';
//
//   class PxMapStaticMarker {
//     /* Name for the component */
//     get is() {
//       return 'px-map-static-marker';
//     }
//
//     /* Behaviors to import for this component */
//     get behaviors() {
//       const ns = window.PxMapBehavior;
//       return [
//         ns.DistributeProperties,
//         ns.ElementInstance,
//         ns.LayerInstance,
//         ns.LayerGroupInstance
//       ];
//     }
//
//     /* Properties to attach to distributed light DOM children */
//     get distributions() { return ['layerInstance as parentInstance']; }
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
//          * The visual type of the marker. Sets the color of the marker to indicate
//          * the state of the thing it represents. Choose from 'important', 'warning',
//          * or 'info', or 'unknown'. Defaults to 'info'.
//          *
//          * @type {String}
//          */
//         type: {
//           type: String,
//           reflectToAttribute: true,
//           value: 'info'
//         },
//         // @TODO: The type cannot be updated right now. Need to determine how
//         // to change the class on the Leaflet marker after it is attached
//         // dynamically.
//
//         /**
//          * A reference to the parent instance that this component will attach
//          * to when drawn on the map.
//          *
//          * @type {Object}
//          */
//         parentInstance: {
//           type: Object,
//           notify: true,
//           observer: 'ensureLayerAttached'
//         }
//       }
//     }
//
//     _createLayer() {
//       const marker = this._createMarker();
//       return marker;
//     }
//
//     _attachLayer() {
//       if (this.parentInstance) {
//         this._captureMarkerEvents(this.layerInstance);
//         return this.parentInstance;
//       }
//     }
//
//     /**
//      * Creates a marker from this marker's current properties and returns
//      * the new instance.
//      */
//     _createMarker() {
//       const geometry = [this.lat, this.lon];
//       const icon = this._createStaticMarkerIcon();
//       const marker = L.marker(geometry, { icon: icon });
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
//       var typeModifier = (this.type && this.type.length) ? `static-map-icon--${this.type}` : '';
//       options.className = `static-map-icon ${typeModifier}`;
//
//       // HTML that we style with CSS to 'draw' the marker
//       options.html = `
//       <i class="static-map-icon__body style-scope px-map"></i>
//       <i class="static-map-icon__marker style-scope px-map"></i>
//       <i class="static-map-icon__descender style-scope px-map"></i>`
//
//       // Set the icon size, anchor, and popup anchor
//       options.popupAnchor = L.point(1,-38);
//       options.iconSize = L.point(50, 50);
//       options.iconAnchor = L.point(9.01, 39.5);
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
// })();
