(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.PopupBase
   */
  const PopupBaseImpl = {
    properties: {
      /**
       * Stringified HTML to place in the popup.
       *
       * @type {String}
       */
      content: {
        type: String,
        notify: true,
        observer: 'shouldUpdateInst'
      }
    },

    // Re-implements from LayerBase

    addInst(parent) {
      if (!parent || parent.hasLayer(this.elementInst)) return;
      parent.bindPopup(this.elementInst);
    },

    removeInst(parent) {
      if (!parent || !this.elementInst) return;
      parent.unbindPopup();
    },

    // Custom to popup

    createInst(options) {
      return L.popup(options).setContent(options.content);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.content !== nextOptions.content) {
        this.elementInst.setContent(nextOptions.content);
      }
    },

    getOptions() {
      return {
        content: this.content || ''
      }
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.PopupBase = [
    namespace.LayerBase,
    namespace.Common.LayerParent,
    PopupBaseImpl
  ];
})()
