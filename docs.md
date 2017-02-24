# What's here

==============================================

## Components

### Map
* px-map

### Base Layers
* px-map-tile-layer

### Controls
* px-map-control-info
* px-map-control-zoom
* [NS] px-map-control-layer-picker
* [NS] px-map-control-legend
* [NS] px-map-control-geolocation

### Markers
* px-map-marker-group
* px-map-marker-static
* [NS] px-map-marker-icon
* [NS] px-map-marker-location

### Popups
* px-map-popup-info
* px-map-popup-data

### Misc.
* px-map-layer-group
* px-map-leaflet-import
  * px-map-leaflet-control-box.js

==============================================

## Behaviors

### Shared Behaviors
px-map-behavior-common

### Base Behaviors
px-map-behavior-element-base
  |-- px-map-behavior-layer-base
  |   |-- px-map-behavior-tile-layer
  |   |-- px-map-behavior-layer-group
  |   |-- px-map-behavior-marker-group
  |   |-- px-map-behavior-marker-base
  |     |-- px-map-behavior-marker-static
  |     |-- px-map-behavior-marker-icon
  |     |-- px-map-behavior-marker-location
  |   |-- px-map-popup-base
  |     |-- px-map-behavior-popup-info
  |     |-- px-map-behavior-popup-data  
  |     
  |-- px-map-behavior-control-base
      |-- px-map-behavior-control-info
      |-- px-map-behavior-control-zoom
      |-- px-map-behavior-control-layer-picker
      |-- px-map-behavior-control-legend
      |-- px-map-behavior-control-geolocation
