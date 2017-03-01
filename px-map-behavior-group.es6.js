(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

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

    getInstOptions() {
      return {};
    }
  };
  /* Bind LayerGroup behavior */
  namespace.LayerGroup = [
    namespace.Layer,
    namespace.ParentLayer,
    LayerGroupImpl
  ];

})();
