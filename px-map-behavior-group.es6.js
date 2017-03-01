(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.MapGroupLayersBase
   */
  const MapGroupLayersBase = {
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

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

  /* Bind MapGroupLayers base and chained behaviors */
  namespace.MapGroupLayersBase = MapGroupLayersBase;
  namespace.MapGroupLayers = [
    namespace.MapLayerParent,
    namespace.MapGroupLayersBase
  ];

})()
