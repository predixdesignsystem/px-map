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
   * @polymerBehavior PxMapBehavior.DistributeProperties
   */
  const DistributeProperties = {
    attached() {
      if (this.distributions && this.distributions.length) {
        this._addDistributionObservers(this.distributions);
      }
    },

    detached() {
      if (this.distributions && this.distributions.length) {
        this._removeDistributionObservers();
      }
    },

    /**
     * Creates new observers that watch for new light DOM children to be
     * distributed and watch for changes to a `property` and apply that
     * `property` to the children.
     *
     * @param {Array} properties - A list of property names to attach to children
     */
    _addDistributionObservers(properties) {
      for (let property of properties) {
        // If the string is formatted like 'property as newProperty', distribute
        // the parent.property on the children as child.newProperty
        const findPropAsProp = /^([\w]+)\b as \b([\w]+)$/g;
        const foundStrings = findPropAsProp.exec(property);
        const propertyName = (foundStrings||[]).length ? foundStrings[1] : property;
        const childPropertyName = (foundStrings||[]).length ? foundStrings[2] : property;

        this._distributeOnNewChildren(propertyName, childPropertyName);
        this._distributeOnPropertyChange(propertyName, childPropertyName);
      }
    },

    /**
     * Removes all distribution observers when the host is detached.
     */
    _removeDistributionObservers() {
      // Remove parent -> child light DOM distribution observers
      const newChildDistributors = this.__newChildDistributors;
      if (newChildDistributors && newChildDistributors.length) {
        const distributeFns = newChildDistributors.values();
        for (let fn of distributeFns) {
          Polymer.dom(this).unobserveNodes(fn);
        }
      }

      // For now, it seems like Polymer.Bind automatically cleans up all the
      // dynamic property change effects, so we'll end here.
      // If performance becomes an issue, we may need to look into manually
      // removing the effects created `Polymer.Bind.addPropertyEffect`.
    },

    /**
     * Attaches an observer that is triggered when light DOM child nodes are
     * distributed or updated. The `propertyName` property and value from the
     * parent will be applied to the children automatically.
     *
     * @param {String} propertyName - The name of the property to distribute to light DOM children
     * @param {String} childPropertyName - The name the property will be given on the children (can be the same as `propertyName`)
     */
    _distributeOnNewChildren(propertyName, childPropertyName) {
      const distributors = this.__newChildDistributors || new Map();
      if (!distributors.has(propertyName)) {
        // @TODO: This would be the way to observe without Polymer.dom, but due
        // to the way Polymer ~1.6 orchestrates DOM manipulation, it doesn't work.
        // Revert to this code in a newer version:
        // const boundObserverFn = this[observeFnName].bind(this);
        // this[observerWrapper] = new MutationObserver(boundObserverFn);
        // this[observerWrapper].observe(this, {childList:true});
        let distributeFn = () => this._distributePropertyToChildren(propertyName, childPropertyName);
        let distributorInstance = Polymer.dom(this).observeNodes(distributeFn);
        distributors.set(propertyName, distributorInstance);
      }
    },

    /**
     * Attaches a `Polymer.Bind` complex property observer that watches for changes
     * to the value of `propertyName` and syncs the new value to children.
     *
     * @param {String} propertyName - The name of the property to watch for changes
     * @param {String} childPropertyName - The name the property will be given on the children (can be the same as `propertyName`)
     */
    _distributeOnPropertyChange(propertyName, childPropertyName) {
      const distributors = this.__propertyChangeDistributors || new Map();
      if (!distributors.has(propertyName)) {
        // @TODO: This is Polymer 1.X-flavored code that relies on the internal
        // `Polymer.Bind.addPropertyEffect` API. In the future, we should use
        // the hooks Polymer 2.0 will provide into the observer API vs. calling
        // this internal watcher.
        let distributeFn = () => this._distributePropertyToChildren(propertyName, childPropertyName);
        Polymer.Bind.addPropertyEffect(this, propertyName, 'function', distributeFn);
        Polymer.Bind.addPropertyEffect(this, `${propertyName}.*`, 'function', distributeFn);
        distributors.set(propertyName, true);
      }
    },

    /**
     * Distribute the parent property `propertyName` to all child elements as
     * `childPropertyName` with value `propertyValue`. Loops through distributed
     * light DOM children (found with `getEffectiveChildren`) and update the
     * child's property `childPropertyName` if it is out-of-sync with the parent's.
     *
     * @param {String} propertyName - The name of the property to distribute to light DOM children
     * @param {String} childPropertyName - The name the property will be given on the children (can be the same as `propertyName`)
     */
    _distributePropertyToChildren(propertyName, childPropertyName) {
      if (!propertyName || !childPropertyName || !this[propertyName] || typeof this[propertyName] === 'undefined') return;

      const applyPropertyFn = () => {
        const children = this.getEffectiveChildren();
        for (let child of children) {
          if (!child[childPropertyName] || child[childPropertyName] !== this[propertyName]) {
            child[childPropertyName] = this[propertyName];
          }
        }
      }

      this.debounce(`apply-property-${propertyName}-reference-to-${this.is}-children`, applyPropertyFn, 1);
    },
  };

  const namespace = (window.PxMapBehavior = window.PxMapBehavior || {});
  namespace.DistributeProperties = DistributeProperties;
})()
