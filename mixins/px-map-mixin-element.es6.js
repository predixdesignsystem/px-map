(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapElementMixin
   */
  let MapElementMixin = (superclass) => class extends superclass {
    initialize(options) {
      if (super.initialize) super.initialize(options);

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
    }

    addInst(parent) {
      // Create the instance, if it doesn't already exist
      if (!this.elementInst) {
        const options = this.__initialOptions = this.getInstOptions();
        this.elementInst = this.createInst(options);
      }

      // Add the instance to its parent
      if (this.elementInst && parent || !parent.hasLayer(this.elementInst)) {
        this.bindInstToParent(parent);
      };

      // @TODO: Bind events
    }

    removeInst(parent) {
      if (this.elementInst) {
        this.unbindInstFromParent(parent ? parent : undefined);
      };

      // @TODO: Unbind events
    }

    // Simple observer trigger for dynamic properties that should be synced
    // to the instance

    shouldUpdateInst() {
      if (!this.elementInst && this.__elAttached && this.canAddInst()) {
        this.notifyInstReady(this.canAddInst());
      }
      if (!this.elementInst) return;

      const lastOptions = this.__lastOptions || this.__initialOptions;
      const nextOptions = this.getOptions();

      this.updateInst(lastOptions, nextOptions);

      // Set `lastOptions` to `nextOptions` so the next time this method is called
      // it will have access to the last options
      this.__lastOptions = nextOptions;
    }

    // Should be implemented by behaviors/components that extend LayerBase

    createInst() {
      throw new Error('The `createInst` method must be implemented.')
    }

    updateInst() {
      throw new Error('The `updateInst` method must be implemented.')
    }

    getInstOptions() {
      throw new Error('The `getOptions` method must be implemented.')
    }

    bindInst() {
      throw new Error('The `bindInst` method must be implemented.')
    }

    unbindInst() {
      throw new Error('The `unbindInst` method must be implemented.')
    }

    // Helper methods

    extend(source, ...properties) {
      if (source && (source instanceof Object) && properties.length) {
        Object.assign(source, ...properties);
      }
      return source;
    }

    addProperties(...properties) {
      this.properties = this.properties || {};
      if (properties.length) {
        this.extend(this.properties, ...properties)
      }
      return this.properties;
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapElement = MapElementMixin;

  class MapElement extends mixwith.mix().with(PxMapMixin.MapElement) {};

  const klasses = (window.PxMap = window.PxMap || {});
  klasses.MapElement = MapElement;
})();
