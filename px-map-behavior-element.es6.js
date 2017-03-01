(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.MapElementBase
   */
  const MapElementBase = {
    beforeRegister() {
      /**
       * A reference to this element's instance. The instance can be configured and
       * attached to the map or to another instance. Events emitted by this instance
       * will be intercepted and retargeted so they appear to come from directly from
       * this custom element.
       *
       * @property elementInst
       * @type {Object|null}
       */
      this.elementInst = null;
    },

    shouldAddInst(parent) {
      // Create the instance, if it doesn't already exist
      if (!this.elementInst) {
        const options = this.__initialOptions = this.getInstOptions();
        this.elementInst = this.createInst(options);
        this.fire('px-map-layer-instance-created');
      }

      // Add the instance to its parent
      if (this.elementInst && parent || !parent.hasLayer(this.elementInst)) {
        this.addInst(parent);
      };

      // @TODO: Bind events
    },

    shouldRemoveInst(parent) {
      if (this.elementInst) {
        this.removeInst(parent ? parent : undefined);
      };

      // @TODO: Unbind events
    },

    // Simple observer trigger for dynamic properties that should be synced
    // to the instance

    shouldUpdateInst() {
      if (!this.elementInst && this.__elAttached && this.canAddInst()) {
        this.notifyInstReady(this.canAddInst());
      }
      if (!this.elementInst) return;

      const lastOptions = this.__lastOptions || this.__initialOptions;
      const nextOptions = this.getInstOptions();

      this.updateInst(lastOptions, nextOptions);

      // Set `lastOptions` to `nextOptions` so the next time this method is called
      // it will have access to the last options
      this.__lastOptions = nextOptions;
    },

    // Should be implemented by behaviors/components that extend...

    createInst() {
      throw new Error('The `createInst` method must be implemented.')
    },

    updateInst() {
      throw new Error('The `updateInst` method must be implemented.')
    },

    getInstOptions() {
      throw new Error('The `getInstOptions` method must be implemented.')
    },

    addInst() {
      throw new Error('The `bindInst` method must be implemented.')
    },

    removeInst() {
      throw new Error('The `unbindInst` method must be implemented.')
    },

    // Helper methods

    extendObj(obj, ...properties) {
      if (!obj || !(obj instanceof Object)) throw new Error('The first parameter of `extendObj` must be an object to be mutated.');
      if (properties.length) {
        Object.assign(obj, ...properties);
      }
      return obj;
    },

    addProperties(...properties) {
      this.properties = this.properties || {};
      if (properties.length) {
        this.extend(this.properties, ...properties)
      }
      return this.properties;
    }
  };

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

  /* Bind MapElement base and chained behaviors */
  namespace.MapElementBase = MapElementBase;
  namespace.MapElement = [namespace.MapElementBase];
})()
