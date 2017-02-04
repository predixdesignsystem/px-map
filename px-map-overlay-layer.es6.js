(function(){
  'use strict';

  class PxMapOverlayLayer {
    /* Name for the component */
    get is() { return 'px-map-overlay-layer'; }

    /* Behaviors to import for this component */
    get behaviors() { return [window.PxMapBehaviors.DistributeProperties]; }

    /* Properties to attach to distributed light DOM children */
    get distributions() { return ['mapInstance', 'layerInstance']; }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * A human-readable name for the overlay layer. If the map is configured
         * with controls that allow the user to show/hide layers, this name
         * will be used a menu item the user can interact with to set its visibility.
         *
         * @type {String}
         */
        name: {
          type: String,
          notify: true
        },

        /**
         * The layer instance created by this component and attached to the active
         * map. Used to collect different UI components (e.g. markers, polygons)
         * into a group to manipulate them together.
         *
         * @type {Object}
         */
        layerInstance: {
          type: Object,
          notify: true,
          readOnly: true
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

    attached() {
      window.requestAnimationFrame(this._drawLayer.bind(this));
    }

    /**
     * Attempts to create the layer so it can be attached to the map.
     */
    _drawLayer() {
      if (!this.layerInstance) {
        this._setLayerInstance(L.layerGroup());
      }
      this._attachLayerToMap();
    }

    /**
     * If a map instance has been applied to this layer, attach the layer
     * to the map. If no map instance is ready, throws the task back into the
     * stack to attach to the map once it's ready.
     */
    _attachLayerToMap() {
      if (this.layerInstance && this.mapInstance && this.mapInstance.hasLayer && !this.mapInstance.hasLayer(this.layerInstance)) {
        this.layerInstance.addTo(this.mapInstance);
      }
      else {
        window.requestAnimationFrame(this._attachLayerToMap.bind(this));
      }
    }

  }

  /* Register this element with the Polymer constructor. */
  Polymer(PxMapOverlayLayer);
})()
