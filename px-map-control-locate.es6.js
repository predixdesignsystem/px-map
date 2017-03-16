(function(){
  'use strict';

  class PxMapLocateControlComponent {
    beforeRegister() {
      this.is = 'px-map-control-locate';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.LocateControl]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapLocateControlComponent);
})();
