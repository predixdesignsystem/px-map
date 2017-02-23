(function(){
  'use strict';

  class PxMapTileLayer {
    beforeRegister() {
      this.is = 'px-map-tile-layer';
      this.properties = {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [window.PxMapBehavior.TileLayer]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapTileLayer);
})();
