(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});

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
      },

      /**
       * An object mapping categories of icons to their respective colors. Each
       * key should be a string representing the name of an `icon-type` to
       * a valid CSS color value (e.g. hex color, `rgb()` color). Set the
       * `icon-type` as a sub-property of `properties.marker-icon` for each marker
       * feature in the FeatureCollection you pass into the `data` attribute.
       *
       * By default, the available types are:
       * - "unknown" : "--px-map-marker-group-unknown-color" (default: gray)
       * - "info" : "--px-map-marker-group-info-color" (default: blue)
       * - "warning" : "--px-map-marker-group-info-color" (default: yellow)
       * - "important" : "--px-map-marker-group-info-color" (default: red)
       *
       * Example #1 - FeatureCollection for `data`:
       *
       * ```
       * {
       *   "type" : "FeatureCollection",
       *   "features" : [
       *     {
       *       "type": "Feature",
       *       "id": "001",
       *       "geometry": { ... },
       *       "properties": {
       *         "marker-icon": {
       *           "icon-base": "StaticIcon",
       *           "icon-type": "info"
       *         }
       *       }
       *     },
       *     {
       *       "type": "Feature",
       *       "id": "002",
       *       "geometry": { ... },
       *       "properties": {
       *         "marker-icon": {
       *           "icon-base": "StaticIcon",
       *           "icon-type": "warning"
       *         }
       *       }
       *     }
       *   ]
       * }
       * ```
       *
       * Example #1 - `colorsByType` object
       *
       * ```
       * {
       *   "info" : "blue",
       *   "warning" : "red"
       * }
       * ```
       *
       * The default `colorsByType` mapping is:
       */
      colorsByType: {
        type: Object,
        value: function(){
          return {
            "unknown" : this.getComputedStyleValue('--px-map-marker-group-unknown-color'),
            "info" : this.getComputedStyleValue('--px-map-marker-group-info-color'),
            "warning" : this.getComputedStyleValue('--px-map-marker-group-warning-color'),
            "important" : this.getComputedStyleValue('--px-map-marker-group-important-color')
          }
        }
      }
    },

    createInst(options={}) {
      // Create a bound function that will be called to create each cluster
      // icon for the map
      const boundCreateClusterIcon = this._createClusterIcon.bind(this);
      options.iconCreateFunction = boundCreateClusterIcon;

      const cluster = L.markerClusterGroup(options);

      if (options.data && options.data.features && options.data.features.length) {
        this._syncDataWithMarkers(options.data.features, cluster);
      }
      return cluster;
    },

    updateInst(lastOptions, nextOptions) {
      if (nextOptions.data && nextOptions.data.features && nextOptions.data.features.length) {
        this._syncDataWithMarkers(nextOptions.data.features, this.elementInst);

        // this._syncDataToMarkers(nextOptions.data.features);
        // this.fire('px-map-marker-add');
      }
    },

    getInstOptions() {
      return {
        maxClusterRadius: 150,
        data: this.data
      };
    },

    _createClusterIcon(cluster) {
      const markers = cluster.getAllChildMarkers();
      const count = markers.length;

      // Count markers and group by type
      const types = this._indexClusterMarkersByType(markers);
      // Get the colors for each type
      const colors = this.colorsByType;

      // Get the container size for this count
      const containerSize = this._getClusterIconSize(count);
      // Get the path (chart stroke width) and border width for this chart
      const pathSize = this._getStyleValueAsNum('--px-map-marker-group-cluster-path-size') || 10;
      const borderSize = this._getStyleValueAsNum('--px-map-marker-group-cluster-border-size') || 0;

      // Set up the options to send into ClusterIcon
      const options = {
        count: count,
        countByType: types,
        colorsByType: colors,
        containerSize: containerSize,
        pathSize: pathSize,
        borderSize: borderSize
      };

      return new PxMap.ClusterIcon(options);
    },

    _getStyleValueAsNum(styleValName) {
      // Try to get from the "cache"
      this.__styleVals = (this.__styleVals || {});
      if (this.__styleVals[styleValName]) return this.__styleVals[styleValName];

      const computedVal = this.getComputedStyleValue(styleValName);

      try {
        const valWithoutSuffix = computedVal.replace('px','');
        const valAsNum = Math.floor(valWithoutSuffix);
        this.__styleVals[styleValName] = valAsNum;
        return valAsNum;
      } catch (e) {
        return undefined;
      };
    },

    _getClusterIconSize(count) {
      // for count 1-9, size is small
      if (count < 10) {
        return 60;
      }
      // for count 10-39, size is medium
      if ((count >= 10) && (count < 40)) {
        return 75;
      }
      // for count 40+, size is large
      if (count > 40) {
        return 90;
      }
    },

    /**
     * Takes a group of marker instances and returns an object with keys of the
     * marker types in the group and values with the number of markers in
     * each group.
     *
     * @param {Array} markers - Array of marker instances
     * @return {Object}
     */
    _indexClusterMarkersByType(markers) {
      return markers.reduce((types, marker) => {
        if (marker.featureProperties && marker.featureProperties['marker-icon'] && marker.featureProperties['marker-icon']['icon-type']) {
          types[marker.featureProperties['marker-icon']['icon-type']] = (types[marker.featureProperties['marker-icon']['icon-type']] || 0) + 1;
        }
        return types;
      }, {});
    },

    _generateClusterMarkerClasses(markerCount, markerTypeCount) {

    },

    // _syncDataToMarkers(featCollection, clusterInst) {
    //   if (!featCollection || !featCollection.features || !featCollection.features.length) return;
    //
    //   const markers = this._markers = (this._markers || new Map());
    //   const visited = new WeakSet();
    //   const feats = featCollection.features;
    //   // Keep track of any changes that will require a sync
    //   let mustUpdateCluster = false;
    //   // Placeholders for our loop
    //   let i, len, marker, markerWasChanged, known, valid;
    //
    //   // Loop over features to add unknown features to the cluster or update known features if necessary
    //   for (i=0, len=feats.length; i<len; i++) {
    //     // Determine if this feature is already represented in the cluster
    //     known = markers.has(feats[i]);
    //     // If these tests aren't met, the feature is invalid and can't be drawn as a marker
    //     // Any invalid markers won't be visited and will be removed
    //     valid = ((feats[i].geometry && feats[i].geometry.type === 'Point') && (feats[i].geometry.coordinates instanceof Array && feats[i].geometry.coordinates.length === 2) && (feats[i].id));
    //     if (!valid) continue;
    //
    //     // This is a valid feature we don't know. Create a marker for this feature and add it.
    //     if (!known) {
    //       marker = this._createMarker(feats[i]);
    //       clusterInst.RegisterMarker(marker);
    //       // Save this marker to the map for later syncs, and add it to visited set for our diff comparison
    //       markers.set(feats[i].id, marker);
    //       visited.add(feats[i].id);
    //       mustUpdateCluster = true;
    //     }
    //
    //     // We know this feature and have a marker for it. Ensure the marker is up-to-date.
    //     if (known) {
    //       marker = markers.get(feats[i].id);
    //       markerWasChanged = this._updateMarkerIfNeeded(feats[i], marker);
    //       visited.add(feats[i].id);
    //       if (markerWasChanged) mustUpdateCluster = true;
    //     }
    //   }
    //
    //   // Delete any markers we didn't visit in our features loop
    //   const markersToRemove = this._findForgottenMarkers(markers, visited);
    //   if (markersToRemove) {
    //     clusterInst.RemoveMarkers(markersToRemove);
    //     mustUpdateCluster = true;
    //   }
    //
    //   // Force an update
    // },

    _syncDataWithMarkers(newFeatures, clusterInst) {
      if (!newFeatures.length) return;

      const featuresSet = this._features = (this._features || new Set());
      const markersMap = this._markers = (this._markers || new WeakMap());

      const {featuresToAdd, featuresToUpdate, featuresToRemove, nextFeaturesSet, nextMarkersMap} = this._diffNewFeatures(newFeatures, featuresSet, markersMap);

      let feature, cachedMarker, markersToOperate;

      if (featuresToAdd.size) {
        markersToOperate = [];
        for (feature of featuresToAdd) {
          cachedMarker = nextMarkersMap.get(feature);
          cachedMarker.marker = this._createMarker(feature);
          markersToOperate.push(cachedMarker.marker);
          nextMarkersMap.set(feature, cachedMarker);
        }
        clusterInst.addLayers(markersToOperate);
        markersToOperate = null;
      }

      if (featuresToUpdate.size) {
        markersToOperate = [];
        for (feature of featuresToUpdate) {
          cachedMarker = nextMarkersMap.get(feature);
          cachedMarker.marker = this._updateMarker(cachedMarker.marker);
          markersToOperate.push(cachedMarker.marker);
          nextMarkersMap.set(feature, cachedMarker);
        }
        clusterInst.refreshClusters(markersToOperate);
        markersToOperate = null;
      }

      if (featuresToRemove.size) {
        markersToOperate = [];
        for (feature of featuresToRemove) {
          cachedMarker = nextMarkersMap.get(feature);
          this._removeMarker(cachedMarker.marker);
          markersToOperate.push(cachedMarker.marker);
          nextMarkersMap.delete(feature);
        }
        clusterInst.removeLayers(markersToOperate);
        markersToOperate = null;
      }

      this._features = nextFeaturesSet;
      this._markers = nextMarkersMap;
      featuresSet.clear()

      featuresToAdd.clear();
      featuresToUpdate.clear();
      featuresToRemove.clear();
    },

    _diffNewFeatures(newFeatures, lastFeatureSet, markerMap) {
      // Keep track of our new feature set, which will replace `featureSet`
      const nextFeaturesSet = new Set();

      // Keep track of markers to add
      const featuresToAdd = new Set();
      const featuresToUpdate = new Set();

      // Placeholders for our loop
      let i, len, valid, known, cachedMarker, featureHash;

      // Loop over features to add unknown features to the cluster or update known features if necessary
      for (i=0, len=newFeatures.length; i<len; i++) {
        // If these tests aren't met, the feature is invalid and can't be drawn as a marker
        // Any invalid markers won't be visited and will be removed
        valid = ((newFeatures[i].id) && (newFeatures[i].geometry && newFeatures[i].geometry.type === 'Point') && (newFeatures[i].geometry.coordinates instanceof Array && newFeatures[i].geometry.coordinates.length === 2));
        if (!valid) continue;

        // Determine if this feature is already represented in the cluster
        known = lastFeatureSet.has(newFeatures[i]);

        // This is a valid feature we don't know, create a marker for this feature and add it.
        if (!known) {
          // Mark this as a marker to add
          featuresToAdd.add(newFeatures[i]);
          // Remove from last feature set and add to next feature set
          lastFeatureSet.delete(newFeatures[i]);
          nextFeaturesSet.add(newFeatures[i]);
          // Build a new cached marker object with a hash of the feature
          cachedMarker = { marker: null, hash: JSON.stringify(newFeatures[i]) };
          markerMap.set(newFeatures[i], cachedMarker);
          // Skip to next loop iteration
          continue;
        }

        // We know this feature and have a marker for it. Ensure the marker is up-to-date.
        if (known) {
          cachedMarker = markerMap.get(newFeatures[i]);
          featureHash = JSON.stringify(newFeatures[i]);
          // If there's a difference, mark this marker as one to update
          if (cachedMarker.hash !== featureHash) {
            featuresToUpdate.add(newFeatures[i]);
            // Update the cached marker object with the new hash of the feature
            cachedMarker.hash = featureHash;
            markerMap.set(newFeatures[i], cachedMarker);
          }
          // Remove from last feature set and add to next feature set
          lastFeatureSet.delete(newFeatures[i]);
          nextFeaturesSet.add(newFeatures[i]);
        }
      }

      // Any markers remaining in the last feature set need to be remove
      const featuresToRemove = lastFeatureSet.size ? lastFeatureSet : new Set();

      // Clear all references in the last feature set to ensure values can
      // be garbage collected
      lastFeatureSet.clear();
      lastFeatureSet = null;

      return {
        featuresToAdd: featuresToAdd,
        featuresToUpdate: featuresToUpdate,
        featuresToRemove: featuresToRemove,
        nextFeaturesSet: nextFeaturesSet,
        nextMarkersMap: markerMap
      };
    },

    // _diffLastFeaturesWithNext(lastFeatures, nextFeatures) {
    //   // If there were no last features, all the nextFeatures are new markers
    //   // and there are none to remove
    //   if (!lastFeatures) {
    //     return {
    //       markersToAdd: nextFeatures,
    //       markersToRemove: {size:false}
    //     }
    //   }
    //
    //   // If the last and next markers are the same, no changes to make
    //   if (Immutable.is(lastFeatures, nextFeatures)) {
    //     return {
    //       markersToAdd: {size:false},
    //       markersToRemove: {size:false}
    //     };
    //   }
    //
    //   // Otherwise, diff the Immutable lists to produce a list of those to add
    //   // and those to remove
    //   const addedFeatures = Immutable.Seq(nextFeatures)
    //     .filter(feat => !lastFeatures.has(feat))
    //     .filter(feat => feat.hasIn(['geometry', 'type'], 'Point') && feat.getIn(['geometry', 'coordinates']).size == 2 && feat.has('id'))
    //   const removedFeatures = Immutable.Seq(lastFeatures)
    //     .filter(feat => !nextFeatures.has(feat))
    //
    //   return {
    //     markersToAdd: addedFeatures,
    //     markersToRemove: removedFeatures
    //   };
    // },

    _removeMarker(markerData, clusterInst){
      debugger;
    },
    _createMarker(feature, clusterInst) {
      // ... WITH MARKERCLUSTER ...

      // Extract geometry (GeoJSON coordinate pairs are Lat/Lng, we need Lng/Lat,
      // so we have to reverse)
      const [lat, lng] = feature.geometry.coordinates;
      // Create a marker
      const marker = L.marker([lng, lat]);

      // If any icon settings were passed with the feature, fetch them to pass
      // to the icon constructor
      const type = (feature.properties['marker-icon'] && feature.properties['marker-icon']['icon-type']) ? feature.properties['marker-icon']['icon-type'] : undefined;
      const withBadge = (feature.properties['marker-icon'] && feature.properties['marker-icon']['icon-with-badge']) ? feature.properties['marker-icon']['icon-with-badge'] : undefined;
      // Assign an icon
      const icon = new PxMap.StaticIcon({type, withBadge});
      marker.setIcon(icon);

      // Attach the properties to the marker instance to read later
      marker.featureProperties = feature.properties;

      return marker;
    },

    /**
     * Create and return a new `PruneCluster.Marker` configured with the geometry
     * and properties of `feature`.
     *
     * @param {Object} feature - A GeoJSON feature with keys `geometry` and `properties`
     * @return {PruneCluster.Marker}
     */
     _createMarkerOLDOLD(feature) {
       debugger;
       let marker = new PruneCluster.Marker(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);

       // Bind marker icon creation to `this`
      //  marker.data.icon = this._createMarkerIcon.bind(this);

       // Sets the category ID, from a lookup table
      //  if (feature.properties['marker-icon'] && feature.properties['marker-icon']['icon-status'] && this.categoryByName[feature.properties['marker-icon']['icon-status']]) {
      //    marker.category = this.categoryByName[feature.properties['marker-icon']['icon-status']];
      //  }

       return marker;
     },

    _createMarkerIcon(markerData, markerCategory) {
      const options = {
        type: 'info',
        badge: false
      };
      return new PxMap.StaticIcon(options);
    },

    /**
     * Loops over all known markers and compares each with a set of markers we
     * recently visited. That set contains all markers active in the feature
     * collection pased in from outside this component. Any markers not in that
     * set will be deleted from the markers map and returned for removal.
     *
     * @param {Map} markers - A Map of markers. Keys are feature object IDs. Values are cluster markers.
     * @param {WeakSet} remembered - A WeakSet (non-iterable weak reference list) of feature objects IDs whose related markers should keep around. Remove all other markers.
     * @return {Array}
     */
    _findForgottenMarkers(markers, remembered) {
      const markerList = markers.entries(); // returns array of arrays with entries [key, value] aka [featureDataObject, clusterMarkerInstance]
      const markersToRemove = [];
      let i, len;

      for (i=0, len=markerList.length; i<len; i++) {
        // We saw this marker in the features, so it can stick around
        if (remembered.has(markerList[i][0])) continue;
        // Otherwise, remove it from the markers map and prep it for deletion
        markersToRemove.push(markerList[i][1]);
        markers.delete(markerList[i][0]);
      }

      return markersToRemove;
    },

    /**
     * Ensure the data in the `feature` matches the configured `marker`. If
     * it does not match, update the marker.
     *
     * @param {Object} feature - A GeoJSON feature with keys `geometry` and `properties`
     * @param {PruneCluster.Marker} marker - A PruneCluster marker instance that is in the cluster
     */
    _ensureMarkerMatchesData(feature, marker) {
      // ...
    }


    // listeners: {
    //   'px-map-layer-instance-created' : 'shouldUpdateInst'
    // },
    //
    // categoryById: {
    //   0 : 'unknown',
    //   1 : 'info',
    //   2 : 'warning',
    //   3 : 'important'
    // },
    //
    // categoryByName: {
    //   'unknown'   : 0,
    //   'info'      : 1,
    //   'warning'   : 2,
    //   'important' : 3
    // },
    //
    // createInst() {
    //   this._markers = this._markers || new Map();
    //   return new PruneClusterForLeaflet();
    // },
    //
    // updateInst(lastOptions, nextOptions) {
    //   if (nextOptions.data && nextOptions.data.features && nextOptions.data.features.length) {
    //     this._updateMarkers(nextOptions.data.features);
    //     this.fire('px-map-marker-add');
    //   }
    // },
    //
    // getOptions() {
    //   return {
    //     data: this.data || {}
    //   };
    // },
    //
    // _updateMarkers(features) {
    //   if (!features || !(features instanceof Array) || !features.length) return;
    //
    //   for (let feature of features) {
    //     if (this._markers.has(feature)) continue;
    //
    //     // feature.geometry.coordinates is [lng,lat] and marker wants lat,lng
    //     let marker = this._createMarker(feature);
    //     this.elementInst.RegisterMarker(marker);
    //     this._markers.set(feature, marker);
    //   }
    // },
    //
    //
    //
    // getIcon(data, category) {
    //   return this.createStaticIcon(this.getIconOptions(category));
    // },
    //
    // getIconOptions(category) {
    //   return this.getStaticIconOptions({ type: this.categoryById[category] });
    // }
  };
  /* Bind MarkerGroup behavior */
  namespace.MarkerGroup = [
    namespace.Layer,
    MarkerGroupImpl
  ];

})();
