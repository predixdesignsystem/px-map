(function() {
  'use strict';

  /**
   *
   *
   * @mixin MapElementMixin
   */
  let MapElementMixin = (superclass) => class extends superclass {
    initialize(options) {
      if (super.initialize) super.initialize(options);

      /**
       * A reference to this element's instance. The instance can be configured and
       * attached to the map or to another instance. Events emitted by this instance
       * will be intercepted and retargeted so they appear to come from directly from
       * this custom element.
       *
       * @property elementInst
       * @type {Object|null}
       */
      this.elementInst = null;
    }

    mergeOpts(...opts) {
     this.options = this.options || {};
     Object.assign(this.options, ...opts);
     return this.options;
    }
  };

  /**
   *
   *
   * @mixin MapLayerMixin
   */
  let MapLayerMixin = (superclass) => class extends superclass {
    initialize() {
      if (super.initialize) super.initialize(...arguments);
      console.log('second')
      debugger;
    }
  };

  const mixins = (window.PxMapMixin = window.PxMapMixin || {});
  mixins.MapElement = MapElementMixin;
  mixins.MapLayer = MapLayerMixin;

  class PxMapBase {}
  const klasses = (window.PxMap = window.PxMap || {});
  klasses.Base = PxMapBase;
})();
