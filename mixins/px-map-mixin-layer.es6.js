(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapLayerMixin
   */
  let MapLayerMixin = (superclass) => class extends superclass {
    /**
     * Some element instances may require a minimum number of defined options
     * to be able to attach to their parent. If those options are defined via.
     * attributes, they may not be deserialized or even set before the `willAddInst`
     * method is called.
     *
     * Elements that need to defer until some options are set should override
     * the `canAddInst` method and return `false` if the method
     *
     * Elements that may need to defer until some options are ready should
     * override `instReady` and set it to `false` by default.
     *
     * Later, when the `updateInst` function is called, the element should check
     * if all required options are set and call the method `this.notifyInstReady(true)`
     * to trigger an event the parent will catch and use to attach this element.
     */
    canAddInst() {
      return true;
    }

    // Lifecycle hooks for LayerBase, will be called by a LayerParent

    willAddInst() {
      if (this.elementInst) return;

      const options = this.__initialOptions = this.getOptions();
      this.elementInst = this.createInst(options);

      this.fire('px-map-layer-instance-created');

      // @TODO: Bind events
    }

    willRemoveInst() {
      // @TODO: Unbind events
    }

    addInst(parent) {
      if (!parent || parent.hasLayer(this.elementInst)) return;
      parent.addLayer(this.elementInst);
    }

    removeInst() {
      if (!this.elementInst) return;
      this.elementInst.remove();
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

    // When this element is attached to the DOM, fire an event to notify
    // a parent that it is ready

    created() {
      this.__elAttached = false;
    }

    attached() {
      this.__elAttached = true;
      this.notifyInstReady(this.canAddInst());
    }

    // When this element is detached from the DOM, its elementInst should be
    // removed from the parent

    detached() {
      this.willRemoveInst();
      this.removeInst();
      this.__elAttached = false;
    }

    /**
     * If this element's instance is ready to create and add to its parent,
     * fires an event the parent will catch.
     *
     * @param {Boolean} isReady - If `true` instance parent will be notified
     * @return {Boolean} - If `true` the parent was notified
     */
    notifyInstReady(isReady) {
      if (!isReady) return false;
      this.fire('px-map-layer-ready-to-add');
      return true;
    }

    // Should be implemented by behaviors/components that extend LayerBase

    createInst() {
      throw new Error('The `createInst` method must be implemented.')
    }

    updateInst() {
      throw new Error('The `updateInst` method must be implemented.')
    }

    getOptions() {
      throw new Error('The `getOptions` method must be implemented.')
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapLayer = MapLayerMixin;

  // class MapLayer extends mixwith.mix().with(PxMapMixin.MapElement, PxMapMixin.MapLayer) {
  //   constructor() {
  //     super(...arguments);
  //     this.initialize();
  //   }
  // }
  //
  // const klasses = (window.PxMap = window.PxMap || {});
  // klasses.MapLayer = MapLayer;
})();
