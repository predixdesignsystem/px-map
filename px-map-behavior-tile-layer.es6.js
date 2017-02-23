(function() {
  'use strict';

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

    getOptions() {
      return {
        url: this.url || ''
      };
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.TileLayer = [
    namespace.LayerBase,
    TileLayerImpl
  ];
})()
