(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.MarkerInstance
   */
  const MarkerInstance = {
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
        observer: '_updateMarkerLatLon'
      },

      /**
       * The longitude of the marker. Set a value to draw the maker at a coordinate
       * when the map is loaded. Listen for updates to track the marker's location
       * if the marker is draggable or created dynamically by the user.
       *
       * @type {Number}
       */
      lon: {
        type: Number,
        notify: true,
        observer: '_updateMarkerLatLon'
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
        observer: '_updateMarkerName'
      }
    },

    _createElementInstance() {
      const marker = this._createMarkerInstance();
      return marker;
    },

    _createMarkerInstance() {
      const geometry = this._getMarkerLatLon();
      // `_createMarkerIcon` is supplied by the component
      const icon = this._createMarkerIcon();
      const options = this._getMarkerOptions({ icon: icon });
      const marker = L.marker(geometry, options);
      return marker;
    },

    _getMarkerLatLon() {
      return [this.lat, this.lon];
    },

    _getMarkerOptions(defaults={}) {
      const options = defaults;
      options.title = (this.name && this.name.length) ? this.name : '';
      return options;
    },

    _updateMarkerLatLon() {
      if (!this.elementInstance || !this.lat || !this.lon) return;

      const latLonAreDifferent = (latLng) =>
        latLng.lat !== this.lat || latLng.lng !== this.lon;
      const updateLatLon = () =>
        this.elementInstance.setLatLng([this.lat, this.lon]);

      if (latLonAreDifferent(this.elementInstance.getLatLng())) {
        this.debounce('set-lat-lon', updateLatLon, 1);
      }
    },

    _updateMarkerName() {
      // @TODO: Implement this
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.MarkerInstance = MarkerInstance;
})()
