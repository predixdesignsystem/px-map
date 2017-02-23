(function() {
  'use strict';

  const Common = {};

  /**
   *
   * @polymerBehavior PxMapBehavior.Common.LatLng
   */
  Common.LatLng = {
    properties: {}
  };

  /**
   *
   * @polymerBehavior PxMapBehavior.Common.LayerParent
   */
  Common.LayerParent = {
    created() {
      // Use a WeakMap to keep track of our attached children
      this._attachedChildren = this._attachedChildren || new WeakMap();
    },

    detached() {
      this._detachLayerChildren();
    },

    listeners: {
      'px-map-layer-instance-created' : '_tryToAddAllChildren',
      'px-map-layer-ready-to-add' : '_tryToAddOneChild'
    },

    // Handles attaching children throughout this element's lifecycle

    _tryToAddAllChildren(evt) {
      // If this element's elementInst isn't ready, halt and wait until later
      // If this event isn't coming from this element, do not handle
      if (!this.elementInst || evt.srcElement !== this) return;

      // If my own elementInst was just created, loop over children and try to attach them
      this._attachLayerChildren();
    },

    _tryToAddOneChild(evt) {
      // If the added-to-dom event belongs to this element, just return and let it bubble
      if (evt.srcElement === this) return;

      // This element is the parent, so stop this event from bubbling
      evt.stopPropagation();

      // If I have no elementInst, halt and wait until later
      if (!this.elementInst) return;

      this._attachLayerChild(evt.srcElement);
    },

    _attachLayerChildren() {
      const children = this.getEffectiveChildren();
      if (!children || !children.length) return;

      for (let child of children) {
        this._attachLayerChild(child);
      }
    },

    _attachLayerChild(childEl) {
      if (this._attachedChildren.has(childEl) || !childEl.willAddInst || !childEl.addInst || !childEl.canAddInst || !childEl.canAddInst()) return;
      this._attachedChildren.set(childEl, true);

      this.async(() => { childEl.willAddInst(); });
      this.async(() => { childEl.addInst(this.elementInst); });
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
      if (!this._attachedChildren.has(childEl) || !childEl.willRemoveInst || !childEl.removeInst) return;
      this._attachedChildren.delete(childEl);

      this.async(() => { childEl.willRemoveInst(); });
      this.async(() => { childEl.removeInst(); });
    }
  };

  /**
   *
   * @polymerBehavior PxMapBehavior.Common.LayerChild
   */
  Common.LayerChild = {
    properties: {}
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.Common = namespace.Common || Common;
})()
