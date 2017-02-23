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
      if (!this.markerIcon) this.markerIcon = this.createStaticIcon(this.getIconOptions());
      return this.markerIcon;
    },

    updateIcon() {
      if (!this.markerIcon) return;
      this.markerIcon = this.createStaticIcon(this.getIconOptions());
      this.shouldUpdateInst();
    },

    getIconOptions() {
      return this.getStaticIconOptions({ type: this.type || '', badge: this.showBadge || false });
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.StaticMarker = [
    namespace.MarkerBase,
    namespace.Common.StaticIconMethods,
    StaticMarkerImpl
  ];
})()
