(function() {
  'use strict';

  /**
   *
   *
   * @polymerBehavior PxMapBehavior.ControlInstance
   */
  const ControlInstance = {
    properties: {
      /**
       * The map instance the control will attach to. Controls should be a direct
       * descendant of the map to have the `parentInstance` automatically
       * bound. Otherwise, the map will need to be bound to the control manually.
       *
       * @type {Object}
       */
       parentInstance: {
         type: Object,
         notify: true
      },

      /**
       * Positions the control in one of the map corners. Choose from 'top-right',
       * 'top-left', 'bottom-right', or 'bottom-left'. You must provide a
       * value or the control will not be created.
       *
       * @type {String}
       */
      position: {
        type: String,
        observer: '_updateControlPosition'
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
        this._bindControlParentListeners();
        this.elementInstance.addTo(this.parentInstance);
      }
    },

    _detachFromParentInstance() {
      if (this.parentInstance && parentInstance.hasLayer(this.elementInstance)) {
        this._unbindParentControlListeners();
        this.elementInstance.remove();
      }
    },

    _updateControlPosition() {
      if (!this.elementInstance || !this.position || !this.position.length) return;

      const position = this.elementInstance.getPosition();
      const newPosition = this._formatPosition(this.position);

      if (position !== newPosition) {
        this.elementInstance.setPosition(newPosition);
      }
    },

    /**
     * Takes a position name like 'top-right' and reformats it into the Leaflet
     * friendly (but human un-friendly) 'topright'.
     *
     * @param {String} position - The position, possibly with dashes
     * @return {String} - The cleaned position
     */
    _formatPosition(position) {
      return position.replace(/\-/, '');
    },

    _getControlPosition() {
      if (!this.position) return undefined;
      return this._formatPosition(this.position);
    },

    /**
     * Bind listeners to the `parentElement`, which is the root `px-map`
     * map element. Messages fired from children to controls can be
     * caught and handled here.
     *
     * Parent listeners should be added as a property on the control that
     * inherits this behavior. Add them like the default Polymer listeners
     * block (property `parentListeners` should be an object with keys `eventName`
     * and values `eventHandlerFunctionName`, both as strings.)
     */
    _bindControlParentListeners() {
      if (typeof this.parentListeners !== 'object') return;

      for (let eventName in this.parentListeners) {
        this.listen(this.parentElement, eventName, this.parentListeners[eventName]);
      }
    },

    /**
     * Removes parent listeners when the element is ready to detach.
     */
    _unbindParentControlListeners() {
      if (typeof this.parentListeners !== 'object') return;

      for (let eventName in this.parentListeners) {
        this.unlisten(this.parentElement, eventName, this.parentListeners[eventName]);
      }
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.ControlInstance = ControlInstance;
})()
