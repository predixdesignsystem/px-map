(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapMarkerBase
   */
  let MapMarkerBaseMixin = (superclass) => class extends superclass {
    // INITIALIZE ANY PROPERTIES, DO SETUP, ADD STATIC VALUES...

    initialize() {
      if (super.initialize) super.initialize();

      const properties = {
        /**
         * The latitude of the marker. Set a value to draw the maker at a coordinate
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
         * The longitude of the marker. Set a value to draw the maker at a coordinate
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
      };

      this.addProperties(properties);
    }

    // DEFAULT METHODS FOR EVERY BASE ELEMENT...

    createInst(options) {
      return L.marker(options.geometry, options.config);
    }

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.geometry !== nextOptions.geometry) {
        this.elementInst.setLatLng(nextOptions.geometry);
      }
      if (lastOptions.config.icon !== nextOptions.config.icon) {
        this.elementInst.setIcon(nextOptions.config.icon);
      }
    }

    getInstOptions(defaults={}) {
      const geometry = this._getLatLng();
      if (defaults.geometry) this.extend(geometry, defaults.geometry);

      const config = {};
      config.title = (this.name || '');
      config.icon = this._getIcon();
      if (defaults.config) this.extend(config, defaults.config);

      return { geometry, config };
    }

    canAddInst(...args) {
      super.canAddInst(...args);
    }

    bindInst(...args) {
      super.bindInst(...args);
    }

    unbindInst(...args) {
      super.unbindInst(...args);
    }

    // CUSTOM METHODS FOR MARKERS...

    _getLatLng() {
      if (!this.lat || !this.lng) return [];
      return L.latLng(this.lat, this.lng);
    }

    _getIcon() {
      throw new Error('The `getIcon` method must be implemented.');
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapMarkerBase = MapMarkerBaseMixin;

  class MapMarker extends mixwith.mix(PxMap.MapLayer).with(PxMapMixin.MapMarkerBase) {
    constructor() {
      super(...arguments);
      this.initialize();
    }

    // initialize() {
    //   if (super.initialize) super.initialize();
    //   console.log('marker klass');
    //   const properties = {};
    //   this.addProperties(properties);
    // }
  }

  const klasses = (window.PxMap = window.PxMap || {});
  klasses.MapMarker = MapMarker;
})();
