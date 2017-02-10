(function(){
  'use strict';

  class PxMapStaticMarker {
    /* Name for the component */
    get is() {
      return 'px-map-static-marker';
    }

    /* Behaviors to import for this component */
    get behaviors() {
      const ns = window.PxMapBehavior;
      return [
        ns.DistributeProperties,
        ns.ElementInstance,
        ns.LayerInstance,
        ns.MarkerInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {
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
          observer: '_updateStaticMarkerClasses'
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
          observer: '_updateStaticMarkerClasses'
        }
      }
    }

    _createMarkerIcon() {
      const options = this._getStaticMarkerOptions();
      return L.divIcon(options);
    }

    _getStaticMarkerOptions(defaults={}) {
      const options = defaults;

      // Can be updated later if the `type` or `showBadge` options change
      options.className = this._getStaticMarkerClasses();

      // Build the inner HTML of the icon, which CSS will hook into to
      // Note: Don't update HTML dynamically. Update the marker classes
      // and change visibility/style of the marker with a modifier.
      options.html =
        `<i class="static-map-icon__body style-scope px-map"></i>
         <i class="static-map-icon__descender style-scope px-map"></i>
         <i class="static-map-icon__badge style-scope px-map"></i>`

      // These values are static, based on the CSS styles of the popup anchor
      // Position the icon and anchor relative to the underlying map geometry
      options.iconSize = L.point(50, 50);
      options.iconAnchor = L.point(9.01, 39.5);
      options.popupAnchor = L.point(1,-38);

      return options;
    }

    _getStaticMarkerClasses() {
      const classes = [];

      // Base class
      classes.push('static-map-icon');
      // Type modifier
      if (this.type && this.type.length) classes.push(`static-map-icon--${this.type}`);
      // Badge modifier
      if (this.showBadge) classes.push(`static-map-icon--with-badge`);

      return classes.join(' ');
    }

    _updateStaticMarkerClasses() {
      if (!this.elementInstance) return;

      const newClasses = this._getStaticMarkerClasses().split(' ');
      const activeClasses = this.elementInstance.options.icon.options.className.split(' ');

      const classesToRemove = activeClasses.filter(
        (className) => newClasses.indexOf(className) === -1);
      const classesToAdd = newClasses.filter(
        (className) => activeClasses.indexOf(className) === -1);

      let domEl;

      if (classesToRemove) {
        domEl = domEl || this.elementInstance.getElement();
        for (let className of classesToRemove) {
          L.DomUtil.removeClass(domEl, className);
        }
      }

      if (classesToAdd) {
        domEl = domEl || this.elementInstance.getElement();
        for (let className of classesToAdd) {
          L.DomUtil.addClass(domEl, className);
        }
      }

      if (classesToRemove || classesToAdd) {
        this.elementInstance.options.icon.options.className = newClasses.join(' ');
      }
    }

  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapStaticMarker);
})();
