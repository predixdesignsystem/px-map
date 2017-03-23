# px-map



## Overview

`px-map` is aightweight framework for building interactive maps using Polymer web components. [Read more and see API documentation on the Predix UI website](https://www.predix-ui.com/#/components/px-map).

The framework includes `px-map`, a base mapping component that can be extended by and controls a variety of subcomponents that display geospatial data, offer controls for the user, and accomplish other common mapping tasks. Below is a simple example with little configuration that will display a map centered on Tokyo, Japan:

```
<px-map lat="35.6895" lng="139.6917" zoom="12">
  <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
</px-map>
```

Maps can be extended with a variety of attributes and also by passing subcomponents into the tag. We can extend the map above by changing how the map initially draws in its container, and by placing an overlay layer with markers showing interesting landmarks in Tokyo:

```
<px-map lat="35.6895" lng="139.6917" zoom="15" flex-to-size fit-to-markers>
  <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
  <px-map-layer-group name="Landmarks">
    <px-map-marker-static lat="35.6763976" lng="35.6763976">
      <px-map-popup-info title="Meiji Jingu" description="Shinto shrine dedicated to the Emperor Meiji and Empress Shoken."></px-map-popup-info>
    </px-map-marker-static>
    <px-map-marker-static lat="35.6654861" lng="139.7706668">
      <px-map-popup-info title="Tsukiji Market" description="Sprawling wholesale fish market with an array of seafood & viewing areas for a popular tuna auction."></px-map-popup-info>
    </px-map-marker-static>
  </px-map-layer-group>
</px-map>
```

See the subcomponents' API documentation pages for more information on possible options and configurations.

### What's provided

The following pieces are provided by `px-map` and its subcomponents:

- **Base map**: Orchestrates tile layers, overlay layers, and interactive controls
- **Tile layers**: Display mapping tiles showing geography or other information
- **Layer groups**: Display interactive geospatial data on top of the map tiles
- **UI components**: Display markers, circles, polygons, and other representations of data on the map
- **Controls**: Offer a variety of user controls to manipulate the map and explore its data


### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

## Getting Started

First, install the component via bower on the command line.

```
bower install px-map --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-map/px-map.html" />
<link rel="import" href="/bower_components/px-map/px-map-tile-layer.html" />
```

Finally, use the component in your application:

```
<px-map lat="35.6895" lng="139.6917" zoom="12">
  <px-map-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></px-map-tile-layer>
</px-map>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://www.predix-ui.com/#/components/px-map).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-map/issues) to submit any bugs you might find.
