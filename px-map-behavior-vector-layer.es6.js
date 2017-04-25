(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.VectorLayer
   */
  PxMapBehavior.VectorLayerImpl = {
    properties: {
      /**
       * A string that will be contain the geojson:  (or point to the geojson source)??
       *
       * @type {String}
       */
      data: {
        type: String,
        observer: 'shouldUpdateInst'
      }
    },

    canAddInst() {
      return (typeof this.data === 'string') && this.data.length;
    },

    createInst(options) {
      return L.geoJson(JSON.parse(options.data));
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.data !== nextOptions.data) {
        this.elementInst.clearLayers();
        this.elementInst.addData(JSON.parse(nextOptions.data));
      }
    },

    getInstOptions() {
      return {
        data: this.data
      };
    }
  };
  /* Bind VectorLayer behavior */
  /** @polymerBehavior */
  PxMapBehavior.VectorLayer = [
    PxMapBehavior.Layer,
    PxMapBehavior.VectorLayerImpl
  ];
})();
