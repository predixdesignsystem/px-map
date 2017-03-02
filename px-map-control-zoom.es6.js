(function(){
  'use strict';

  class PxMapZoomControlComponent {
    beforeRegister() {
      this.is = 'px-map-control-zoom';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.ZoomControl]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapZoomControlComponent);
})();
