(function(){
  'use strict';

  class PxMapGroupLayers {
    beforeRegister() {
      this.is = 'px-map-group-layers';
      this.properties = {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.MapGroupLayers]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapGroupLayers);
})();
