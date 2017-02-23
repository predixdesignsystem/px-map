(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.MarkerGroup
   */
  const MarkerGroupImpl = {
    properties: {
      /**
       * A human-readable name for this layer group. If the map has a layer
       * control panel, the user will click this name to show, hide, or
       * manipulate this layer.
       *
       * @type {String}
       */
      name: {
        type: String,
        notify: true
      },

      /**
       * A GeoJSON FeatureCollection object containing an array of Features with
       * point data that will be represented as a marker.
       *
       * @type {Object}
       */
      data: {
        type: Object,
        observer: 'shouldUpdateInst'
      }
    },

    listeners: {
      'px-map-layer-instance-created' : 'shouldUpdateInst'
    },

    categoryById: {
      0 : 'unknown',
      1 : 'info',
      2 : 'warning',
      3 : 'important'
    },

    categoryByName: {
      'unknown'   : 0,
      'info'      : 1,
      'warning'   : 2,
      'important' : 3
    },

    createInst() {
      this._markers = this._markers || new Map();
      return new PruneClusterForLeaflet();
    },

    updateInst(lastOptions, nextOptions) {
      if (nextOptions.data && nextOptions.data.features && nextOptions.data.features.length) {
        this._updateMarkers(nextOptions.data.features);
        this.fire('px-map-marker-add');
      }
    },

    getOptions() {
      return {
        data: this.data || {}
      };
    },

    _updateMarkers(features) {
      if (!features || !(features instanceof Array) || !features.length) return;

      for (let feature of features) {
        if (this._markers.has(feature)) continue;

        // feature.geometry.coordinates is [lng,lat] and marker wants lat,lng
        let marker = this._createMarker(feature);
        this.elementInst.RegisterMarker(marker);
        this._markers.set(feature, marker);
      }
    },

    _createMarker(feature) {
      let marker = new PruneCluster.Marker(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);

      // Bind marker icon creation to `this`
      marker.data.icon = this.getIcon.bind(this);

      // Sets the category ID, from a lookup table
      if (feature.properties['marker-icon'] && feature.properties['marker-icon']['icon-status'] && this.categoryByName[feature.properties['marker-icon']['icon-status']]) {
        marker.category = this.categoryByName[feature.properties['marker-icon']['icon-status']];
      }

      return marker;
    },

    getIcon(data, category) {
      return this.createStaticIcon(this.getIconOptions(category));
    },

    getIconOptions(category) {
      return this.getStaticIconOptions({ type: this.categoryById[category] });
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.MarkerGroup = [
    namespace.LayerBase,
    namespace.Common.StaticIconMethods,
    MarkerGroupImpl
  ];
})()
