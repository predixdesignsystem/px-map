/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /****************************************************************************
   * KLASSES
   ****************************************************************************/

  /* Ensures the klass namespace is created */
  window.PxMap = (window.PxMap || {});

  /**
   *
   * @class PxMap.StaticIcon
   */
  class StaticIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      // Extract `type` from settings with defaults
      let { type='info', styleScope, color } = settings;

      const className = this._generateStaticIconClasses(type, styleScope);

      let customStyleBackground = '';
      let customStyleBorder = '';

      if (color) {
        customStyleBackground = `background-color: ${color};`;
        customStyleBorder = `border-color: ${color} transparent transparent;`;
      }

      // Static options
      const html = `
        <div class="map-icon-static__wrapper">
          <i class="map-icon-static__body" style="${customStyleBackground}"></i>
          <i class="map-icon-static__descender" style="${customStyleBorder}"></i>
          <i class="map-icon-static__badge"></i>
        </div>
      `;
      const iconSize = L.point(23,31);
      const iconAnchor = L.point(7.6, 31);
      const popupAnchor = L.point(1,-31);

      // Define the `divIcon` options
      const options = {
        className,
        html,
        iconSize,
        iconAnchor,
        popupAnchor
      };

      return L.divIcon(options);
    }

    _generateStaticIconClasses(type, styleScope) {
      const classes = ['map-icon', 'map-icon-static', 'map-icon-static--with-badge'];
      if (type && type.length) {
        classes.push(`map-icon-static--${type}`);
      }
      if (styleScope) {
        classes.push(styleScope);
      }
      return classes.join(' ');
    }
  };
  /* Bind StaticIcon klass */
  PxMap.StaticIcon = StaticIcon;

  /**
   *
   * @class PxMap.SymbolIcon
   */
  class SymbolIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      let { type='info', icon='px-nav:favorite', styleScope, stroke='currentColor', fill='none', strokeWidth='2px', color } = settings;
      const className = this._generateSymbolIconClasses(type, styleScope);

      let customStyleBackground = '';
      let customStyleBorder = '';

      if (color) {
        customStyleBackground = `background-color: ${color};`;
        customStyleBorder = `border-color: ${color} transparent transparent;`;
      }

      // Icon/Symbol options
      const html = `
      <div class="map-icon-symbol__wrapper">
        <i class="map-icon-symbol__body" style="${customStyleBackground}">
          <div class="map-icon-symbol__symbol--container flex flex--middle flex--center">
            <px-icon icon="${icon}" style="stroke:${stroke}; fill:${fill}; width:100%; height:100%; stroke-width:${strokeWidth}"></px-icon>
          </div>
        </i>
        <i class="map-icon-symbol__descender" style="${customStyleBorder}"></i>
        <i class="map-icon-symbol__badge"></i>
      </div>
      `;

      const iconSize = L.point(40,56);
      const iconAnchor = L.point(19.6, 57);
      const popupAnchor = L.point(1,-58);

      // Define the `divIcon` options
      const options = {
        className,
        html,
        iconSize,
        iconAnchor,
        popupAnchor
      };

      return L.divIcon(options);
    }

    _generateSymbolIconClasses(type, styleScope) {
      const classes = ['map-icon', 'map-icon-symbol', 'map-icon-symbol--with-badge'];
      if (type && type.length) {
        classes.push(`map-icon-symbol--${type}`);
      }
      if (styleScope) {
        classes.push(styleScope);
      }
      return classes.join(' ');
    }
  };
  /* Bind SymbolIcon klass */
  PxMap.SymbolIcon = SymbolIcon;

  /**
   *
   * @class PxMap.ClusterIcon
   */
  class ClusterIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      // Extract `count`, `countByType`, `colorsByType`
      const { count, countByType, colorsByType, containerSize=50, pathSize=10, borderSize=0, className='', styleScope } = settings;

      // The chart size is the container size with the border size subtracted out,
      // so we can draw and transform our SVG in the right dimensions
      const chartSize = (containerSize - (borderSize > 0 ? (borderSize*2)-0.5 : 0));

      // The icon size is a point representing the size of the icon's outer container
      const iconSize = L.point(containerSize, containerSize);

      // Get the SVG for this icon
      const svg = this._generateClusterIconSVG(countByType, colorsByType, chartSize, pathSize);

      // Generate the classes and wrapper HTML
      const classes = `map-icon-cluster ${className||''} ${styleScope||''}`;
      const html = `
        <div class="map-icon-cluster__container" style="width: ${containerSize}px; height: ${containerSize}px">
          <i class="map-icon-cluster__svg">${svg}</i>
          <div class="map-icon-cluster__body">${count}</div>
        </div>
      `;

      // Define the `divIcon` options
      const options = {
        iconSize: iconSize,
        className: classes,
        html: html
      };

      return L.divIcon(options);
    }

    _generateClusterIconSVG(countByType, colorsByType, chartSize, pathSize) {
      // Combine the `countByType` and `colorsByType` into one array of objects,
      // each describing a type with its associated count and color
      const typeKeys = Object.keys(countByType);
      const typeObjs = typeKeys.map(type => ({ type: type, count: countByType[type], color: colorsByType[type] }));

      // Sort the types from highest->lowest
      typeObjs.sort((a,b) => a.count - b.count);

      // Create two parallel arrays of [types] and [colors]
      const types = [];
      const colors = [];
      let i, len, type, total;
      for (i=0, len=typeKeys.length; i<len; i++) {
        type = typeKeys[i];
        total = countByType[type];
        types.push(countByType[type]);
        colors.push(colorsByType[type])
      }

      // Return the pie chart
      return this.createPieChart(types, colors, chartSize, pathSize);
    }

    createPieChart(groupsArray, colorsArray, chartSize, pathSize) {
      // Create a pie generator and pass it the `groupsArray` to create a set
      // of arcs we can draw as a donut pie cart
      const pieGeneratorFn = Px.d3.pie();
      const arcData = pieGeneratorFn(groupsArray);

      // Calculate the `radius` and `innerRadius` of the chart
      const radius = (chartSize / 2);
      const innerRadius = (radius - pathSize);

      // Create a path generator. Individual entries of `arcData` can be passed
      // in to the path geneator to yield a stringified path that can be
      // appended to a `<path>` tag's `d` attribute.
      const arcPathGeneratorFn = Px.d3.arc().outerRadius(radius).innerRadius(innerRadius);

      // Iterate over a list of `arcData` entries and return a block of paths
      const pathListTmpl = (paths) => paths.map(pathTmpl).join('');

      // For each path, generate a `<path>` tag with the correct attributes
      const pathTmpl = (pathData, pathIndex) => `<path d="${arcPathGeneratorFn(pathData)}" fill="${colorsArray[pathIndex]}" opacity="1"></path>`;

      return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 ${chartSize} ${chartSize}">
            <g transform="translate(${radius}, ${radius})">
                ${pathListTmpl(arcData)}
            </g>
        </svg>
      `;
    }
  };
  /* Bind ClusterIcon klass */
  PxMap.ClusterIcon = ClusterIcon;
})();
