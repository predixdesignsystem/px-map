(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.Popup
   */
  PxMapBehavior.PopupImpl = {
    properties: {
      /**
       * If set to `true`, the popup will be automatically closed when the user
       * interacts with any control buttons (e.g. zoom buttons or locate button).
       * By default, the popup only closes when the user clicks the map.
       */
      closeOnControlInteract: {
        type: Boolean,
        value: false
      }
    },

    addInst(parent) {
      if (parent && parent.getPopup() !== this.elementInst) {
        parent.bindPopup(this.elementInst);

        // Bind custom events for this cluster. Events will be unbound automatically.
        const controlClickFn = this._handleControlClick.bind(this, parent);
        this.bindEvents({
          'controlclick' : controlClickFn
        }, parent._mapToAdd);
      }
    },

    removeInst(parent) {
      if (parent && parent.getPopup && (parent.getPopup() === this.elementInst)) {
        parent.unbindPopup(this.elementInst);
      }
    },

    _handleControlClick(parent) {
      if (this.closeOnControlInteract && parent && parent.closePopup) {
        parent.closePopup();
      }
    }
  };
  /* Bind Popup behavior */
  /** @polymerBehavior */
  PxMapBehavior.Popup = [
    PxMapBehavior.Layer,
    PxMapBehavior.PopupImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.InfoPopup
   */
  PxMapBehavior.InfoPopupImpl = {
    properties: {
      /**
       * Title text to display in bold at the top of the popup. Should be kept
       * relatively short (25 characters or less) to keep the popup from
       * growing too large.
       *
       * @type {String}
       */
      title: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * Description text to place in the body of the popup. Try to keep the
       * description to a reasonable size to keep the popup from growing
       * too large.
       *
       * To display more information, bind to the popup's parent layer (e.g. a marker)
       * tapped event and display more information in the UI of your application.
       *
       * @type {String}
       */
      description: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * The URL for an image to be placed inside the popup. Use a small, square
       * thumbnail-style image (e.g. 75px by 75px).
       *
       * @type {String}
       */
      imgSrc: {
        type: String,
        observer: 'shouldUpdateInst'
      }
    },

    createInst(options) {
      return new PxMap.InfoPopup(options);
    },

    updateInst(lastOptions, nextOptions) {
      let updates = {};

      if (lastOptions.title !== nextOptions.title) {
        updates.title = nextOptions.title;
      }
      if (lastOptions.description !== nextOptions.description) {
        updates.description = nextOptions.description;
      }
      if (lastOptions.imgSrc !== nextOptions.imgSrc) {
        updates.imgSrc = nextOptions.imgSrc;
      }

      if (Object.keys(updates).length) {
        this.elementInst.updateSettings(updates);
      }
    },

    getInstOptions() {
      return {
        title: this.title,
        description: this.description,
        imgSrc: this.imgSrc,
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };
    }
  };
  /* Bind InfoPopup behavior */
  /** @polymerBehavior */
  PxMapBehavior.InfoPopup = [
    PxMapBehavior.Popup,
    PxMapBehavior.InfoPopupImpl
  ];

  /**
   *
   * @polymerBehavior PxMapBehavior.DataPopup
   */
  PxMapBehavior.DataPopupImpl = {
    properties: {
      /**
       * Title text to display in bold at the top of the popup. Should be kept
       * relatively short (25 characters or less) to keep the popup from
       * growing too large.
       */
      title: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * A list of key/value pairs to display in a data table. Must be in the
       * format of an object with human-readable keys and associated values.
       *
       * For example, to show the name and location of a place, set this
       * attribute to:
       * '{ "Name" : "Tokyo", "Location" : "Japan" }'
       *
       * @type {Object}
       */
      data: {
        type: Object,
        value: function() { return {}; },
        observer: 'shouldUpdateInst'
      }
    },

    createInst(options) {
      return new PxMap.DataPopup(options);
    },

    updateInst(lastOptions, nextOptions) {
      let updates = {};

      if (lastOptions.title !== nextOptions.title) {
        updates.title = nextOptions.title;
      }
      if (lastOptions.data !== nextOptions.data) {
        updates.data = nextOptions.data;
      }

      if (Object.keys(updates).length) {
        this.elementInst.updateSettings(updates);
      }
    },

    getInstOptions() {
      return {
        title: this.title,
        data: this._getValidData(),
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };
    },

    _getValidData() {
      if (typeof this.data !== 'object') {
        console.log(`PX-MAP CONFIGURATION ERROR:
          You entered an invalid \`data\` attribute for ${this.is}. You must pass a valid object.
          An attribute of type \`${typeof this.data}\` was passed.`);

        return {};
      }

      return this.data;
    }
  };
  /* Bind DataPopup behavior */
  /** @polymerBehavior */
  PxMapBehavior.DataPopup = [
    PxMapBehavior.Popup,
    PxMapBehavior.DataPopupImpl
  ];

  /****************************************************************************
   * KLASSES
   ****************************************************************************/

  /* Ensures the klass namespace is created */
  window.PxMap = (window.PxMap || {});

  /**
   *
   * @class PxMap.InfoPopup
   */
  class InfoPopup extends L.Popup {
    constructor(settings={}) {
      super();
      this._createPopup(settings);
      return this;
    }

    // Note `createPopup` is an internet explorer native method, but deprecated
    // so hopefully it won't cause grief
    _createPopup(settings={}) {
      // Assign settings and create content
      this.settings = settings;
      const { title, description, imgSrc, styleScope } = settings;
      const content = this._generatePopupContent(title, description, imgSrc);
      const className = `map-popup-info ${styleScope||''}`

      this.initialize({ className });
      this.setContent(content);
    }

    _generatePopupContent(title, description, imgSrc) {
      let tmplFnIf = (fn, ...vals) =>
        vals.length && vals[0] !== undefined ? fn.call(this, ...vals) : '';

      let imgTmpl = (imgSrc) => `
        <div class="map-box-info__image">
          <img src="${imgSrc}" />
        </div>
      `;
      let titleTmpl = (title) => `
        <p class="map-box-info__title">${title}</p>
      `;
      let descriptionTmpl = (description) => `
        <p class="map-box-info__description">${description}</p>
      `;

      return `
        <section class="map-box-info">
          ${tmplFnIf(imgTmpl, imgSrc)}
          <div class="map-box-info__content">
            ${tmplFnIf(titleTmpl, title)}
            ${tmplFnIf(descriptionTmpl, description)}
          </div>
        </section>
      `;
    }

    updateSettings(settings={}) {
      Object.assign(this.settings, settings);
      const { title, description, imgSrc, styleScope } = this.settings;
      const content = this._generatePopupContent(title, description, imgSrc);

      this.setContent(content);
      this.update();
    }
  };
  /* Bind InfoPopup klass */
  PxMap.InfoPopup = InfoPopup;

  /**
   *
   * @class PxMap.DataPopup
   */
  class DataPopup extends L.Popup {
    constructor(settings={}) {
      super();
      this._createPopup(settings);
      return this;
    }

    // Note `createPopup` is an internet explorer native method, but deprecated
    // so hopefully it won't cause grief
    _createPopup(settings={}, config={}) {
      this.settings = settings;
      const { title, data, styleScope } = settings;
      const content = this._generatePopupContent(title, data);

      const className = `map-popup-data ${styleScope||''}`
      const maxWidth = 400;
      const minWidth = 300;

      this.initialize({ className, maxWidth, minWidth });
      this.setContent(content);
    }

    _generatePopupContent(title, data) {
      let tmplFnIf = (fn, ...vals) =>
        vals.length && vals[0] !== undefined ? fn.call(this, ...vals) : '';

      let titleTmpl = (title) => `
        <div class="map-data-box__header">
          <h3 class="map-data-box__header__text">${title}</h3>
        </div>
      `;
      let dataTmpl = (data) => {
        let dataList = Object.keys(data).reduce((accum, key) => {
          return accum.concat([dataItemTmpl(key, data[key])]);
        }, []).join('');

        return `
          <div class="map-data-box__table">
            ${dataList}
          </div>
        `;
      };
      let dataItemTmpl = (label, value) => `
        <div class="map-data-box__table__cell"><p>${label}</p></div>
        <div class="map-data-box__table__cell"><p>${value}</p></div>
      `;

      return `
        <section class="map-box-data">
          ${tmplFnIf(titleTmpl, title)}
          ${tmplFnIf(dataTmpl, data)}
        </section>
      `;
    }

    updateSettings(settings={}) {
      Object.assign(this.settings, settings);
      const { title, data } = this.settings;
      const content = this._generatePopupContent(title, data);

      this.setContent(content);
      this.update();
    }
  };
  /* Bind DataPopup klass */
  PxMap.DataPopup = DataPopup;
})();
