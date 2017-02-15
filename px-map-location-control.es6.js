(function(){
  'use strict';

  class PxMapLocationControl {
    /* Name for the component */
    get is() { return 'px-map-location-control'; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * Positions the control in one of the map corners. Choose from 'top-right',
         * 'top-left', 'bottom-right', or 'bottom-left'. You must provide a
         * value or the control will not be created.
         *
         * @type {String}
         */
        position: {
          type: String
        },

        /**
         * Shows a set of zoom control buttons the user can press to increase
         * or decrease the map zoom.
         */
        zoom: {
          type: Boolean,
          value: false
        },

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
         * Shows a dynamic scale to display the relationship between distance
         * on the map and corresponding distance on the Earth.
         */
        scale: {
          type: Boolean,
          value: false
        },

        /**
         * The map instance the control will attach to. Controls should be a direct
         * descendant of the map to have the `parentInstance` automatically
         * bound. Otherwise, the map will need to be bound to the control manually.
         *
         * @type {Object}
         */
         parentInstance: {
           type: Object
        }
      }
    }

  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapLocationControl);
})();
