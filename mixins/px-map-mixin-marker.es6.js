(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapMarkerMixin
   */
  let MapMarkerMixin = (superclass) => class extends superclass {
    initialize(options={}) {
      if (super.initialize) super.initialize(options);

      this.lat = options.lat || undefined;
      this.lng = options.lng || undefined;
      this.name = options.name || undefined;
    }

    canAddInst() {
      return (typeof this.lat === 'number') && (typeof this.lng === 'number');
    }

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

    getOptions() {
      const geometry = this.getLatLng();

      const config = {};
      config.title = (this.name || '');
      config.icon = this.getIcon();

      return { geometry, config };
    }

    getLatLng() {
      if (!this.lat || !this.lng) return [];
      return L.latLng(this.lat, this.lng);
    }

    // Should be implemented by behaviors that extend MarkerBase

    getIcon() {
      throw new Error('The `getIcon` method must be implemented.');
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapMarker = MapMarkerMixin;

  class MapMarker extends mixwith.mix(PxMap.Base).with(PxMapMixin.MapElement, PxMapMixin.MapLayer, PxMapMixin.MapMarker) {
    constructor() {
      super(...arguments);
      this.initialize();
    }
  }

  const klasses = (window.PxMap = window.PxMap || {});
  klasses.MapMarker = MapMarker;
})();
