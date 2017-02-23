(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.StaticMarker
   */
  const StaticMarkerImpl = {
    properties: {
      /**
       * The visual type of the marker. Sets the color of the marker to indicate
       * the state of the thing it represents. Choose from 'important', 'warning',
       * or 'info', or 'unknown'. Defaults to 'info'.
       *
       * @type {String}
       */
      type: {
        type: String,
        reflectToAttribute: true,
        value: 'info',
        observer: 'updateIcon'
      },

      /**
       * Shows a small notification badge on the icon that indicates there is
       * some relevant updated information about the marker.
       *
       * @type {Object}
       */
      showBadge: {
        type: Boolean,
        value: true,
        observer: 'updateIcon'
      }
    },

    getIcon() {
      if (!this.markerIcon) this.markerIcon = this.createIcon(this.getIconOptions());
      return this.markerIcon;
    },

    createIcon(options) {
      return L.divIcon(options);
    },

    updateIcon() {
      if (!this.markerIcon) return;
      this.markerIcon = this.createIcon(this.getIconOptions());
      this.shouldUpdateInst();
    },

    getIconOptions() {
      const options = {};

      options.className = this.getIconClasses();
      options.html = this.getIconHTML();

      const layout = this.getIconLayout();
      options.iconSize = layout.iconSize;
      options.iconAnchor = layout.iconAnchor;
      options.popupAnchor = layout.popupAnchor;

      return options;
    },

    getIconClasses() {
      const classes = ['map-icon', 'map-icon-static'];

      if (this.type && this.type.length) {
        classes.push(`map-icon-static--${this.type}`);
      }

      if (this.showBadge) {
        classes.push(`map-icon-static--with-badge`);
      }

      return classes.join(' ');
    },

    getIconHTML() {
      return (`
        <i class="map-icon-static__body"></i>
        <i class="map-icon-static__descender"></i>
        <i class="map-icon-static__badge"></i>
      `);
    },

    getIconLayout() {
      return {
        iconSize: L.point(50,50),
        iconAnchor: L.point(9.01, 39.5),
        popupAnchor: L.point(1,-38)
      }
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.StaticMarker = [
    namespace.MarkerBase,
    StaticMarkerImpl
  ];
})()
