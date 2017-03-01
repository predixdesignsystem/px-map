(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.TileLayer
   */
  const TileLayerImpl = {
    properties: {
      /**
       *
       *
       * @type {String}
       */
      url: {
        type: String
      }
    },

    canAddInst() {
      return (typeof this.url === 'string') && this.url.length;
    },

    createInst(options) {
      return L.tileLayer(options.url);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.url !== nextOptions.url) {
        this.elementInst.setUrl(nextOptions.url);
      }
    },

    getInstOptions() {
      return {
        url: this.url
      };
    }
  };
  /* Bind TileLayer behavior */
  namespace.TileLayer = [
    namespace.Layer,
    TileLayerImpl
  ];

})();
