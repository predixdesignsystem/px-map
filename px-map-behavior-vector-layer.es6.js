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
       * A string that will be contain the geojson:
       *
       * @type {String}
       */
      data: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * An object that can specify the style
       *
       * @type {Object}
       */
      featureStyle: {
        type: Object,
        value: null
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
      return ((typeof this.data === 'string') && this.data.length) || this.blankLayer;
    },

    createInst(options) {
      let featureData;
      options.data ? featureData = JSON.parse(options.data) : featureData = null;

      let geojsonLayer = L.geoJson(featureData, {
        pointToLayer: function (feature, latlng) {
          if(!options.featureStyle) options.featureStyle = {};

          return new L.CircleMarker(latlng, {
            radius: options.featureStyle.radius || 5,
            color: options.featureStyle.color || '#3E87E8', //primary-blue,
            fillColor: options.featureStyle.fillColor || '#88BDE6', //$dv-light-blue
            weight: options.featureStyle.weight || 2,
            opacity: options.featureStyle.opacity || 1,
            fillOpacity: options.featureStyle.fillOpacity || 0.4
          })
        },
        onEachFeature: (feature, layer) => {
          if (!this.showFeatureProperties) return;
          let popupString = '';

          Object.keys(feature.properties).forEach(function (value) {
            if (feature.properties[value] && feature.properties[value] !== 'unset') {
              popupString += `${value} : ${feature.properties[value]} <br>`;
            }
          });

          let popoverHTML = `<p style="font-weight: bold">Feature Properties</p> <div>${popupString}</div>`;
          layer.bindPopup(popoverHTML);

          layer.on({
            mouseover: function (e) {
              e.target.setStyle({color: 'red'});
            },
            mouseout: function (e) {
              geojsonLayer.resetStyle(e.target);
            }
          });
        }
      });

      return geojsonLayer;
    },

    updateInst(lastOptions, nextOptions) {
      if (lastOptions.data !== nextOptions.data) {
        this.elementInst.clearLayers();
        this.elementInst.addData(JSON.parse(nextOptions.data));
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
