import React, {Component} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import MapSettings from './mapSettings';
import 'ol/ol.css';


class MapModule extends Component {
  constructor(props) {
    super(props);

    this.map = new Map({
      target: null,
      layers: [
        new TileLayer({
          source: new TileWMS(MapSettings.layers[0])
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
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

export default MapModule;



 
