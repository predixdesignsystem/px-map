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
/* Import peer demo pages */
/* <link rel="import" href="px-map-marker-direction-demo.html" /> */
/* <link rel="import" href="px-map-control-info-demo.html" /> */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-collection.js';
import './px-map-demo.js';
import './px-map-layer-geojson-demo.js';
import './px-map-tile-layer-demo.js';
import './px-map-tile-layer-bing-demo.js';
import './px-map-tile-layer-google-demo.js';
import './px-map-tile-layer-wms-demo.js';
import './px-map-marker-static-demo.js';
import './px-map-marker-symbol-demo.js';
import './px-map-marker-locate-demo.js';
import './px-map-marker-group-demo.js';
import './px-map-layer-group-demo.js';
import './px-map-popup-info-demo.js';
import './px-map-popup-data-demo.js';
import './px-map-control-zoom-demo.js';
import './px-map-control-scale-demo.js';
import './px-map-control-locate-demo.js';
Polymer({
  _template: Polymer.html`
    <style is="custom-style">
      html {
        --px-map-z-index: 1;
      }
    </style>

    <!-- Demo list/view change entrypoint -->
    <px-demo-collection demos="{{demos}}"></px-demo-collection>
`,

  is: 'local-element-demo',

  properties: {

    /**
     * A list of demo pages to make available. An array of objects, each with
     * the name of a demo, and the name of the custom element loaded holding
     * the demo. (Make sure you create <link> tags to import each demo
     * page in your index.html.)
     *
     * @example
     *
     * [
     *   { name: "px-context-browser", tagName: "px-context-browser-demo" },
     *   { name: "px-context-browser-typeahead", tagName: "px-context-browser-typeahead-demo" }
     * ]
     *
     * @property demos
     * @type {Array}
     */
    demos: {
      type: Array,
      value: function(){
        return [
          { name: "px-map",
            tagName: "px-map-demo" },
          { name: "px-map-tile-layer",
            tagName: "px-map-tile-layer-demo" },
          { name: "px-map-layer-geojson",
            tagName: "px-map-layer-geojson-demo" },
          { name: "px-map-tile-layer-bing",
            tagName: "px-map-tile-layer-bing-demo" },
          { name: "px-map-tile-layer-google",
            tagName: "px-map-tile-layer-google-demo" },
          { name: "px-map-tile-layer-wms",
            tagName: "px-map-tile-layer-wms-demo" },
          // { name: "px-map-control-info",
          //   tagName: "px-map-control-info-demo" },
          { name: "px-map-control-locate",
            tagName: "px-map-control-locate-demo" },
          { name: "px-map-control-scale",
            tagName: "px-map-control-scale-demo" },
          { name: "px-map-control-zoom",
            tagName: "px-map-control-zoom-demo" },
          // { name: "px-map-marker-direction",
          //   tagName: "px-map-marker-direction-demo" },
          { name: "px-map-marker-locate",
            tagName: "px-map-marker-locate-demo" },
          { name: "px-map-marker-static",
            tagName: "px-map-marker-static-demo" },
          { name: "px-map-marker-symbol",
            tagName: "px-map-marker-symbol-demo" },
          { name: "px-map-marker-group",
            tagName: "px-map-marker-group-demo" },
          { name: "px-map-layer-group",
            tagName: "px-map-layer-group-demo" },
          { name: "px-map-popup-info",
            tagName: "px-map-popup-info-demo" },
          { name: "px-map-popup-data",
            tagName: "px-map-popup-data-demo" }
        ]
      }
    },

    /**
     * The name of the active demo. Can be set to update the currently visible
     * demo, or listened to for notifications when the user changes the
     * active demo.
     *
     * @property chosenDemoName
     * @type {String}
     */
    chosenDemoName: {
      type: String
    }
  }
});
