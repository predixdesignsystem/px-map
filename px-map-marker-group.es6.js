(function(){
  'use strict';

  class PxMapMarkerGroup {
    beforeRegister() {
      this.is = 'px-map-marker-group';
      this.properties = {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [window.PxMapBehavior.MarkerGroup]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapMarkerGroup);
})();
