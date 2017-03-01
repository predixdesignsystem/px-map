(function(){
  'use strict';

  class PxMapPopupInfo {
    beforeRegister() {
      this.is = 'px-map-popup-info';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.MapPopupInfo]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapPopupInfo);
})();
