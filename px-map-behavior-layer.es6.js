(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   *
   * @polymerBehavior PxMapBehavior.Layer
   */
  PxMapBehavior.LayerImpl = {
    // When this element is attached to the DOM, fire an event to notify
    // a parent that it is ready

    attached() {
      this.__elAttached = true;
      this.notifyInstReady(this.canAddInst());
    },

    // When this element is detached from the DOM, its elementInst should be
    // removed from the parent

    detached() {
      this.__elAttached = false;
      this.shouldRemoveInst();
    },

    // Extends the `Element` behavior lifecycle methods to include adding the
    // instance to its parent

    shouldAddInst(parent) {
      PxMapBehavior.ElementImpl.shouldAddInst.call(this, parent);

      if (this.elementInst && parent) {
        this.addInst(parent);
      };
    },

    shouldRemoveInst(parent) {
      PxMapBehavior.ElementImpl.shouldRemoveInst.call(this, parent);

      if (this.elementInst) {
        this.removeInst(parent ? parent : undefined);
      };
    },

    // Methods to bind to/unbind from parent

    addInst(parent) {
      parent.addLayer(this.elementInst);
    },

    removeInst(parent) {
      this.elementInst.remove();
    },

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
    },

    /**
     * If this element's instance is ready to create and add to its parent,
     * fires an event the parent will catch.
     *
     * @param {Boolean} isReady - If `true` instance parent will be notified
     * @return {Boolean} - If `true` the parent was notified
     */
    notifyInstReady(isReady=true) {
      if (!isReady) return false;
      this.fire('px-map-layer-ready-to-add');
      return true;
    }
  };
  /* Bind Layer behavior */
  /** @polymerBehavior */
  PxMapBehavior.Layer = [
    PxMapBehavior.Element,
    PxMapBehavior.LayerImpl
  ];

  /**
   *
   *
   * @polymerBehavior PxMapBehavior.ParentLayer
   */
  PxMapBehavior.ParentLayerImpl = {
    listeners: {
      'px-map-element-instance-created' : '_tryToAddAllChildren',
      'px-map-layer-ready-to-add' : '_tryToAddOneChild'
    },

    created() {
      // Use a WeakMap to keep track of our attached children
      this._attachedChildren = this._attachedChildren || new WeakMap();
    },

    detached() {
      this._detachLayerChildren();
    },

    // Handles attaching children throughout this element's lifecycle

    _tryToAddAllChildren(evt) {
      // If this element's elementInst isn't ready, halt and wait until later
      // If this event isn't coming from this element, do not handle
      const localEvt = Polymer.dom(evt);
      if (!this.elementInst || localEvt.rootTarget !== this) return;

      // If my own elementInst was just created, loop over children and try to attach them
      this._attachLayerChildren();
    },

    _tryToAddOneChild(evt) {
      // If the added-to-dom event belongs to this element, just return and let it bubble
      const localEvt = Polymer.dom(evt);
      if (localEvt.rootTarget === this) return;

      // This element is the parent, so stop this event from bubbling
      evt.stopPropagation();

      // If I have no elementInst, halt and wait until later
      if (!this.elementInst) return;

      this._attachLayerChild(localEvt.rootTarget);
    },

    _attachLayerChildren() {
      const children = this.getEffectiveChildren();
      if (!children || !children.length) return;

      for (let child of children) {
        this._attachLayerChild(child);
      }
    },

    _attachLayerChild(childEl) {
      if (this._attachedChildren.has(childEl) || !childEl.shouldAddInst || !childEl.canAddInst || !childEl.canAddInst()) return;
      this._attachedChildren.set(childEl, true);

      this.async(() => { childEl.shouldAddInst(this.elementInst); });
    },

    // Handles detaching children throughout this element's lifecycle

    _detachLayerChildren() {
      const children = this.getEffectiveChildren();
      if (!children || !children.length) return;

      for (let child of children) {
        this._detachLayerChild(child);
      }
    },

    _detachLayerChild(childEl) {
      if (!this._attachedChildren.has(childEl) || !childEl.shouldRemoveInst) return;
      this._attachedChildren.delete(childEl);

      this.async(() => { childEl.shouldRemoveInst(this.elementInst); });
    }
  };
  /* Bind ParentLayer behavior */
  /** @polymerBehavior */
  PxMapBehavior.ParentLayer = [PxMapBehavior.ParentLayerImpl];
})();
