(function() {
  'use strict';

  /**
   * Defines a set of shared behaviors for map components that behave like a
   * Layer. Layers are used to display data or groups of data on the map, and
   * are fixed to specific positions on the surface of the map. When the map
   * is panned or zoomed, the layers move with it.
   *
   * The `PxMapBehavior.Layer` is loosely bound to the Leaflet library's
   * `L.Layer` class, and provides a web component friendly wrapper around
   * the Leaflet library's methods.
   *
   * Components should import this behavior to assist in drawing themselves,
   * attaching themselves to the map, and cleaning up and removing themselves
   * from the map.
   *
   * ## Lifecycle events
   *
   * Components or other behaviors that inherit from `PxMapBehavior.Layer`
   * should use these methods to prepare and attach themselves to the map:
   *
   * - `_createLayer()` [REQUIRED]
   *
   *   Called to create the layer to add to the map. Must return an instance of
   *   a Leaflet sub-class that inherits from the `L.Layer` class. If the method
   *   is not defined, or doesn't return a valid instance, the layer cannot be
   *   drawn and will stop and send an error message. The returned instance
   *   will be assigned to `this.layerInstance` and will be accessible in future
   *   lifecycle events.
   *
   * - `_beforeCreateLayer()` [OPTIONAL]
   *
   *   Called before the layer is created.
   *
   * - `_afterCreateLayer()` [OPTIONAL]
   *
   *   Called after the layer is created and before it is attached to the map.
   *   You can set up additional custom listeners here or perform other actions.
   *
   * - `_attachLayer()` [REQUIRED]
   *
   *   Called to attach the layer to its parent instance (usually a
   *   map aor another layer instance). Must return a `parentInstance`
   *   that inherits from the `L.Layer` or `L.Map` class that can have a
   *   layer attached to it with `this.layerInstance.addTo(parentInstance)`
   *
   * - `_afterAttachLayer()`
   *
   *   Called after the layer is attached to the map. If anything else needs to
   *   know about the layer being attached, you can send notifications here.
   *
   * - `_detachLayer()`
   *
   *    Called when the layer is removed from the map and the DOM. If you
   *    defined event listeners or observers that need to be torn down,
   *    remove them here.
   *
   * @polymerBehavior PxMapBehavior.Layer
   */
  const Layer = {
    properties: {
      /**
       * The component's Layer instance, which will be used to attach and
       * draw it on the map. Set internally by the component and notified
       * upward so it can be shared with children or peers to control
       * the layer's state.
       *
       * @type {Object}
       */
      layerInstance: {
        type: Object,
        notify: true,
        readOnly: true
      }
    },

    // When the `layerInstance` attribute is defined, call `_attachLayer`
    observers: ['_attachLayer(layerInstance)'],

    attached() {
      if (!this.layerInstance) {
        this._callCreateLayer();
      }
    },

    detached() {
      if (this.layerInstance) {
        this._tryToCallLifecycleHook('_detachLayer');
      }
    },

    /**
     * Call this method to ensure a parent instance returned by the
     * `_attachLayer` method has the layer attached to it.
     */
    ensureLayerAttached() {
      if (this.layerInstance) {
        this._callAttachLayer();
      }
    },

    /**
     * Attempts to call the `_createLayer` method on the component or
     * sub-behavior that implements this behavior. If no `_createLayer`
     * method is defined, will log an error and stop executing.
     *
     * The `_createLayer` method should return a Leaflet class instance
     * that inherits from Leaflet's `L.Layer` class. The returned instance
     * will be added to the map by calling its `addTo()` method. It will be
     * assigned to `this.layerInstance` for later use.
     *
     * Attempts to call the `_beforeCreateLayer` method before kicking
     * off, and the `_afterCreateLayer` method after kicking off.
     */
    _callCreateLayer() {
      if (!this._createLayer && (typeof this._createLayer !== 'function')) {
        this._failedToCreateLayer('The `_createLayer` method is not defined or is not a function.');
        return;
      }

      this._tryToCallLifecycleHook('_beforeCreateLayer');
      const layer = this._createLayer();

      // If no layer was returned, or if it doesn't have the necessary methods,
      // we can't recover and have to error out
      if (!layer || !layer.addTo || (typeof layer.addTo !== 'function')) {
        this._failedToCreateLayer('The `_createLayer` method did not return a valid layer instance.');
        return;
      }

      // Otherwise, set the instance
      this._setLayerInstance(layer);
      this._tryToCallLifecycleHook('_afterCreateLayer')
    },

    /**
     * Attempts to call the `_attachLayer` method on the component or
     * sub-behavior that implements this behavior. If no `_attachLayer`
     * method is defined, will log an error and stop executing.
     *
     * The `_attachLayer` method should return a Leaflet class instance
     * that inherits from Leaflet's `L.Layer`, `L.Map`, or another
     * valid class that that can have a layer attached to it with the
     * `addTo` method.
     *
     * For example, if the `_attachLayer` returns a `parentInstance`,
     * this layer will be attached to the returned instance with
     * `this.layerInstance.addTo(parentInstance)`
     *
     * If no parent is ready, the `_attachLayer` method can return any
     * falsey value (e.g. `false` or `null`) and the component can
     * call the `_ensureLayerAttached` method manually later when the parent
     * is ready.
     */
    _callAttachLayer() {
      if (!this._attachLayer && (typeof this._attachLayer !== 'function')) {
        this._failedToAttachLayer('The `_attachLayer` method is not defined or is not a function.');
        return;
      }

      const parent = this._attachLayer();

      // If no parent was returned, or no layer instance is defined,
      // this method can be called again later. Stop execution
      // quietly and wait for retry.
      if (!parent || !this.layerInstance) {
        return;
      }

      // If the parent already has the layer, we don't need to do anything
      if (!parent.hasLayer(this.layerInstance)) {
        // Attach the layer to the parent
        this.layerInstance.addTo(parent);
        this._tryToCallLifecycleHook('_afterAttachLayer');
      }
    },

    /**
     * Attempts to call the method named in `lifecycleName` defined on
     * this component. If no method with name `lifecycleName` is defined,
     * skips the lifecycle event and continues.
     *
     * You should ensure you bind the `this` scope of the calling function
     * before you pass this in. For example, you can call it with
     * `this._tryToCallLifecycleHook('_beforeCreateLayer').bind(this)`
     *
     * @param {String} lifecycleName - The name of a method (as a string) to try to call
     */
    _tryToCallLifecycleHook(lifecycleName) {
      if (this[lifecycleName] && (typeof this[lifecycleName] === 'function')) {
        this[lifecycleName].call(this);
      }
    },

    /**
     * If the `_createLayer` method is not defined, the layer cannot be created.
     * This method is called to notify the developer of the problem by sending
     * a message to the browser console.
     *
     * @param {String} errorMsg - A descriptive message for the error.
     */
    _failedToCreateLayer(errorMsg) {
      if (console && (typeof console.log === 'function')) {
        const errToPrint = errorMsg || '';
        console.log('[PX-MAP-BEHAVIOR-LAYER] ERROR: The layer could not be created.');
        console.log(errToPrint);
      }
    },

    /**
     * If the `_attachLayer` method does not exist, the layer cannot be attached.
     * This method is called to notify the developer of the problem by sending
     * a message to the browser console.
     *
     * @param {String} errorMsg - A descriptive message for the error.
     */
    _failedToAttachLayer(errorMsg) {
      if (console && (typeof console.log === 'function')) {
        const errToPrint = errorMsg || '';
        console.log('[PX-MAP-BEHAVIOR-LAYER] ERROR: The layer could not be attached.');
        console.log(errToPrint);
      }
    }

  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.Layer = Layer;
})()
