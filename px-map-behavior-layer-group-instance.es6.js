(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.LayerGroupInstance
   */
  const LayerGroupInstance = {
    properties: {
      /**
       * A human-readable name for this layer group. If the map is configured
       * with controls that allow the user to show and hide layers, this name
       * will be offered as a choice for the user to show or hide.
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
