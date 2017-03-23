(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.LeafletRoot
   */
  PxMapBehavior.LeafletRootImpl = {
    properties: {
      /**
       * The coordinate reference system to use when projecting geographic points
       * into pixel coordinates. Can only be set once before the map is first
       * initialized. If you don't know what this is, do not set it and the map
       * will revert to the most common web mapping projection (EPSG3857).
       *
       * @type {L.CRS}
       */
      crs: {
        type: Object
      },

      /**
       * The latitude of the active map center. Can be used to set or update
       * the center of the map, or read from after the user moves the map to
       * get updated coordinates.
       *
       * @type {Number}
       */
      lat: {
        type: Number,
        value: 37.7672375,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The longitude of the active map center. Can be used to set or update
       * the center of the map, or read from after the user moves the map to
       * get updated coordinates.
       *
       * @type {Number}
       */
      lng: {
        type: Number,
        value: -121.9584131,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The zoom level of the active map. Can be used to set or update
       * the zoom level of the map, or read from after the user changes the
       * map zoom level to an updated value.
       *
       * @type {Number}
       */
      zoom: {
        type: Number,
        value: 10,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The maximum zoom level for the active map (the furthest the user can
       * zoom in). Setting it at the map level will take precedence over the
       * max zoom of all other layers, including tile layers. If you need to
       * set different zoom bounds based on the visible tile layer, set the
       * max zoom directly on your tile layer.
       *
       * @type {Number}
       */
      maxZoom: {
        type: Number,
        observer: 'shouldUpdateInst'
      },

      /**
      * The minimum zoom level for the active map (the furthest the user can
      * zoom out). Setting it at the map level will take precedence over the
      * min zoom of all other layers, including tile layers. If you need to
      * set different zoom bounds based on the visible tile layer, set the
      * min zoom directly on your tile layer.
       *
       * @type {Number}
       */
      minZoom: {
        type: Number,
        observer: 'shouldUpdateInst'
      },

      /**
       * Restricts the user from moving the map outside of a specific geographic
       * boundary. The user will be bounced back if they attempt to pan outside the view.
       * Disabled by default, letting the user pan to any point on the map.
       *
       * Pass an array of [lat,lng] values like the following:
       *
       *        [[40.712, -74.227], [40.774, -74.125]]
       *
       * The first pair should represent the southwest extend of the boundary,
       * and the second  pair should represent the northeast extend of the
       * boundary.
       *
       * @type {Array}
       */
      maxBounds: {
        type: Array,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable dragging of the map with the mouse or by touch. Use to
       * restrict changing the map's visible area (e.g. for a static map) or
       * to set up a map for being updated programatically (e.g. through regular
       * responses from an API).
       *
       * @type {Boolean}
       */
      disableDragging: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable zooming with the scroll wheel. Useful if you have a map
       * that takes up the full width of a page and want to allow the user to
       * scroll/swipe past without getting stuck in a zoom-in-zoom-out loop.
       *
       * @type {Boolean}
       */
      disableScrollZoom: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable the two-finger zoom gesture on touch devices.
       *
       * @type {Boolean}
       */
      disableTouchZoom: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable the attribution control, which can be used to show the
       * source of tile layers or other data overlays.
       *
       * This property is not dynamic and can only be set once when the map is
       * first initialized.
       *
       * @type {Boolean}
       */
      disableAttribution: {
        type: Boolean,
        value: false
      },

      // ---------------------------------------------------------------------
      // ENABLES FEATURES THAT CHANGE THE MAP BEHAVIOR
      // ---------------------------------------------------------------------

      /**
       * Automatically changes the visible bounds of the map to fit all
       * markers placed on it.
       *
       * @type {Object}
       */
      fitToMarkers: {
        type: Boolean,
        value: false,
        observer: '_fitMapToMarkersIfConfigured'
      },

      // ---------------------------------------------------------------------
      // TELL THE MAP HOW TO RESIZE
      // ---------------------------------------------------------------------

      /**
       * Uses flexbox to set the size of the map. Set the parent container
       * to use `display: flex;` in your CSS and the map will automatically
       * fill the container's available height and width.
       *
       * @type {Boolean}
       */
      flexToSize: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    },

    attached() {
      this.shouldAddInst();
      this.addInst();
    },

    detached() {
      this.shouldRemoveInst();
      this.removeInst();
    },

    createInst(options) {
      const mapEl = Polymer.dom(this.root).querySelector('#map');
      return L.map(mapEl, options);
    },

    addInst() {
      // @TODO: This is a shim for browsers without shadow DOM. We need to
      // re-append the `#map` element or it won't get the 'style-scope' CSS
      // classes needed to style it or its children. That's bad. When the
      // polyfill is updated or support is cut for browsers without shadow
      // DOM, this should be removed.
      if (this.isShadyScoped()) {
        this.scopeSubtree(this.$.map, true);
      }

      // Bind custom events for the map intance. Events will be unbound automatically.
      const mapMoveFn = this._handleMapMove.bind(this);
      const zoomStartFn = this._handleZoomStart.bind(this);
      const zoomEndFn = this._handleZoomEnd.bind(this);
      this.bindEvents({
        'moveend' : mapMoveFn,
        'zoomstart' : zoomStartFn,
        'zoomend' : zoomEndFn
      });

      this.listen(this, 'px-map-marker-add', '_fitMapToMarkersIfConfigured');
      this.listen(this, 'px-map-marker-group-add', '_fitMapToMarkersIfConfigured');
    },

    removeInst() {
      // Stop watching the shady root map element for changes
      if (this.isShadyScoped()) {
        this.scopeSubtree(this.$.map, false);
      }

      this.unlisten(this, 'px-map-marker-add', '_fitMapToMarkersIfConfigured');
      this.listen(this, 'px-map-marker-group-add', '_fitMapToMarkersIfConfigured');
    },

    getInstOptions() {
      const options = {};

      // Static options
      options.zoomControl = false;

      // Dynamic options
      options.crs = this.crs || L.CRS.EPSG3857;
      options.center = [this.lat, this.lng];
      options.zoom = this.zoom;
      options.minZoom = this.minZoom || undefined;
      options.maxZoom = this.maxZoom || undefined;
      options.maxBounds = this.maxBounds || undefined;

      options.dragging = !this.disableDragging;
      options.scrollWheelZoom = !this.disableScrollZoom;
      options.touchZoom = !this.disableTouchZoom;
      options.attributionControl = !this.disableAttribution;

      return options;
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.center[0] !== nextOptions.center[0] ||
          lastOptions.center[1] !== nextOptions.center[1] ||
          lastOptions.zoom !== nextOptions.zoom) {
        this._updateMapView();
      }

      if (lastOptions.maxZoom !== nextOptions.maxZoom && !isNaN(nextOptions.maxZoom)) {
        this.setMaxZoom(nextOptions.maxZoom);
      }
      if (lastOptions.minZoom !== nextOptions.minZoom && !isNaN(nextOptions.minZoom)) {
        this.setMaxZoom(nextOptions.minZoom);
      }
      if (lastOptions.maxBounds !== nextOptions.maxBounds && !isNaN(nextOptions.maxBounds)) {
        this.setMaxZoom(nextOptions.maxBounds);
      }

      if (!lastOptions.dragging && nextOptions.dragging) {
        this.elementInst.dragging.enable();
      }
      if (lastOptions.dragging && !nextOptions.dragging) {
        this.elementInst.dragging.disable();
      }

      if (!lastOptions.scrollWheelZoom && nextOptions.scrollWheelZoom) {
        this.elementInst.scrollWheelZoom.enable();
      }
      if (lastOptions.scrollWheelZoom && !nextOptions.scrollWheelZoom) {
        this.elementInst.scrollWheelZoom.disable();
      }

      if (!lastOptions.touchZoom && nextOptions.touchZoom) {
        this.elementInst.touchZoom.enable();
      }
      if (lastOptions.touchZoom && !nextOptions.touchZoom) {
        this.elementInst.touchZoom.disable();
      }
    },

    /**
     * Iterates over all attached markers and pans/zooms the map to fit all
     * markers within the visible bounds.
     *
     * Set the `fit-map-to-markers` attribute to automatically fit all markers
     * as they are added to the map.
     */
    fitMapToMarkers() {
      if (this.elementInst) {
        this.debounce('fit-map-to-markers', this._fitBounds, 1);
      }
    },

    /**
     * Internal method that calls `fitMapToMarkers` only if the `fit-map-to-markers`
     * attribute is set. Ensures we don't call the method internally unless
     * the map is configured to do so.
     */
    _fitMapToMarkersIfConfigured() {
      if (this.fitMapToMarkers) {
        this.fitMapToMarkers();
      }
    },

    /**
     * Gets the bounds of all markers. If the bounds object is empty, retries
     * once in the event that markers didn't have enough time to render.
     *
     * @param {Boolean} isRetry - If true, this is the second try and the function shouldn't be tried again. Allow the function to call this method on itself.
     */
    _fitBounds(isRetry) {
      const bounds = this._getAllMarkerGeoms();
      const boundsAreNotValid = (!bounds.isValid || !bounds.isValid());
      if (boundsAreNotValid && !isRetry) {
        return setTimeout(this._fitBounds.bind(this), 0);
      }
      if (!boundsAreNotValid) {
        this.elementInst.fitBounds(bounds);
      }
    },

    /**
     * Iterates over all markers attached to the map and returns an array of
     * <L.LatLng> instances with the geometry.
     *
     * @return {Array}
     */
    _getAllMarkerGeoms() {
      // Create a new bounds and extend with the map center point
      let bounds = new L.LatLngBounds();

      // Loop over the layers
      this.elementInst.eachLayer((layer) => {
        // Most markers should have an `isMarker` static property defined as `true`
        // and a `getLatLng` method
        if (layer.isMarker && layer.getLatLng) {
          let markerGeom = layer.getLatLng();
          bounds.extend(markerGeom);
        }

        // Markers in a cluster have a `layer._markerCluster` property
        if (layer._markerCluster && layer.getBounds) {
          let clusterBounds = layer.getBounds();
          bounds.extend(clusterBounds);
        }
      });
      return bounds;
    },

    _handleMapMove() {
      if (this.__isZooming) {
        this.__onZoomEnd = this._handleMapMove.bind(this);
        return;
      }

      this.debounce('handle-map-move', function() {
        const latLng = this.elementInst.getCenter();
        const zoom = this.elementInst.getZoom();
        const bounds = this.elementInst.getBounds();

        if (this.lat !== latLng.lat || this.lng !== latLng.lng) {
          this.set('lat', latLng.lat);
          this.set('lng', latLng.lng);
        }
        if (this.zoom !== zoom) {
          this.set('zoom', zoom);
        }

        this.fire('px-map-moved', {
          lat: latLng.lat,
          lng: latLng.lng,
          zoom: zoom,
          bounds: bounds
        });
      });
    },
    /**
     * Fired when the map's centerpoint (lat/lng) or zoom is changed by the user
     * or programatically.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number} detail.lat - Latitude of the map centerpoint after moving
     *   * {Number} detail.lat - Latitude of the map centerpoint after moving
     *   * {Number} detail.lng - Longitude of the map centerpoint after moving
     *   * {Number} detail.zoom - Zoom level of the map after moving
     *   * {L.LatLngBouds} detail.bounds - Custom Leaflet object describing the visible bounds of the map as a rectangle
     *
     * @event px-map-moved
     */

     /**
      * Sets an internal boolean that allows us to wait before handling any map
      * movements until the zoom animation is over.
      */
    _handleZoomStart() {
      this.__isZooming = true;
    },

    /**
     * Sets an internal boolean that allows us to wait before handling any map
     * movements until the zoom animation is over.
     */
   _handleZoomEnd() {
     this.__isZooming = false;
     if (typeof this.__onZoomEnd === 'function') {
       this.__onZoomEnd();
       this.__onZoomEnd = null;
     }
   },

    /**
     * Called when the `lat`, `lng`, or `zoom` is set or updated. Sets the active
     * map center to the new values.
     */
    _updateMapView() {
      if (!this.elementInst) return;

      this.debounce('update-map-view', function() {
        const {lat, lng} = this.elementInst.getCenter();
        const zoom = this.elementInst.getZoom();

        if (this.lat !== lat || this.lng !== lng || this.zoom !== zoom) {
          this.elementInst.setView([this.lat,this.lng], this.zoom);
        }
      });
    },

    /**
     * Iterates over all markers attached to the map and returns an array of markers
     * that are within the visible bounds. Use to discover which markers the
     * user can currently see and change/filter the state of your app.
     *
     * This is an expensive operation, particularly for maps with many markers
     * (e.g. in a marker group). Only call it when necessary.
     *
     * To get continuous updates on which markers are visible, attach a
     * `px-map-moved` event listener to this element and call this method
     * after each moved event.
     *
     * @return {Array}
     */
    getVisibleMarkers() {
      const mapBounds = this.elementInst.getBounds();
      let markers = [];

      // Loop over the layers
      this.elementInst.eachLayer((layer) => {
        // Most markers should have an `isMarker` static property defined as `true`
        // and a `getLatLng` method
        if (layer.isMarker && layer.getLatLng) {
          // Only push markers that are visible
          if (mapBounds.contains(layer.getLatLng()) && markers.indexOf(layer) === -1) {
            markers.push(layer);
          }
        }

        // Marker clusters have a `_markerCluster` key
        if (layer._markerCluster) {
          layer.eachLayer((marker) => {
            // Only push markers that are visible
            let parentCluster = layer.getVisibleParent(marker);
            if (parentCluster && mapBounds.contains(parentCluster.getLatLng()) && marker && markers.indexOf(marker) === -1) {
              markers.push(marker);
            }
          })
        }
      });

      return markers;
    }
  };
  /* Bind Popup behavior */
  /** @polymerBehavior */
  PxMapBehavior.LeafletRoot = [
    PxMapBehavior.Element,
    PxMapBehavior.ParentLayer,
    PxMapBehavior.LeafletRootImpl
  ];
})();
