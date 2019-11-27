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
/*
    Relative paths assume component is being run from inside an app or another component, where dependencies are flat
    siblings. When this component is run from its own repo (e.g. tests, examples), we assume the server is started with
    'gulp serve' (or similar server setup) to enable correct finding of bower dependencies for local runs.
*/
/* Load required PxMapBehaviors */
/**
This component creates a popup that is displayed when a given marker is clicked
by the user. The popup can contain a title, image, and text giving more
information about the selected marker.

### Usage

    <px-map>
      <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
      <px-map-marker-static lat="37.7673626" lng="-121.9595048" type="info">
        <px-map-popup-info title="GE Digital" description="We have great maps. Our maps are the best maps."></px-map-popup-info>
      </px-map-marker-static>
    </px-map>


@element px-map-popup-info
@blurb ...
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './px-map-behavior-popup.js';
Polymer({
  _template: Polymer.html`
    <style>
      :host { display: none }
    </style>
`,

  is: 'px-map-popup-info',
  behaviors: [PxMapBehavior.InfoPopup]
});
