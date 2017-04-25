v1.2.4
===================
## Bug fixes
* Fixes a bug that causes popups to collapse when their content is too short

v1.2.3
==================
## Bug fixes
* Adds a default minZoom and maxZoom for map to fix a bug where marker group
  permanently fails if it attaches before a tile layer and no minZoom
  and maxZoom are defined (https://github.com/PredixDev/px-map/issues/76).
  This bug seems to be related to a limitation in the underlying library
  we use for marker group. See this issue, which seems to have solved a related
  bug in the past: https://github.com/Leaflet/Leaflet.markercluster/issues/198.
  It's possible a regression in Leaflet.markercluster caused this bug to
  happen again — this may require future investigation.

v1.2.2
==================
## Other changes
* Adds `disableTouchZoom` and `disableScrollZoom` to demos to make it easier to
  browse the demo site.

v1.2.1
==================
## Bug fixes
* Fixes `moveMaxZoom` attribute bug in `px-map-locate-control`, adds test

v1.2.0
==================
This release adds a new subcomponent that loads base layer tiles from the
Bing Maps API. It handles authentication and communication with the API,
making it simple to add Bing's aerial or road imagery to your map.

## New features
* Load tiles from the Bing Maps API with `px-map-tile-layer-bing`. See the new
  component's API docs page for more information and a demo.

v1.1.0
==================
This is the first minor release since v1.0.0 and it has a lot of great fixes,
tweaks, and improvements to existing components. This release was focused on
hardening the components to respond the way developers and users expect.

## Changes to existing APIs
There are no breaking changes in this release, but some old APIs have been
quietly deprecated.

Components affected:

* px-map-marker-static
* px-map-marker-symbol
* px-map-marker-group
* px-map-control-zoom

Changes:

* The `showBadge` attribute has been removed from `px-map-marker-static` and
  `px-map-marker-symbol`. The badges will now always appear on when those
  icons have their `type` set to 'important' or 'warning.' Search your code for
  `show-badge` or `showBadge` in your HTML or JavaScript and just delete any
  references. If you set the `showBadge` attribute on a component, nothing will
  happen, and no errors will be thrown.
* Related to `showBadge`, you should update any GeoJSON FeatureCollection samples
  or generators you have created. You should no longer pass the key 'icon-show-badge'
  in your feature marker-icon properties. Search your code for the following
  regular expression and delete the line: `/(?:\"|\')icon\-show\-badge(?:\"|\')[\s]?:[\s]?true/`
* The `zoomInTitle` and `zoomOutTitle` options have been removed from the
  `px-map-control-zoom` component. These were not well documented and didn't work
  as expected. The documentation for the component recommended using localization
  for setting these attributes anyway. If you happened to use them, switch over
  to using the localization behavior (see the component's API docs).


## New features
* You can now bind popups to markers in `px-map-marker-group`. See the API
  docs for that component for a thorough guide to setting up your features
  with marker icons and popups. You can also see `examples/marker-clusters-with-popups.html`
  for an example of it in use.
* The `px-map` component had its `fitToMarkers` behavior majorly overhauled and
  improved. New configurations are now available to customize how the `fitToMarkers`
  event happens (`fitToMarkersZoom` and `fitToMarkersPadding`). See the API
  docs for details.
* A lot of new events were added

## Bug fixes
* Fixes an incorrect call to `addInst` when a component is cleaning itself up.
  This may speed things up a bit and stop a small memory leak.
* The `px-map` component `fitToMarkers` is much more consistent and should always
  fit the markers on the map.
* Documentation on all components has been significantly improved to show correct
  examples of how to use components.
* The `imgSrc` attribute on `px-map-popup-info` was sometimes not showing an
  image in the popup. That's fixed now.
* All markers are now smaller, to match the design specifications for Predix UI
  Maps components. This should make it easier to place many markers near each
  other on a map without having them overlap.

v1.0.3
==================
## Bug fixes
* Add missing semicolon that causes a failure after inlining script

v1.0.2
==================
## Bug fixes
* Fix lat/lng/zoom set and notification timing bugs, add tests to cover

v1.0.1
==================
## Bug fixes
* Well, that was quick. Small patch for some build-time requirements (deploy key
  and travis configuration).

v1.0.0
==================
## Introduction
This is the first release of the `px-map` components. The map components make it
easy to build an interactive map out of web components with simple, expressive
APIs.

The 1.0.0 release is the first opportunity for developers to start using the map
components. There are still some rough edges, open bugs, and improvements we'd
like to make. (Nothing is every truly done.) Feedback in the form of bugs,
comments, and feature requests is welcome. Please submit your feedback through
issues on the `px-map` Github repository:
https://github.com/predixdev/px-map/issues.

## New components in this release

This is our first public release, so every component is a new component.
(Woohoo.) Here's a list of all the sub-components available to build with. See
the `px-map` documentation pages (https://www.predix-ui.com/#/components/px-map/)
for more information on what these components do and how you can use them:

#### Core components
* px-map

#### Controls
* px-map-control-locate
* px-map-control-scale
* px-map-control-zoom

#### Overlays
* px-map-layer-group
* px-map-marker-group
* px-map-marker-locate
* px-map-marker-static
* px-map-marker-symbol

#### UI Elements
* px-map-popup-data
* px-map-popup-info

#### Base Layers
* px-map-tile-layer

## Browser support

The map components are built using new JavaScript language features (i.e. ES6
  syntax and new built-in types and addons). Out of the box, these features are
  not supported by Internet Explorer 11 or older, Safari 9 or older, and some
  other out-of-date browsers. (But they work great in new Chrome, Firefox, and
    Microsoft Edge versions. Give 'em a test drive.)

You'll have to transpile and bundle the map components as part of your build
process (e.g. with a transpilation plugin like babel as part of a webpack/browserify/etc.
bundle). We'll have more documentation coming soon to help you use off-the-shelf
tools like the Polymer CLI (https://www.polymer-project.org/1.0/docs/tools/polymer-cli)
to build and distribute your code. Using an optimized build lets you decide how
to tune your code for your users. It can also make things run much faster with
the right tuning.

Check back on the px-map documentation pages and the Github repository for more
information on preparing your code to run in production on older browsers.

## What's coming in future releases

See our Github issues page for more information about planned upcoming
enhancements and features. We also welcome contributions if your team builds
something that can be used by and shared with others.
