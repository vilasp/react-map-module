// @flow

import React, {Component} from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import TileImage from 'ol/source/TileImage';
import {MapSettings, ogcTypes} from './settings';
import 'ol/ol.css';


class Map extends Component<{}>  {

let map: Object = {};

 createMapLayerFromMetadata(layerMetadata: Object): TileImage{

    // WMS
    switch(layerMetadata.type)
    {
      case ogcTypes.WMS:
        return new TileWMS(layerMetadata) 
    }
    return 4;
  }

  getMapsFromSettings(){

    var layers = [];
    var settingsLayers = MapSettings.layers;

    var mapLayer = this.createMapLayerFromMetadata(7);


  }

  constructor(props: Object) {
    super(props);

    this.map = new OlMap({
      target: null,
      layers: [
        new TileLayer({
          source: new TileWMS(MapSettings.layers[0])
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 1
      })
    });
  }

  componentDidMount() {
    this.map.setTarget("mapContainer");
  }

  render()  {
    return <div id="mapContainer"></div>
  }
}

export default Map;



 
