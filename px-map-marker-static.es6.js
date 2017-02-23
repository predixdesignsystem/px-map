(function(){
  'use strict';

  class PxMapStaticMarker {
    beforeRegister() {
      this.is = 'px-map-marker-static';
      this.properties = {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [window.PxMapBehavior.StaticMarker]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapStaticMarker);
})();
