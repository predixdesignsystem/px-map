(function(){
  'use strict';

  class PxMapLocationControl {
    /* Name for the component */
    get is() { return 'px-map-location-control'; }

    /* Behaviors to import for this component */
    get behaviors() {
      return [
        window.PxMapBehavior.ElementInstance,
        window.PxMapBehavior.ControlInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * Shows a geolocation button the user can press to center the map on
         * their location. After click, the user will be shown a permissions
         * dialog by their browser to confirm they want to share their location.
         * If they accept, the map center will be moved to their location,
         * and a location marker will be placed there.
         */
        geolocate: {
          type: Boolean,
          value: false
        },

        /**
         * Set to 'light' to show a distance scale with a transparent background
         * for light-color tile maps. Set to 'dark' to show the scale with an
         * opaque background for dark-color tile maps. If nothing is set,
         * the scale will be hidden.
         */
        scale: {
          type: String
        }
      }
    }

    _createElementInstance() {
      const control = this._createControl();
      return control;
    }

    _createControl() {
      const options = this._getControlOptions();
      return L.control.zoom(options);
    }

    _getControlOptions(defaults={}) {
      const options = defaults;
      options.position = this._getControlPosition();
      options.zoomInText = '<i class="fa fa-plus"></i>';
      options.zoomOutText = '<i class="fa fa-minus"></i>';
      return options;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapLocationControl);
})();
