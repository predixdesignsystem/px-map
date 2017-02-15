(function(){
  'use strict';

  class PxMapZoomControl {
    /* Name for the component */
    get is() { return 'px-map-zoom-control'; }

    /* Behaviors to import for this component */
    get behaviors() {
      return [
        window.PxMapBehavior.ElementInstance,
        window.PxMapBehavior.ControlInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {}
    }

    _createElementInstance() {
      const control = this._createControl();
      return control;
    }

    _createControl() {
      const options = this._getControlOptions();
      return L.control.zoom(options);
    }

    _getControlOptions(defaults={}) {
      const options = defaults;
      options.position = this._getControlPosition();
      options.zoomInText = '<i class="fa fa-plus"></i>';
      options.zoomOutText = '<i class="fa fa-minus"></i>';
      return options;
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapZoomControl);
})();
