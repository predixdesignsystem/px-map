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
/* Import style modules */
/**
This subcomponent creates a geolocation marker that can be attached to the map
to show the user's current location. The accuracy margin of error of the
marker is configurable by the user.

### Usage

Use this component inside of a `px-map` element, or inside of a `px-map-layer-group`
element to group it with other geospatial visualizations.

Enable the `fit-to-markers` attribute on the `px-map` element to automatically
fit this marker and any other markers drawn within the visual boundaries of the
map when it is first loaded.

For example, the following map will automatically center the marker in the view
when the map is loaded:

    <px-map fit-to-markers>
      <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
      <px-map-layer-group name="Landmarks">
        <px-map-marker-locate lat="35.6654861" lng="139.7706668" accuracy="12"></px-map-marker-locate>
      </px-map-layer-group>
    </px-map>

Use this marker together with the `px-map-control-locate` component to automatically
find and set the latitude and longitude of the marker to the user's current location:

    <px-map lat="12" lng="13" zoom="15">
      <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>

      <px-map-control-locate last-found-location="{{location}}" move-to-location position="bottomright"></px-map-control-locate>
      <px-map-marker-locate lat="{{location.lat}}" lng="{{location.lng}}" accuracy="{{location.accuracy}}"></px-map-marker-locate>
    </px-map>

### Styling
The following custom properties are available for styling:

Custom property | Description
:----------------|:-------------
`--px-map-marker-locate-icon-color` | Color for the locate icon
`--px-map-marker-locate-icon-border-color` | Border color for the locate icon
`--px-map-marker-locate-icon-accuracy-color` | Color for the location accuracy ring
`--px-map-marker-locate-icon-accuracy-opacity` | Opacity for the location accuracy ring

@element px-map-marker-locate
@blurb Creates a geolocation marker that can be attached to the map to show the user's current location
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './px-map-behavior-marker.js';
import './css/px-map-styles.js';
Polymer({
  _template: Polymer.html`
    <style include="px-map-styles"></style>
    <slot></slot>
`,

  is: 'px-map-marker-locate',
  behaviors: [PxMapBehavior.LocateMarker]
});