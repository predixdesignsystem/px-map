(function(){
  'use strict';

  class PxMapStaticMarker {
    /* Name for the component */
    get is() { return 'px-map-static-marker'; }

    /* Behaviors to import for this component */
    get behaviors() { return [window.PxMapBehaviors.DistributeProperties]; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * The latitude of the marker. Set a value to draw the maker at a default
         * latitude. Listen for updates if the marker is draggable or
         * created dynamically by the user.
         *
         * @type {Number}
         */
        lat: {
          type: Number,
          notify: true
        },

        /**
        * The longitude of the marker. Set a value to draw the maker at a default
        * longitude. Listen for updates if the marker is draggable or
        * created dynamically by the user.
         *
         * @type {Number}
         */
        lon: {
          type: Number,
          notify: true
        },

        /**
         * The marker instance created by this component and attached to a layer.
         * Used to show a point on the map.
         *
         * @type {Object}
         */
        markerInstance: {
          type: Object,
          notify: true,
          readOnly: true
        },

        /**
         * A reference to the layer instance passed down from the parent
         * `px-map-overlay-layer` this marker belongs to. Used by the component
         * to draw itself on the layer.
         *
         * @type {Object}
         */
        layerInstance: {
          type: Object,
          notify: true
        },

        /**
         * A reference to the active map instance passed down from `px-map`.
         * Used by this component to draw itself on the map.
         *
         * @type {Object}
         */
        mapInstance: {
          type: Object,
          notify: true
        }
      }
    }

    ready() {
      window.requestAnimationFrame(this._drawMarker.bind(this));
    }

    /**
     * Attempts to create the marker so it can be attached to a layer.
     */
    _drawMarker() {
      if (!this.markerInstance) {
        let marker = this._createMarker();
        this._setMarkerInstance(marker);
      }
      this._attachMarkerToMap();
    }

    /**
     * If a layer has been applied to this marker, attach the marker to the layer
     * so it can be drawn on the map. If no layer instance is ready, throws the
     * task back into the stack to attach to the layer once it's ready.
     */
    _attachMarkerToMap() {
      if (this.markerInstance && this.layerInstance && this.layerInstance.hasLayer && !this.layerInstance.hasLayer(this.markerInstance)) {
        this.markerInstance.addTo(this.layerInstance);
      }
      else {
        window.requestAnimationFrame(this._attachMarkerToMap.bind(this));
      }
    }

    /**
     * Creates a marker from this marker's current properties and returns
     * the new instance.
     */
    _createMarker() {
      const geometry = [this.lat, this.lon];
      const options = {};

      // To get shady DOM CSS styling, we need to hack `style-scope px-map`
      // onto the className to have styles applied
      options.className = 'static-map-icon style-scope px-map';

      // HTML that we style with CSS to 'draw' the marker
      options.html = `
      <i class="static-map-icon__body style-scope px-map"></i>
      <i class="static-map-icon__marker style-scope px-map"></i>
      <i class="static-map-icon__descender style-scope px-map"></i>`

      // Create the icon instance, assign it to a marker, and return
      const icon = L.divIcon(options);
      return L.marker(geometry, { icon: icon });
    }

  }

  /* Register this element with the Polymer constructor. */
  Polymer(PxMapStaticMarker);
})()
