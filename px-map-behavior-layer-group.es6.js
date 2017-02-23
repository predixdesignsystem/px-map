(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.LayerGroup
   */
  const LayerGroupImpl = {
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

    createInst() {
      return L.layerGroup();
    },

    updateInst() {
      return undefined;
    },

    getOptions() {
      return {};
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.LayerGroup = [
    namespace.LayerBase,
    namespace.Common.LayerParent,
    LayerGroupImpl
  ];
})()
