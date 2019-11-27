/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-map.js';
import '../px-map-tile-layer.js';
Polymer({
  _template: Polymer.html`
  <!-- Header -->
  <px-demo-header module-name="px-map" description="The px-map component is a framework for creating maps in your application." mobile="" tablet="" desktop="">
  </px-demo-header>

  <!-- Interactive -->
  <px-demo-interactive>
    <!-- Configs -->
    <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

    <!-- Props -->
    <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

    <!-- Component ---------------------------------------------------------->
    <px-demo-component slot="px-demo-component">
      <div style="height:400px;width:600px;display:flex">
        <px-map zoom="{{props.zoom.value}}" lat="{{props.lat.value}}" lng="{{props.lng.value}}" flex-to-size="{{props.flexToSize.value}}" disable-scroll-zoom="{{props.disableScrollZoom.value}}" disable-touch-zoom="{{props.disableTouchZoom.value}}" disable-double-click-zoom="{{props.disableDoubleClickZoom.value}}" disable-dragging="{{props.disableDragging.value}}" attribution-prefix="<a href=&quot;http://leafletjs.com&quot; title=&quot;A JS library for interactive maps&quot;>Leaflet</a> | © <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap contributors</a>">
          <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
        </px-map>
      </div>
    </px-demo-component>
    <!-- END Component ------------------------------------------------------>

    <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-map" links-includes="[&quot;px-map/px-map-tile-layer.html&quot;]">
    </px-demo-component-snippet>
  </px-demo-interactive>

  <!-- API Viewer -->
  <px-demo-api-viewer source="px-map" mark-private="[[apiMarkPrivate]]">
  </px-demo-api-viewer>

  <!-- Footer -->
  <px-demo-footer></px-demo-footer>
`,

  is: 'px-map-demo',

  properties: {

    /**
     * Note: The actual data/values for `props` are placed in `this.demoProps`
     * to create a static reference that Polymer shouldn't overwrite.
     *
     * @property props
     * @type {Object}
     */
    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    /**
     * An array of pre-configured `props` that can be used to provide the user
     * with a set of common examples. These configs will be made available
     * as a set of tabs the user can click that will automatically change
     * the `props` to specific values.
     *
     * @property configs
     * @type {Array}
     */
    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default",
            configReset: true },
          ]
      }
    },

    apiMarkPrivate: {
      type: Array,
      value: function() {
        return [
          "notifyInstReady",
          "notifyInstReady",
          "canAddInst",
          "shouldAddInst",
          "addInst",
          "shouldRemoveInst",
          "removeInst",
          "shouldUpdateInst",
          "updateInst",
          "createInst",
          "getInstOptions",
          "bindEvents",
          "unbindAllEvents",
          "addProperties",
          "extendObj",
          "getShadyScope",
          "isShadyScoped"
        ]
      }
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   *
   * @property demoProps
   * @type {Object}
   */
  demoProps: {
    zoom: {
      type: Number,
      defaultValue: 8,
      inputType: 'text'
    },

    lat: {
      inputLabel: 'Latitude',
      type: Number,
      defaultValue: 37.7749,
      inputType: 'text'
    },

    lng: {
      inputLabel: 'Longitude',
      type: Number,
      defaultValue: -122.4312,
      inputType: 'text'
    },

    flexToSize: {
      type: Boolean,
      defaultValue: true,
      inputType: 'toggle',
      inputDisabled: true
    },

    disableScrollZoom: {
      type: Boolean,
      defaultValue: true,
      inputType: 'toggle'
    },

    disableTouchZoom: {
      type: Boolean,
      defaultValue: true,
      inputType: 'toggle'
    },

    disableDoubleClickZoom: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    disableDragging: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    parentComponent: {
      type: Array,
      defaultValue: ['<div style="height:400px; width:600px; display:flex">','</div>']
    },

    lightDomContent: {
      type: String,
      defaultValue: '<px-map-tile-layer url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"></px-map-tile-layer>'
    }

  }
});
