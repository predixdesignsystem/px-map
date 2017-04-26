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
       * An property that if set will show a popover containing all the feature properties when the feature is clicked
       *
       * @type {Boolean}
       */
      showFeatureProperties: {
        type: Boolean,
        value: false
      }
    },

    canAddInst() {
      return (typeof this.data === 'string') && this.data.length;
    },

    createInst(options) {
      return L.geoJson(JSON.parse(options.data), {
        pointToLayer: function(feature, latlng) {
          return new L.CircleMarker(latlng, {
            radius: options.featureStyle.radius           || 5,
            color: options.featureStyle.color             || '#3E87E8', //primary-blue,
            fillColor: options.featureStyle.fillColor     || '#88BDE6', //$dv-light-blue
            weight: options.featureStyle.weight           || 2,
            opacity: options.featureStyle.opacity         || 1,
            fillOpacity: options.featureStyle.fillOpacity || 0.4
          })
        },
        onEachFeature: (feature, layer) => {
          if(!this.showFeatureProperties) return;
          let popupString = '';

          Object.keys(feature.properties).forEach( function(value) {
            if(feature.properties[value] && feature.properties[value] !== 'unset') {
              popupString += value + ' : ' + feature.properties[value] +  '<br>';
            }
          });

          layer.bindPopup(popupString);
        }
      });
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
        featureStyle: this.featureStyle
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
