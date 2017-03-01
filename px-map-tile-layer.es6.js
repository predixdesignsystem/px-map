(function(){
  'use strict';

  class PxMapTileLayerComponent {
    beforeRegister() {
      this.is = 'px-map-tile-layer';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.TileLayer]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapTileLayerComponent);
})();
