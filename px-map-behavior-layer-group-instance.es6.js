(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.LayerGroupInstance
   */
  const LayerGroupInstance = {
    properties: {
      /**
       * A human-readable name for this layer group. If the map has a layer
       * control panel, the user will click this name to show, hide, or
       * manipulate this layer.
       *
       * @type {String}
       */
      name: {
        type: String,
        notify: true
      }
    },

    _createElementInstance() {
      return L.layerGroup();
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.LayerGroupInstance = LayerGroupInstance;
})()
