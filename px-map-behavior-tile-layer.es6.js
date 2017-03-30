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
       * A template string that will be converted into a URL used to call the tile
       * service. Should be in the following format:
       *
       *    'http://{s}.somedomain.com/blabla/{z}/{x}/{y}.png
       *
       * The following values will be substituted for letters in `{}` brackets:
       *
       * - `{s}`: a subdomain to call to allow the browser to make many parallel requests
       * - `{z}`: the map zoom level
       * - `{x}` and `{y}`: the coordinates for the tile
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
