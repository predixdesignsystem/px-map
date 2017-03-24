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
* Well, that was quick. Small patch for some build-time requirements (deploy key and travis configuration).

v1.0.0
==================
## Introduction
This is the first release of the `px-map` components. The map components make it easy to build an interactive map out of web components with simple, expressive APIs.

The 1.0.0 release is the first opportunity for developers to start using the map components. There are still some rough edges, open bugs, and improvements we'd like to make. (Nothing is every truly done.) Feedback in the form of bugs, comments, and feature requests is welcome. Please submit your feedback through issues on the `px-map` Github repository: https://github.com/predixdev/px-map/issues.

## New components in this release

This is our first public release, so every component is a new component. (Woohoo.) Here's a list of all the sub-components available to build with. See the `px-map` documentation pages (https://www.predix-ui.com/#/components/px-map/) for more information on what these components do and how you can use them:

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

The map components are built using new JavaScript language features (i.e. ES6 syntax and new built-in types and addons). Out of the box, these features are not supported by Internet Explorer 11 or older, Safari 9 or older, and some other out-of-date browsers. (But they work great in new Chrome, Firefox, and Microsoft Edge versions. Give 'em a test drive.)

You'll have to transpile and bundle the map components as part of your build process (e.g. with a transpilation plugin like babel as part of a webpack/browserify/etc. bundle). We'll have more documentation coming soon to help you use off-the-shelf tools like the Polymer CLI (https://www.polymer-project.org/1.0/docs/tools/polymer-cli) to build and distribute your code. Using an optimized build lets you decide how to tune your code for your users. It can also make things run much faster with the right tuning.

Check back on the px-map documentation pages and the Github repository for more information on preparing your code to run in production on older browsers.

## What's coming in future releases

See our Github issues page for more information about planned upcoming enhancements and features. We also welcome contributions if your team builds something that can be used by and shared with others.
