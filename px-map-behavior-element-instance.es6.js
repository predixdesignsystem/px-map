(function() {
  'use strict';

  /**
   * - Defines `elementInstance`
   * - Binds common leaflet events and forwards them
   *
   * @polymerBehavior PxMapBehavior.ElementInstance
   */
  const ElementInstance = {
    properties: {
      /**
       * A reference to this component's Leaflet element instance.
       *
       * @type {Object}
       */
      elementInstance: {
        type: Object,
        notify: true,
        readOnly: true
      }
    },

    distributions: ['elementInstance as parentInstance'],

    ready() {
      this._elementInstanceEvents = new Map();
    },

    attached() {
      this._bindElementInstanceEvents(this._elementInstanceEvents);
    },

    _bindElementInstanceEvents() {
      console.log('Binding events.')
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.ElementInstance = ElementInstance;
})()
