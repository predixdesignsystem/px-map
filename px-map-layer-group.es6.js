(function(){
  'use strict';

  class PxMapLayerGroupComponent {
    beforeRegister() {
      this.is = 'px-map-layer-group';
      this.properties = {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.LayerGroup]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapLayerGroupComponent);
})();
