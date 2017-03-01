(function(){
  'use strict';

  class PxMapDataPopupComponent {
    beforeRegister() {
      this.is = 'px-map-popup-data';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.DataPopup]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapDataPopupComponent);
})();
