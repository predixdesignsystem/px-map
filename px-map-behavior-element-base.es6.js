(function() {
  'use strict';

  /**
   *
   * @polymerBehavior PxMapBehavior.ElementBase
   */
  const ElementBase = {
    /**
     * A reference to this element's instance. The instance can be configured and
     * attached to the map or to another instance. Events emitted by this instance
     * will be intercepted and retargeted so they appear to come from directly from
     * this custom element.
     *
     * @property elementInst
     * @type {Object|null}
     * @default null
     */
    elementInst: null,

    created() {
    }
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.ElementBase = ElementBase;
})()
