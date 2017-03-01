(function() {
  'use strict';

  /**
   *
   * @class PxMap.IconStatic
   */
  class IconStatic {
    constructor(options={}) {
      this.icon = this.createIcon(options);
      return this.icon;
    }

    createIcon(options={}) {
      // Extract `type` and `badge` from options with defaults
      let { type='info', badge=false } = options;
      options.className = this._generateStaticIconClasses(type, badge);

      // Static options
      options.html = `
        <i class="map-icon-static__body"></i>
        <i class="map-icon-static__descender"></i>
        <i class="map-icon-static__badge"></i>
      `;
      options.iconSize = L.point(50,50);
      options.iconAnchor = L.point(9.01, 39.5);
      options.popupAnchor = L.point(1,-38);

      return L.divIcon(options);
    }

    _generateStaticIconClasses(type, badge) {
      const classes = ['map-icon', 'map-icon-static'];
      if (type && type.length) {
        classes.push(`map-icon-static--${type}`);
      }
      if (badge) {
        classes.push(`map-icon-static--with-badge`);
      }
      return classes.join(' ');
    }
  };

  /* Ensures the klass namespace is created */
  const klass = (window.PxMap = window.PxMap || {});

  /* Bind IconStatic klass */
  klass.IconStatic = IconStatic;
})();
