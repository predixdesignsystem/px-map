(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.VectorLayer
   */
  PxMapBehavior.VectorLayerImpl = {
    properties: {
      /**
       * An object that will contain the geojson data to display:
       *
       * @type {Object}
       */
      data: {
        type: Object,
        observer: 'shouldUpdateInst'
      },

      /**
       * An object that can specify the style
       *
       * @type {Object}
       */
      featureStyle: {
        type: Object,
        observer: 'shouldUpdateInst'
      },

      /**
       * A boolean that if set will show a popover containing all the feature properties when the feature is clicked
       *
       * @type {Boolean}
       */
      showFeatureProperties: {
        type: Boolean,
        value: false
      },

      /**
       * A boolean that if set will allow a blank vector layer to be created
       *
       * @type {Boolean}
       */
      blankLayer: {
        type: Boolean,
        value: false
      }
    },

    canAddInst() {
      return ((typeof this.data === 'object') && Object.keys(this.data).length) || this.blankLayer;
    },

    createInst(options) {
      let geojsonLayer = L.geoJson(options.data, {
        pointToLayer: (feature, latlng) => {
          const featureProperties = feature.properties.style || {};
          const attributeProperties = options.featureStyle || {};
          const style = this.getStyle(feature, featureProperties, attributeProperties);

          return new L.CircleMarker(latlng, style);
        },

        onEachFeature: (feature, layer) => {
          if (!this.showFeatureProperties) return;

          const popupData = Object.keys(feature.properties).reduce((accum, key) => {
            if (key === 'style'){ return accum } // Filters out `feature.properties.style`.

            if(feature.properties[key] && feature.properties[key] !== 'unset') {
              accum[key] = feature.properties[key];
              return accum;
            }
            else {
              return accum;
            }
          }, {});

          const popup = new PxMap.DataPopup({
            title: 'Feature Properties',
            data: popupData
          });

          layer.bindPopup(popup);
        },

        style: (feature) => {
          const featureProperties = feature.properties.style || {};
          const attributeProperties = options.featureStyle || {};

          return this.getStyle(feature, featureProperties, attributeProperties);
        }
      });

      return geojsonLayer;
    },

    getStyle(feature, featureProperties, attributeProperties) {
      return {
        radius: featureProperties.radius           || attributeProperties.radius      || 5,
        color: featureProperties.color             || attributeProperties.color       || '#3E87E8', //primary-blue,
        fillColor: featureProperties.fillColor     || attributeProperties.fillColor   || '#88BDE6', //$dv-light-blue
        weight: featureProperties.weight           || attributeProperties.weight      || 2,
        opacity: featureProperties.opacity         || attributeProperties.opacity     || 1,
        fillOpacity: featureProperties.fillOpacity || attributeProperties.fillOpacity || 0.4
      };
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the new style is not the same as the old.
     * (stringifying is needed here to be able to do a deep equals check)
     */
    updateInst(lastOptions, nextOptions) {
      if ((JSON.stringify(lastOptions.data) !== JSON.stringify(nextOptions.data)) ||
         (JSON.stringify(lastOptions.featureStyle || {}) !== JSON.stringify(nextOptions.featureStyle || {}))) {
        this.elementInst.clearLayers();
        this.elementInst.addData(nextOptions.data);
      }
    },

    getInstOptions() {
      return {
        data: this.data,
        featureStyle: this.featureStyle,
        showFeatureProperties: this.showFeatureProperties,
        blankLayer: this.blankLayer
      };
    }
  };
  /* Bind VectorLayer behavior */
  /** @polymerBehavior */
  PxMapBehavior.VectorLayer = [
    PxMapBehavior.Layer,
    PxMapBehavior.VectorLayerImpl
  ];
})();
