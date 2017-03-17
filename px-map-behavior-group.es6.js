(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.LayerGroup
   */
  PxMapBehavior.LayerGroupImpl = {
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
  /** @polymerBehavior */
  PxMapBehavior.LayerGroup = [
    PxMapBehavior.Layer,
    PxMapBehavior.ParentLayer,
    PxMapBehavior.LayerGroupImpl
  ];
})();
