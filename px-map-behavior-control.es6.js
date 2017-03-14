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
    properties: {
      /**
       * Sets the icon for zoom in button
       * This is not dynamic and can only be set at run time
       *
       * @type {String}
       */
      zoomInText: {
        type: String, 
        value: '<i class="fa fa-plus"></i>',
      },
      /**
       * Sets the icon for zoom out button
       * This is not dynamic and can only be set at run time
       *
       * @type {String}
       */
      zoomOutText: {
        type: String, 
        value: '<i class="fa fa-minus"></i>',
      }

    },

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
        zoomInText: this.zoomInText,
        zoomOutText: this.zoomOutText
      };
    }
  };
  /* Bind ZoomControl behavior */
  namespace.ZoomControl = [
    namespace.Control,
    ZoomControlImpl
  ];

})();
