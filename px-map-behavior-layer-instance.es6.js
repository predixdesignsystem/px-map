(function() {
  'use strict';

  /**
   * - Defines `parentInstance`
   *
   *
   * @polymerBehavior PxMapBehavior.LayerInstance
   */
  const LayerInstance = {
    properties: {
      /**
       * A reference to this component's parent instance. The component will
       * attach itself to the parent to show itself on the map.
       *
       * @type {Object}
       */
      parentInstance: {
        type: Object,
        notify: true
      }
    },

    observers: ['_attachToParentInstance(parentInstance)'],

    ready() {
      // The `_createElementInstance` method should be defined in a component
      // or behavior that extends this behavior
      let instance = this._createElementInstance();
      this._setElementInstance(instance);
    },

    attached() {
      this._attachToParentInstance();
    },

    detached() {
      this._detachFromParentInstance();
    },

    _attachToParentInstance() {
      if (this.parentInstance && !this.parentInstance.hasLayer(this.elementInstance)) {
        this.parentInstance.addLayer(this.elementInstance);
      }
    },

    _detachFromParentInstance() {
      if (this.parentInstance && parentInstance.hasLayer(this.elementInstance)) {
        this.parentInstance.removeLayer(this.elementInstance);
      }
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.LayerInstance = LayerInstance;
})()
