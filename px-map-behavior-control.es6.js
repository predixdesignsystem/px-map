(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.Control
   */
  const ControlImpl = {
    properties: {
      /**
       * Positions the control in one of the map corners. Choose from 'topright',
       * 'topleft', 'bottomright', or 'bottomleft'.
       *
       * @type {String}
       */
      position: {
        type: String,
        value: 'bottomright',
        observer: 'shouldUpdateInst'
      }
    },

    addInst(parent) {
      this.elementInst.addTo(parent);
    },

    removeInst(parent) {
      this.elementInst.remove();
    }
  };
  /* Bind Control behavior */
  namespace.Control = [
    namespace.Layer,
    ControlImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.ZoomControl
   */
  const ZoomControlImpl = {
    createInst(options) {
      // return new PxMap.ZoomControl(options);
      return L.control.zoom(options);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.position !== nextOptions.position) {
        this.elementInst.setPosition(nextOptions.position);
      }
    },

    getInstOptions() {
      return {
        position: this.position,
        zoomInText: '<i class="fa fa-plus"></i>',
        zoomOutText: '<i class="fa fa-minus"></i>'
      };
    }
  };
  /* Bind ZoomControl behavior */
  namespace.ZoomControl = [
    namespace.Control,
    ZoomControlImpl
  ];

})();
