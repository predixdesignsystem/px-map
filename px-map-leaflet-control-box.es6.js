/**
 * Extends the `L.Control` Leaflet class to provide a simple control box with
 * a container.
 *
 * @name ControlBox
 * @class L.Control.ControlBox
 * @extends L.Control
 */
L.Control.ControlBox = L.Control.extend({
  options: {
    position: 'topright',
    content: '',
    className: '',
    autoOpen: true
  },

  initialize: function(options) {
    // Merge with inherited options, assign resulting options to `this.options`
    L.setOptions(this, options);

    // Create an element
    this.controlContainer = L.DomUtil.create('div');
    this.controlContainer.className = this.options.className;
    this.controlContainer.innerHTML = this.options.content;

    // Determine if the control box should be shown right now or hidden
    this._isVisible = true;
    if (this.options.autoOpen) {
      this.openBox();
    } else {
      this.closeBox();
    }

    // Disable scroll events on the container
    L.DomEvent.disableScrollPropagation(this.controlContainer);
  },

  onAdd: function(map) {
    // HTMLElement created in the initialization function. Return to have
    // L.Control handle adding for us.
    return this.controlContainer;
  },

  onRemove: function(map) {
    // Handled automatically by `L.Control`
  },

  /**
   * Sets the content of the `controlBox` to the stringified HTML.
   *
   * @param {String} stringifiedHTML
   */
  setContent: function(stringifiedHTML) {
    if (this.controlContainer) {
      this._content = stringifiedHTML;
      this._updateContent();
    }
  },

  /**
   * Updates the content of the `this.controlContainer` element with the most
   * up-to-date `this._content`.
   */
  _updateContent: function() {
    if (!this._content || !this.controlContainer) return;

    this.controlContainer.innerHTML = this._content;
  },

  /**
   * Fetches the HTMLElement that contains the content. Pass the result to
   * `L.DOMUtil` to make manual updates.
   *
   * @return {HTMLElement|null} - The HTMLElement that contains the content. If none, returns `null`.
   */
  getContainerElement: function() {
    if (!this.controlContainer) return null;
    return this.controlContainer;
  },

  /**
   * Ensures the control box is visible on the map. If the control box is already
   * visible, does nothing.
   */
  openBox: function() {
    if (!this._isVisible && this.controlContainer && this._containerElIsHidden() === true) {
      L.DomUtil.removeClass(this.controlContainer, 'visuallyhidden');
    }
    this._isVisible = true;
  },

  /**
   * Ensures the control box is hidden. If the control box is already hidden,
   * does nothing.
   */
  closeBox: function() {
    if (this._isVisible && this.controlContainer && this._containerElIsHidden() === false) {
      L.DomUtil.addClass(this.controlContainer, 'visuallyhidden');
    }
    this._isVisible = false;
  },

  /**
   * Returns `true` if the control box is visible.
   *
   * @return {Boolean|null}
   */
  isOpen: function() {
    if (!this.controlContainer) return null;
    return this._isVisible;
  },

  /**
   * Checks if the container HTMLElement has the `visuallyhidden` class. If the
   * container doesn't exist, returns null. Otherwise, returns Boolean value:
   * `true` if is has the class (and is hidden), `false` if it doesn't have the
   * class (and is not hidden).s
   *
   * @return {Boolean|null}
   */
  _containerElIsHidden: function() {
    if (!this.controlContainer) return null;
    return L.DomUtil.hasClass(this.controlContainer, 'visuallyhidden');
  }
});

/**
 * Creates a new control box.
 *
 * @param {Object} [options] - Configures the layer
 * @param {String} [options.position=topleft] - Sets the control position
 * @param {String} [options.content=] - The HTML content to place in the container
 * @param {String} [options.className=] - A string with CSS class names seperated by spaces
 * @return {L.Control.ControlBox} - New ControlBox instance
 */
L.Control.controlBox = function(options) {
  return new L.Control.ControlBox(options);
};
