(function(){
  'use strict';

  class PxMapStaticMarkerComponent {
    beforeRegister() {
      this.is = 'px-map-marker-static';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [PxMapBehavior.StaticMarker]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapStaticMarkerComponent);
})();
