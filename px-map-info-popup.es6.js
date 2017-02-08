(function(){
  'use strict';

  class PxMapInfoPopup {
    /* Name for the component */
    get is() { return 'px-map-info-popup'; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * Title text to display in bold at the top of the popup. Should be kept
         * relatively short (25 characters or less) to keep the popup from
         * growing too large.
         *
         * @type {String}
         */
        title: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * Description text to place in the body of the popup. Try to keep the
         * description to a reasonable size to keep the popup from growing
         * too large.
         *
         * To display more information, bind to the popup's
         * `active` property for notifications on when this popup is shown
         * and display additional information in the UI of your app.
         *
         * @type {String}
         */
        description: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * The URL for an image to place inside the popup. Use a small, square
         * thumbnail-style image (e.g. 75px by 75px).
         *
         * @type {String}
         */
        imgSrc: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * When the popup is activated and becomes visible, set to `true`.
         */
        active: {
          type: Boolean,
          value: false,
          readOnly: true
        },

        /**
         * The popup instance created by this component and attached to the
         * UI layer forwarded from above. Used to create and attach a popup
         * instance that can be shown or hidden to map items.
         *
         * @type {Object}
         */
         popupInstance: {
           type: Object,
           notify: true,
           readOnly: true
         },

         /**
          * A reference to the parent instance that this component will bind
          * itself to when drawn on the map.
          */
         parentInstance: {
           type: Object,
           notify: true,
           observer: '_bindPopupToParent'
         }
      }
    }

    attached() {
      this._createPopup();
      this._bindPopupToParent();

      this.__boundPopupUpdate = this._updatePopupContent.bind(this);
      Polymer.dom(this.root).observeNodes(this.__boundPopupUpdate);
    }

    detached() {
      Polymer.dom(this.root).unobserveNodes(this.__boundPopupUpdate);
    }

    /**
     * If no popup instance has been created, creates a new popup instance
     * with content sourced from the component's DOM.
     *
     * @return {L.Popup}
     */
    _createPopup() {
      if (!this.popupInstance) {
        const content = this._getPopupContent();
        const popup = L.popup({ className: 'px-map-info-popup' }).setContent(content);
        this._setPopupInstance(popup);
      }
    }

    /**
     * Binds the popup to a parent. The popup will be shown when the parent is
     * clicked. It will be hidden when the user clicks elsewhere on the map,
     * when the user clicks another item with a bound popup, or when the user
     * taps the button that closes the popup.
     *
     * Also captures the parent's popup events to handle.
     *
     * @param {L.Layer} parent
     */
    _bindPopupToParent() {
      if (this.popupInstance && this.parentInstance && this.parentInstance.getPopup && this.parentInstance.getPopup() !== this.popupInstance) {
        // Capture the `popupopen` and `popupclose` events from the parent instance
        // These should be torn down on `detached`
        this._capturePopupEventsFromParent(this.parentInstance);
        // Bind the popup to parent
        this.parentInstance.bindPopup(this.popupInstance);
      }
    }

    /**
     * Attaches a listener to the parent marker instance's `popupopen` and
     * `popupclose` events to keep the popup's state in sync with its
     * notifying `active` attribute.
     *
     * Unfortunately, these events can't be captured inside the popup, or we
     * wouldn't try to bind to a potentially unknown parent. It shouldn't cause
     * any issues unless the popup has an invalid parent (i.e. a parent without
     * a `bindPopup()` method).
     *
     * @param {L.Layer} parent
     */
    _capturePopupEventsFromParent(parent) {
      parent.on('popupopen', (evt) => {
        this._setActive(true);
        this.fire('px-map-popup-open', { popup: this.layerInstance, parent: this.parentInstance });
      }, this);
      parent.on('popupclose', (evt) => {
        this._setActive(false);
        this.fire('px-map-popup-close', { popup: this.layerInstance, parent: this.parentInstance });
      }, this);
    }

    /**
     * Retrieves popup content from the light DOM and cleans it up preparing
     * for insertion into the popup instnace.
     *
     * @return {String} Stringified HTML
     */
    _getPopupContent() {
      return Polymer.dom(this.root).innerHTML.trim();
    }

    /**
     * When the popup's DOM is updated, ensure those changes are synced to the
     * popup instance (which does not directly share this DOM, but just
     * implements its HTML.)
     *
     * Debounced to ensure an update is only triggered once every millisecond.
     */
    _updatePopupContent() {
      if (this.popupInstance) {
        const updateFn = () => {
          const newContent = this._getPopupContent();
          const existingContent = this.popupInstance.getContent();
          if (newContent !== existingContent) {
            this.popupInstance.setContent(newContent);
          }
        }

        this.debounce('update-popup-content', updateFn, 1);
      }
    }

  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapInfoPopup);
})()
