(function(){
  'use strict';

  class PxMapLayerGroup {
    /* Name for the component */
    get is() {
      return 'px-map-layer-group';
    }

    /* Behaviors to import for this component */
    get behaviors() {
      const ns = window.PxMapBehavior;
      return [
        ns.DistributeProperties,
        ns.ElementInstance,
        ns.LayerInstance,
        ns.LayerGroupInstance
      ];
    }
  }

  /* Register this component with the Polymer constructor */
  Polymer(PxMapLayerGroup);
})();
