(function(){
  'use strict';

  class PxMapMarkerGroupComponent {
    beforeRegister() {
      this.is = 'px-map-marker-group';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [window.PxMapBehavior.MarkerGroup]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapMarkerGroupComponent);
})();
