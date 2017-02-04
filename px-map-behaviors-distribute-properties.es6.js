(function() {
  'use strict';

  /**
   * When light DOM children are distributed into a `px-map` framework component,
   * that component will often have to share a reference to one of its properties
   * with the child. This behavior wraps around that use case, ensuring that
   * properties will be applied to any distributed light DOM children and that
   * changes to those properties on the parent will trigger a re-distribution
   * to the children that keeps them up-to-date.
   *
   * Distributions should be configured in the component's Polymer constructor
   * in a similar way to the `observers` block provided by the Polymer library.
   *
   * For example, this `simple-parent-component` distributes its `name` property
   * it any light DOM children:
   *
   * ```
   * <dom-module id="simple-parent-component">
   *   <template>
   *     <!-- ... -->
   *   </template>
   * </dom-module>
   * <script>
   *   Polymer({
   *     is: 'simple-parent-component',
   *     properties: {
   *       name: {
   *         type: String
   *       }
   *     },
   *     distributions: ['name']
   *   });
   * </script>
   * ```
   *
   * When this parent component is placed on a page, anything placed in its
   * light DOM will automatically be set up with a `name` property that
   * will always inherit its value (and any updates to that value) from
   * the parent `name` property.
   *
   * For example, the light DOM children `simple-child-component` will have
   * the `name` property distributed to them with the value `Some Name`:
   *
   * ```
   * <simple-parent-component name="Some Name">
   *   <simple-child-component></simple-child-component>
   * </simple-parent-component>
   * <script>
   *   // The child has inherited the parent's name
   *   var child = document.querySelector('simple-child-component');
   *   console.log(child.name); // => 'Some Name'
   *
   *   // Updating the name of the parent will also update the child's name
   *   var parent = document.querySelector('simple-parent-component');
   *   parent.setAttribute('name', 'New Name');
   *   console.log(child.name); // => 'New Name'
   * </script>
   * ```
   *
   * @polymerBehavior PxMapBehaviors.DistributeProperties
   */
  const DistributeProperties = {
    created() {
      if (this.distributions && this.distributions.length) {
        this._setupDistributionObservers(this.distributions);
      }
    },

    /**
     * Creates new observers that watch for new light DOM children to be
     * distributed and watch for changes to a `property` and apply that
     * `property` to the children.
     *
     * @param {Array} properties - A list of property names to attach to children
     */
    _setupDistributionObservers(properties) {
      for (let propertyName of properties) {
        this._distributeOnNewChildren(propertyName);
        this._distributeOnPropertyChange(propertyName);
      }
    },

    /**
     * Attaches an observer that is triggered when light DOM child nodes are
     * distributed or updated. The `propertyName` property and value from the
     * parent will be applied to the children automatically.
     *
     * @param {String} propertyName - The name of the property to distribute to light DOM children
     */
    _distributeOnNewChildren(propertyName) {
      const distributors = this.__newChildDistributors || new Map();
      if (!distributors.has(propertyName)) {
        // @TODO: This would be the way to observe without Polymer.dom, but due
        // to the way Polymer ~1.6 orchestrates DOM manipulation, it doesn't work.
        // Revert to this code in a newer version:
        // const boundObserverFn = this[observeFnName].bind(this);
        // this[observerWrapper] = new MutationObserver(boundObserverFn);
        // this[observerWrapper].observe(this, {childList:true});
        let distributeFn = () => this._distrubutePropertyToChildren(propertyName);
        let distributorInstance = Polymer.dom(this).observeNodes(distributeFn);
        distributors.set(propertyName, distributorInstance);
      }
    },

    /**
     * Attaches a `Polymer.Bind` complex property observer that watches for changes
     * to the value of `propertyName` and syncs the new value to children.
     *
     * @param {String} propertyName - The name of the property to watch for changes
     */
    _distributeOnPropertyChange(propertyName) {
      const distributors = this.__propertyChangeDistributors || new Map();
      if (!distributors.has(propertyName)) {
        // @TODO: This is Polymer 1.X-flavored code that relies on the internal
        // `Polymer.Bind.addPropertyEffect` API. In the future, we should use
        // the hooks Polymer 2.0 will provide into the observer API vs. calling
        // this internal watcher.
        let distributeFn = () => this._distrubutePropertyToChildren(propertyName);
        Polymer.Bind.addPropertyEffect(this, propertyName, 'function', distributeFn);
        Polymer.Bind.addPropertyEffect(this, `${propertyName}.*`, 'function', distributeFn);
        distributors.set(propertyName, true);
      }
    },

    /**
     * Distribute the parent property `propertyName` to all child elements as
     * with value `propertyValue`. Loops through distributed light DOM children
     * (found with `getEffectiveChildren`) and update the child's property `propertyName`
     * if it doesn't already match `propertyValue`.
     *
     * @param {String} propertyName - The name of the property to distribute to light DOM children
     */
    _distrubutePropertyToChildren(propertyName) {
      if (!propertyName || !this[propertyName] || typeof this[propertyName] === 'undefined') return;

      const applyPropertyFn = () => {
        const children = this.getEffectiveChildren();
        for (let child of children) {
          if (!child[propertyName] || child[propertyName] !== this[propertyName]) {
            child[propertyName] = this[propertyName];
          }
        }
      }

      this.debounce(`apply-property-${propertyName}-reference-to-${this.is}-children`, applyPropertyFn, 1);
    },
  };

  const namespace = (window.PxMapBehaviors = window.PxMapBehaviors || {});
  namespace.DistributeProperties = DistributeProperties;
})()
