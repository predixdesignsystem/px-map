(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.MarkerGroup
   */
  PxMapBehavior.MarkerGroupImpl = {
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
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * Each feature should be a point that will be represented as a marker.
       * See the `px-map-marker-group` API documentation page for an in-depth
       * guide that explains how to configure your features.
       *
       * The root feature collection object must have the following keys/values:
       *
       * - {String} `type`: Must be 'FeatureCollection'
       * - {Array}  `features`: An array of feature objects
       *
       * Each feature object in the collection must have the following key/values:
       *
       * - {String} `type`: Must be 'Feature'
       * - {Number} `id`: A unique numeric ID. If the feature is changed, it should keep its ID. No other features in the collection should have the same ID.
       * - {Object} `geometry`
       * - {String} `geometry.type`: Must be 'Point'
       * - {Array}  `geometry.coordinates`: a pair of coordinates in `[lng,lat]` order
       * - {Object} `properties`
       * - {Object} `properties.marker-icon`: Settings to configure a marker icon
       * - {Object} `properties.marker-popup`: [OPTIONAL] Settings to configure a marker icon
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
       *       "id": 001",
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
       *       "id": 002,
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
       * @type {Object}
       */
      colorsByType: {
        type: Object,
        value: function(){
          return {
            "unknown" : this.getComputedStyleValue('--internal-px-map-icon-unknown-color'),
            "info" : this.getComputedStyleValue('--internal-px-map-icon-info-color'),
            "warning" : this.getComputedStyleValue('--internal-px-map-icon-warning-color'),
            "important" : this.getComputedStyleValue('--internal-px-map-icon-important-color')
          }
        }
      },

      /**
       * Overrides the default icon creation function to allow drawing of custom
       * cluster and marker icons. Note that if you replace these functions you
       * should ensure your custom functions are very fast — these methods are
       * called continuously as the user zooms through the map and clusters and
       * markers are redrawn.
       *
       * Pass in an object with keys `cluster` or `marker` and values of functions.
       * You can pass in one or both keys/values depending on which icon(s)
       * you want to create.
       *
       * - The `cluster` function should accept one parameter, an `L.MarkerCluster` instance, and return a constructed `L.Icon` or `L.DivIcon` instance.
       * - The `marker` function should accept one parameter, an Object with marker settings, and return a constructed `L.Marker` instance with an attached icon.
       *
       * @type {Object}
       */
      iconFns: {
        type: Object,
        value: function(){
          return {
            cluster: undefined,
            marker: undefined
          }
        }
      },

      /**
       * Allows advanced configurations of the cluster behaviors and styles. Note
       * that the cluster comes pre-configured with settings that will work
       * for most use cases; the `clusterConfig` allows those settings to be
       * overriden but may cause unexpected behaviors when conflicting settings
       * are used. Leave the default configuration (by not setting this attribute)
       * if you're unsure of how to use it.
       *
       * The following settings are available:
       *
       * - {Boolean} `showCoverageOnHover`: [default=true] Shows the bounds of a cluster as a polygon when its icon is hovered
       * - {Boolean} `zoomToBoundsOnClick`: [default=true] Zooms to bounds of a cluster when its icon is clicked
       * - {Boolean} `spiderfyOnMaxZoom`: [default=true] Spiderfies the markers in a cluster when it is clicked at the max zoom level
       * - {Boolean} `removeOutsideVisibleBounds`: [default=true] Removes cluster icons and markers when they are too far outside the visible map bounds
       * - {Boolean} `animate`: [default=true] Animates cluster splitting, joining, zooming, and spiderfying
       * - {Number} `disableClusteringAtZoom`: [default=undefined] If set, when the user zooms below this level markers will not be clustered (do not combine with `spiderfyOnMaxZoom`)
       * - {Number} `maxClusterRadius`: [default=150] The maximum radius in pixels a cluster will cover from the central marker. Lower numbers make smaller clusters. Setting below the default may cause cluster icons to overlap.
       * - {Object} `polygonOptions`: [default=150] Options passed to draw the cluster cover polygon
       *   - {Boolean} `polygonOptions.stroke`: [default=true] If true the polygon will have a stroke line around the outside
       *   - {String} `polygonOptions.color`: [default=--px-map-marker-group-cluster-polygon-stroke-color] Sets the stroke color, prefer setting with the style variable
       *   - {String} `polygonOptions.fillColor`: [default=--px-map-marker-group-cluster-polygon-fill-color] Sets the fill color color, prefer setting with the style variable.
       *   - {Number} `polygonOptions.fillOpacity`: [default=0.4] Sets the opacity of the polygon fill
       * - {Object} `spiderLegPolylineOptions`: [default=undefined] Sets the style for the marker spiderfy legs, see [PolylineOptions](http://leafletjs.com/reference.html#polyline-options)
       *
       * @type {Object}
       */
      clusterConfig: {
        type: Object
      }
    },

    // PUBLIC METHODS

    /**
     * Forces the marker group to check the `data` attribute, look for differences
     * in the data from the last draw, and make any necessary updates. Call this
     * method if you are passing an object by reference to `data` and making
     * deep updates that don't trigger changes.
     */
    update() {
      if (!this.elementInst) return;

      const {data} = this.getInstOptions();
      const features = this._syncDataWithMarkers(data.features, this.elementInst);
      this._notifyNewFeatures(features);
    },

    // INSTANCE METHODS

    addInst(parent) {
      // Bind custom events for this cluster. Events will be unbound automatically.
      const spiderifyFn = this._handleClusterSpiderify.bind(this);
      const unspiderifyFn = this._handleClusterUnspiderify.bind(this);
      const markerTapFn = this._handleSingleMarkerTap.bind(this);
      this.bindEvents({
        'spiderfied' : spiderifyFn,
        'unspiderfied' : unspiderifyFn,
        'click' : markerTapFn
      });

      PxMapBehavior.LayerImpl.addInst.call(this, parent);

      this.async(function(){
        this.fire('px-map-marker-group-added');
      });
    },
    /**
     * Fired when the marker group is attached to a parent layer (e.g. the map).
     *
     * Note that it isn't guaranteed that all marker clusters and individual
     * markers added to the group have drawn, only that the marker group itself
     * has attached to a parent. Marker clusters and individual may be drawn
     * asynchronously, and data may be added or changed later to cause additional
     * redraws.
     *
     * Listen to the `px-map-marker-group-features-changed` event for notifications
     * on the features in the cluster.
     *
     * @event px-map-marker-group-added
     */

    removeInst(parent) {
      PxMapBehavior.LayerImpl.removeInst.call(this, parent);
    },

    createInst(options={}) {
      const cluster = L.markerClusterGroup(options);

      if (options.data) {
        const features = this._syncDataWithMarkers(options.data.features, cluster);
        this._notifyNewFeatures(features);
      }

      return cluster;
    },

    updateInst(lastOptions, nextOptions) {
      if (nextOptions.data) {
        const features = this._syncDataWithMarkers(nextOptions.data.features, this.elementInst);
        this._notifyNewFeatures(features);
      }
    },

    getInstOptions() {
      // Set the default cluster options
      const defaultOptions = {
        showCoverageOnHover: true,
        maxClusterRadius: 150,
        spiderifyOnMaxZoom: true,
        removeOutsideVisibleBounds: true,
        animate: true,
        polygonOptions: {
          stroke: true,
          color: this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-stroke-color'),
          fillColor: this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-fill-color'),
          fillOpacity: 0.4
        }
      };
      // Overwrite with any developer-provided cluster options in `clusterConfig`
      const options = Object.assign(defaultOptions, (this.clusterConfig || {}));
      // Assign the `data` and `iconCreateFunction` options. These cannot be
      // configured through the `clusterConfig` attribture
      options.data = this._getValidData();
      options.iconCreateFunction = this._createClusterIcon.bind(this);
      // Return the options composed together
      return options;
    },

    /**
     * Takes a `Set` of feature objects. Fires an event with the bounds of the
     * feature set.
     *
     * @param {Set} featureSet
     */
    _notifyNewFeatures(featureSet) {
      if (!featureSet || !(featureSet instanceof Set) || !featureSet.size) return;

      this.async(function _notifyNewFeaturesDebounce() {
        const bounds = L.latLngBounds();
        let feature;
        for (feature of featureSet) {
          // Reminder: the coordinates array is backwards, switch from `lngLat` to `latLng`
          bounds.extend([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
        }
        this.fire('px-map-marker-group-features-changed', { bounds: bounds });
      }, 1);
    },
    /**
     * Fired when the marker group's features are changed (i.e. when a GeoJSON
     * FeatureCollection is set or updated through the group's `data` attribute).
     * If any features are available, sends out the extend of their bounds.
     *
     *   * {Object} detail - Contains the event details
     *   * {L.LatLng} detail.bounds - Custom Leaflet `LatLngBounds` bounds instance representing the total area covered by the features
     *
     * @event px-map-marker-group-features-changed
     */

    /**
     * Determines if the data provided through the `data` attribute appears to
     * be valid GeoJSON. This is a high-level check for the existence of
     * necessary keys/values. It does not deeply validate each feature
     * for correctness.
     */
    _getValidData() {
      if (!this.data) {
        // It's possible we will be initialized without any data. Don't complain
        // loudly if there's no data, just return `undefined`.
        return undefined;
      }

      const dataIsNotValid = (
        (typeof this.data !== 'object') ||
        (this.data.type !== 'FeatureCollection') ||
        (!Array.isArray(this.data.features)) ||
        !this.data.features.length ||
        (typeof this.data.features[0] !== 'object')
      );

      if (dataIsNotValid) {
        console.log(`PX-MAP CONFIGURATION ERROR:
          The \`data\` attribute for ${this.is} is not valid GeoJSON. Valid GeoJSON
          that follows the FeatureCollection standard is required to draw the
          marker clusters. See the GeoJSON spec website (http://geojson.org/geojson-spec.html)
          for more information on what is required.

          The minimum requirements for ${this.is} are:
          - Must be a valid JavaScript object (or deserializable to an object)
          - Must have key \`type\` with value 'FeatureCollection'
          - Must have key \`features\` with value of an array with length
          - Each entry in \`features\` must be a valid object
        `);

        return undefined;
      }

      return this.data;
    },

    _createClusterIcon(cluster) {
      // If the developer supplies a `iconFns.cluster` function, pass the options
      // to that function and return the result.
      if (this.iconFns.cluster) {
        return this.iconFns.cluster.call(this, cluster);
      }

      // Otherwise, build the marker ourselves
      const markers = cluster.getAllChildMarkers();
      const count = markers.length;

      // Count markers and group by type
      const types = this._indexClusterMarkersByType(markers);
      // Get the colors for each type
      const colors = this.colorsByType;

      // Get the container size for this count
      const containerSize = this._getClusterIconSize(count);
      // Get the path (chart stroke width) and border width for this chart
      const pathSize = this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-path-size') || 10;
      const borderSize = this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-border-size') || 0;

      // Set up the options to send into ClusterIcon
      const options = {
        count: count,
        countByType: types,
        colorsByType: colors,
        containerSize: containerSize,
        pathSize: pathSize,
        borderSize: borderSize,
        styleScope: this.isShadyScoped() ? this.getShadyScope() : undefined
      };

      return new PxMap.ClusterIcon(options);
    },

    _getStyleValueAsNum(styleValName) {
      // Try to get from the "cache"
      this.__styleVals = (this.__styleVals || {});
      if (this.__styleVals[styleValName]) return this.__styleVals[styleValName];

      const computedVal = this.getComputedStyleValue(styleValName);

      if (computedVal && computedVal.indexOf('px') !== -1) {
        const valWithoutSuffix = computedVal.replace('px','');
        const valAsNum = Math.floor(valWithoutSuffix);
        this.__styleVals[styleValName] = valAsNum;
        return valAsNum;
      } else {
        return undefined;
      }
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

    /**
     * Takes an array of GeoJSON feature objects and an `L.MarkerClusterGroup`
     * instance. Diffs the feature array against any previous feature arrays
     * passed to this method and updates the cluster instance. Returns a
     * `Set` of features.
     *
     * @param {Array} newFeatures
     * @param {L.MarkerClusterGroup} clusterInst
     * @return {Set} features
     */
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
          cachedMarker.marker = this._updateMarker(feature, cachedMarker.marker);
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

      return this._features;
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
      lastFeatureSet = null;

      return {
        featuresToAdd: featuresToAdd,
        featuresToUpdate: featuresToUpdate,
        featuresToRemove: featuresToRemove,
        nextFeaturesSet: nextFeaturesSet,
        nextMarkersMap: markerMap
      };
    },

    _createMarker(feature) {
      // Extract geometry (GeoJSON coordinate pairs are Lat/Lng, we need Lng/Lat,
      // so we have to reverse)
      const [lat, lng] = feature.geometry.coordinates;
      // Create a marker
      const marker = L.marker([lng, lat]);

      // If any icon settings were passed with the feature, fetch them to pass
      // to the icon constructor
      const iconSettings = (feature.properties['marker-icon']) ? this._extractMarkerIconSettings(feature.properties['marker-icon']) : {};
      iconSettings.base = iconSettings.base || 'static-icon';
      iconSettings.type = iconSettings.type || 'info';
      const icon = this._createMarkerIcon(iconSettings);
      marker.setIcon(icon);

      // Attach the properties to the marker instance to read later
      marker.featureProperties = feature.properties;

      return marker;
    },

    _updateMarker(feature, marker) {
      const {lat, lng} = marker.getLatLng();
      const [nextLng, nextLat] = feature.geometry.coordinates;

      if (lat !== Number(nextLat) || lng !== Number(nextLng)) {
        marker.setLatLng([nextLat, nextLng]);
      }

      const iconSettings = (feature.properties['marker-icon']) ? this._extractMarkerIconSettings(feature.properties['marker-icon']) : {};
      iconSettings.base = iconSettings.base || 'static-icon';
      iconSettings.type = iconSettings.type || 'info';
      const icon = this._createMarkerIcon(iconSettings);
      marker.setIcon(icon);

      // Attach the properties to the marker instance to read later
      marker.featureProperties = feature.properties;

      return marker;
    },

    _extractMarkerIconSettings(featSettings) {
      const featSettingsKeys = Object.keys(featSettings);
      if (!featSettingsKeys.length) return undefined;

      const iconSettings = {};
      let i, len, featKeyCamelized;

      for (i=0, len=featSettingsKeys.length; i<len; i++) {
        if (featSettingsKeys[i].substring(0,5) !== "icon-") continue;
        featKeyCamelized = featSettingsKeys[i].substring(5).replace(/(\-[a-z])/g, (match) => match.charAt(1).toUpperCase());
        iconSettings[featKeyCamelized] = featSettings[featSettingsKeys[i]];
      }

      return iconSettings;
    },

    _createMarkerIcon(options) {
      // If the developer supplies a `iconFns.marker` function, pass the options
      // to that function and return the result.
      if (this.iconFns.marker) {
        return this.iconFns.marker.call(this, options);
      }
      // If we are in Shady DOM with a style scope, apply it
      options.styleScope = this.isShadyScoped() ? this.getShadyScope() : undefined;
      // Otherwise, attempt to convert the feature's 'icon-base' to a klass name
      // and call the constructor for that klass
      const klassName = this._strToKlassName(options.base);
      return new PxMap[klassName](options);
    },

    _strToKlassName(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).replace(/(\-[a-z])/g, (match) => match.charAt(1).toUpperCase());
    },

    /**
     * When the cluster is spiderified, set its visibility to hidden to ensure
     * it is not kept around as an opaque background to the markers.
     */
    _handleClusterSpiderify(evt) {
      if (!evt || !evt.cluster || !evt.cluster._icon) return;
      evt.cluster._icon.style.visibility = 'hidden';
    },

    /**
     * When the cluster is unspiderified, set its visibility to visible to ensure
     * it is shown again on the map.
     */
    _handleClusterUnspiderify(evt) {
      if (!evt || !evt.cluster || !evt.cluster._icon) return;
      evt.cluster._icon.style.visibility = 'visible';
    },

    /**
     * When an individual marker (not a marker cluster) is clicked, if that
     * marker has a popup attribute, bind a show a popup.
     */
    _handleSingleMarkerTap(evt) {
      if (!evt || !evt.layer || !evt.layer.featureProperties || !evt.layer.featureProperties['marker-popup']) return;

      this._bindAndOpenPopup(evt.layer);
    },

    _bindAndOpenPopup(marker) {
      if (!marker || !marker.bindPopup || !marker.openPopup) return;

      const popupSettings = this._featSettingsToProps(marker.featureProperties['marker-popup'], 'popup');
      if (!popupSettings || !Object.keys(popupSettings).length) return;

      const klassName = (popupSettings._Base && PxMap.hasOwnProperty(popupSettings._Base)) ? popupSettings._Base : 'InfoPopup';
      const popup = new PxMap[klassName](popupSettings);

      marker.bindPopup(popup).openPopup();
      marker.__boundCloseFn = this._unbindAndClosePopup.bind(this, marker);
      marker.on('popupclose', marker.__boundCloseFn);
    },

    _unbindAndClosePopup(marker) {
      if (!marker || !marker.getPopup || !marker.getPopup()) return;

      marker.off('popupclose', marker.__boundCloseFn);
      marker.__boundCloseFn = null;
      marker.closePopup().unbindPopup();
    },

    /**
     * Takes an object harvested from a GeoJSON feature `properties` block and
     * converts it into properties that can be passed to a constructor.
     *
     * For example, takes an object like this:
     *
     * ```
     * {
     *   "popup-base" : "data-popup",
     *   "popup-title" : "Some title",
     *   "popup-data" : { ... }
     * }
     * ```
     *
     * and returns an object like this:
     *
     * ```
     * {
     *   "_Base" : "DataPopup",
     *   "title" : "Some title",
     *   "data" : { ... }
     * }
     * ```
     *
     * Optionally, pass a prefix as a string to extract the correct properties.
     * E.g. to extract "popup-title" to "title", pass the prefix "popup".
     * If you pass no prefix param, everything that matches the dash case
     * search `/[a-z]+\-(.*)/` will be returned
     *
     * Keys that match the pattern `*-base` will be converted from dash case to
     * class case (e.g. 'data-popup' to 'PopupData') and returned with the `_Base`
     * key to help call a constructor by reference.
     *
     * @param {Object} settings
     * @param {String} [prefix]
     * @return {Object}
     */
    _featSettingsToProps(settings, prefix) {
      const keys = Object.keys(settings);
      if (!keys.length) return undefined;

      const settingsAsProps = {};
      let i=0, len=keys.length, newKey;

      for (; i<len; i++) {
        // Check if it has the prefix
        if (prefix && keys[i].substr(0, prefix.length) !== prefix) {
          continue;
        }
        // If it's the base, classify it and set it as the `_Base` key
        if (/^[A-Za-z]+\-base$/.test(keys[i])) {
          settingsAsProps['_Base'] = this._strToKlassName(settings[keys[i]]);
          continue;
        }
        newKey = keys[i].replace(/^[A-Za-z]+\-(.*)$/, "$1");
        settingsAsProps[newKey] = settings[keys[i]];
      }

      return settingsAsProps;
    },
  };
  /* Bind MarkerGroup behavior */
  /** @polymerBehavior */
  PxMapBehavior.MarkerGroup = [
    PxMapBehavior.Layer,
    PxMapBehavior.MarkerGroupImpl
  ];
})();
