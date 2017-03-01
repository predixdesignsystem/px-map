(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapLayerBase
   */
  let MapLayerBaseMixin = (superclass) => class extends superclass {
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

    // Methods to bind to/unbind from parent

    bindInst(parent) {
      parent.addLayer(this.elementInst);
    }

    unbindInst(parent) {
      this.elementInst.remove();
    }

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
  };

  /**
   *
   *
   * @mixin MapLayerParent
   */
  let MapLayerParentMixin = (superclass) => class extends superclass {
    created() {
      // Use a WeakMap to keep track of our attached children
      this._attachedChildren = this._attachedChildren || new WeakMap();
    }

    attached() {
      this.listen(this, 'px-map-layer-instance-created', this._tryToAddAllChildren.bind(this));
      this.listen(this, 'px-map-layer-ready-to-add', this._tryToAddOneChild.bind(this));
    }

    detached() {
      this._detachLayerChildren();
    }

    // Handles attaching children throughout this element's lifecycle

    _tryToAddAllChildren(evt) {
      // If this element's elementInst isn't ready, halt and wait until later
      // If this event isn't coming from this element, do not handle
      if (!this.elementInst || evt.srcElement !== this) return;

      // If my own elementInst was just created, loop over children and try to attach them
      this._attachLayerChildren();
    }

    _tryToAddOneChild(evt) {
      // If the added-to-dom event belongs to this element, just return and let it bubble
      if (evt.srcElement === this) return;

      // This element is the parent, so stop this event from bubbling
      evt.stopPropagation();

      // If I have no elementInst, halt and wait until later
      if (!this.elementInst) return;

      this._attachLayerChild(evt.srcElement);
    }

    _attachLayerChildren() {
      const children = this.getEffectiveChildren();
      if (!children || !children.length) return;

      for (let child of children) {
        this._attachLayerChild(child);
      }
    }

    _attachLayerChild(childEl) {
      if (this._attachedChildren.has(childEl) || !childEl.willAddInst || !childEl.addInst || !childEl.canAddInst || !childEl.canAddInst()) return;
      this._attachedChildren.set(childEl, true);

      this.async(() => { childEl.willAddInst(); });
      this.async(() => { childEl.addInst(this.elementInst); });
    }

    // Handles detaching children throughout this element's lifecycle

    _detachLayerChildren() {
      const children = this.getEffectiveChildren();
      if (!children || !children.length) return;

      for (let child of children) {
        this._detachLayerChild(child);
      }
    }

    _detachLayerChild(childEl) {
      if (!this._attachedChildren.has(childEl) || !childEl.willRemoveInst || !childEl.removeInst) return;
      this._attachedChildren.delete(childEl);

      this.async(() => { childEl.willRemoveInst(); });
      this.async(() => { childEl.removeInst(this.elementInst); });
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapLayerBase = MapLayerBaseMixin;
  mixins.MapLayerParent = MapLayerParentMixin;

  class MapLayer extends mixwith.mix(PxMap.MapElement).with(
    PxMapMixin.MapLayerBase,
    PxMapMixin.MapLayerParent
  ) {};

  const klasses = (window.PxMap = window.PxMap || {});
  klasses.MapLayer = MapLayer;
})();
