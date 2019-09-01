import React, {Component} from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import MapSettings from './settings';
import 'ol/ol.css';


class Map extends Component {
  constructor(props) {
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
    return <div id="mapContainer" style={{ width: "100%", height: "100%" }}></div>
  }
}

export default Map;



 
