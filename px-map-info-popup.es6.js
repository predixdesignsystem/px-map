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
         * @type {Object}
         */
        description: {
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
          * A reference to the marker instance passed down from a parent
          * `px-map-*-marker` component. If set, this component will attach
          * itself to the marker.
          *
          * @type {Object}
          */
        markerInstance: {
          type: Object,
          notify: true,
          observer: '_drawPopup'
        }
      }
    }

    attached() {
      window.requestAnimationFrame(this._drawPopup.bind(this));

      this.__boundPopupUpdate = this._updatePopupContent.bind(this);
      Polymer.dom(this.root).observeNodes(this.__boundPopupUpdate);
    }

    detached() {
      Polymer.dom(this.root).unobserveNodes(this.__boundPopupUpdate);
    }

    /**
     * Attempts to create the popup so it can be attached and shown when requested.
     */
    _drawPopup() {
      if (!this.popupInstance) {
        const popup = this._createPopup();
        this._setPopupInstance(popup);
      }
      if (this.markerInstance) {
        this._attachPopupToMarker();
      }
    }

    /**
     * Binds the popup to a marker. The popup will be shown when the marker is
     * clicked. It will be hidden when the user clicks elsewhere on the map,
     * when the user clicks another marker, or when the user closes the popup.
     *
     * @param {Object} marker - An <L.Marker> instance to bind to
     */
    _attachPopupToMarker() {
      if (this.popupInstance && this.markerInstance && this.markerInstance.getPopup && this.markerInstance.getPopup() !== this.popupInstance) {
        this.markerInstance.bindPopup(this.popupInstance);
        // Capture the `popupopen` and `popupclose` events from the marker instance
        this._captureMarkerPopupEvents(this.markerInstance);
      }
    }

    /**
     * Creates and returns a new popup instance with context sourced from the
     * component's shadow root.
     *
     * @return {Object}
     */
    _createPopup() {
      const content = Polymer.dom(this.root).innerHTML.trim();
      const popup = L.popup().setContent(content);

      // Attach event handlers to the popup
      this._capturePopupEvents(popup);

      // Return the popup instance to be attached
      return popup;
    }

    /**
     * If there is an active popupInstance, attempts to update its content.
     */
    _updatePopupContent() {
      if (this.popupInstance) {
        const updateFn = () => {
          const newContent = Polymer.dom(this.root).innerHTML.trim();
          const existingContent = this.popupInstance.getContent();
          if (newContent !== existingContent) {
            this.popupInstance.setContent(newContent);
          }
        }

        this.debounce('update-popup-content', updateFn, 1);
      }
    }

    /**
     * Configures handler functions to capture, react to, or forward events
     * from a popup instance.
     *
     * @param {Object} popup
     */
    _capturePopupEvents(popup) {
      popup.on('popupopen', ()=> { debugger; }, this);
    }

    /**
     * Attaches a listener to the parent marker instance's `popupopen` and
     * `popupclose` events to keep the popup's state in sync with its
     * notifying `active` attribute.
     *
     * @param {Object} marker
     */
    _captureMarkerPopupEvents(marker) {
      marker.on('popupopen', (evt) => {
        this._setActive(true);
        this.fire('px-map-popup-open', { popup: this.popupInstance, marker: this.markerInstance });
      }, this);
      marker.on('popupclose', (evt) => {
        this._setActive(false);
        this.fire('px-map-popup-close', { popup: this.popupInstance, marker: this.markerInstance });
      }, this);
    }
  }

  /* Register this element with the Polymer constructor. */
  Polymer(PxMapInfoPopup);
})()
