(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.PopupInstance
   */
  const PopupInstance = {
    properties: {
      /**
       * Set to `true` when the popup becomes visible.
       */
      active: {
        type: Boolean,
        value: false,
        readOnly: true
      },

      /**
       * A reference to the parent instance that this component will bind
       * itself to when drawn on the map.
       */
      parentInstance: {
        type: Object,
        notify: true
      },

      /**
       * The name of a control or another element on the map that will handle
       * this popup's content. If this attribute is provided, the popup will
       * not open as box with a pointer over its parent when the parent is
       * clicked. The popup will fire an event that should be captured above
       * with its content to place into a control.
       */
      bindToControl: {
        type: String
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

    _createElementInstance() {
      const popup = this._createPopupInstance();
      return popup;
    },

    // Overwrite this method in the component/behavior that extends this behavior
    // Just creates a default thing
    _createPopupInstance() {
      return L.popup();
    },

    _attachToParentInstance() {
      if (!this.parentInstance) return;

      // Capture the `popupopen` and `popupclose` events from the parent instance
      // These should be torn down on `detached`
      this._bindPopupInstanceEvents();

      // On parent click, fire an event that will be caught by a named control
      if (this.bindToControl && this.bindToControl.length) {
        // this._notifyControlOnClick();
        return;
      }

      // On parent click, open a popup hovering over the parent
      if (this.parentInstance.getPopup() !== this.elementInstance) {
        this.parentInstance.bindPopup(this.elementInstance);
      }
    },

    _detachFromParentInstance() {
      if (!this.parentInstance) return;

      this._unbindPopupInstanceEvents();

      if (this.parentInstance.getPopup() === this.elementInstance) {
        this.parentInstance.removeLayer(this.elementInstance);
      }
    },

    _bindPopupInstanceEvents() {
      if (!this.parentInstance) return;

      this._boundPopupEvents = this._boundPopupEvents || {};

      // Handle popupopen/popupclose events
      if (!this._boundPopupEvents.popupopen && (typeof this._handlePopupOpen === 'function')) {
        this._boundPopupEvents.popupopen = this._handlePopupOpen.bind(this);
      }
      if (!this._boundPopupEvents.popupclose && (typeof this._handlePopupClose === 'function')) {
        this._boundPopupEvents.popupclose = this._handlePopupClose.bind(this);
      }

      // If binding to control, watch parent for click and do own popup handling
      if (!this._boundPopupEvents.click && this.bindToControl && this.bindToControl.length) {
        this._boundPopupEvents.click = this._handlePopupParentClick.bind(this);
      }

      this.parentInstance.on(this._boundPopupEvents);
    },

    _unbindPopupInstanceEvents() {
      if (!this.parentInstance) return;

      if (typeof this._boundPopupEvents === 'object') {
        this.parentInstance.off(this._boundPopupEvents);
      }
    },

    _handlePopupParentClick(evt) {
      if (this.bindToControl && this.bindToControl.length) {
        // Bind a listener to the map, to close the popup later
        this._map = evt.target._map;
        this._boundPopupMapEvents = { click: this._handlePopupMapClick.bind(this) };
        this._map.on(this._boundPopupMapEvents);

        this.fire('px-map-info-control-bind', {
          content: this.elementInstance.getContent(),
          control: this.bindToControl,
          popup: this.elementInstance
        });

        evt.stopPropagation();
      }
    },

    _handlePopupMapClick(evt) {
      if (this.bindToControl && this.bindToControl.length) {
        this.fire('px-map-info-control-unbind', {
          content: '',
          control: this.bindToControl
        });
      }

      this._map.off(this._boundPopupMapEvents);
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.PopupInstance = PopupInstance;
})()
