(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.TileLayer
   */
  PxMapBehavior.TileLayerImpl = {
    properties: {
      /**
       *
       *
       * @type {String}
       */
      url: {
        type: String,
        observer: 'shouldUpdateInst'
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
  /** @polymerBehavior */
  PxMapBehavior.TileLayer = [
    PxMapBehavior.Layer,
    PxMapBehavior.TileLayerImpl
  ];
})();
