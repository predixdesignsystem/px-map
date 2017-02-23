(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.MarkerBase
   */
  const MarkerBaseImpl = {
    properties: {
      /**
       * The latitude of the marker. Set a value to draw the maker at a coordinate
       * when the map is loaded. Listen for updates to track the marker's location
       * if the marker is draggable or created dynamically by the user.
       *
       * @type {Number}
       */
      lat: {
        type: Number,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The longitude of the marker. Set a value to draw the maker at a coordinate
       * when the map is loaded. Listen for updates to track the marker's location
       * if the marker is draggable or created dynamically by the user.
       *
       * @type {Number}
       */
      lng: {
        type: Number,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * A human-readable name for this layer group. If a tooltip is attached,
       * this name will be shown on hover over the marker. If the map has a layer
       * control panel, the user will click this name to show, hide, or
       * manipulate this layer.
       *
       * @type {String}
       */
      name: {
        type: String,
        notify: true,
        observer: 'shouldUpdateInst'
      }
    },

    canAddInst() {
      return (typeof this.lat === 'number') && (typeof this.lng === 'number');
    },

    createInst(options) {
      return L.marker(options.geometry, options.config);
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.geometry !== nextOptions.geometry) {
        this.elementInst.setLatLng(nextOptions.geometry);
      }
      if (lastOptions.config.icon !== nextOptions.config.icon) {
        this.elementInst.setIcon(nextOptions.config.icon);
      }
    },

    getOptions() {
      const geometry = this.getLatLng();

      const config = {};
      config.title = (this.name || '');
      config.icon = this.getIcon();

      return { geometry, config };
    },

    getLatLng() {
      if (!this.lat || !this.lng) return [];
      return L.latLng(this.lat, this.lng);
    },

    // Should be implemented by behaviors that extend MarkerBase

    getIcon() {
      throw new Error('The `getIcon` method must be implemented.');
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.MarkerBase = [
    namespace.LayerBase,
    namespace.Common.LayerParent,
    MarkerBaseImpl
  ];
})()
