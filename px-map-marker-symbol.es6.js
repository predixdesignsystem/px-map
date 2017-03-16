(function(){
  'use strict';

  class PxMapSymbolMarkerComponent {
    beforeRegister() {
      this.is = 'px-map-marker-symbol';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.SymbolMarker]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapSymbolMarkerComponent);
})();
