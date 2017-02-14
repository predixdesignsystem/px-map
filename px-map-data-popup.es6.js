(function(){
  'use strict';

  class PxMapDataPopup {
    /* Name for the component */
    get is() {
      return 'px-map-data-popup';
    }

    /* Behaviors to import for this component */
    get behaviors() {
      const ns = window.PxMapBehavior;
      return [
        ns.ElementInstance,
        ns.PopupInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * Title text to display in bold at the top of the popup. Should be kept
         * relatively short (25 characters or less) to keep the popup from
         * growing too large.
         */
        title: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * A list of key/valye pairs to display in a data table. Can be in the
         * format of an array of arrays, or an object.
         *
         * Arrays: An array of arrays, each containing two values. For example,
         * to show the name and location of a place, set this attribute to:
         * '[ ["Name" : "Tokyo"], ["Location" : "Japan"] ]'
         *
         * Object: An object with human-readable keys and associated values. For
         * example, to show the name and location of a place, set this attribute to:
         * '{ "Name" : "Tokyo", "Location" : "Japan" }'
         *
         * @type {Array|Object}
         */
        data: {
          type: Object
        },

        _dataAsList: {
          type: Array,
          computed: '_computeDataList(data)',
          observer: '_updatePopupContent'
        }
      }
    }

    _computeDataList() {
      if (!this.data || (typeof this.data !== 'object')) return;
      // No transformation needed, already an array
      if (Array.isArray(this.data)) return this.data;
      // Otherwise, return mapped keys/values as array
      let data = [];
      for (let key in data) {
        data.push(key, data[key]);
      }
      return data;
    }

    _createPopup() {
      const options = this._getPopupOptions({ className: 'map-data-popup', maxWidth: 400, minWidth: 300 });
      const content = this._getPopupContent();
      return L.popup(options).setContent(content);
    }

    _getPopupOptions(defaults={}) {
      const options = defaults;
      return options;
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
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapDataPopup);
})();
