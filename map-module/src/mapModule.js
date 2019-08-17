import React, {Component} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';


class MapModule extends Component {
  constructor(props) {
    super(props);

    this.map = new Map({
      target: null,
      layers: [
        new TileLayer({
          extent: [-13884991, 2870341, -7455066, 6338219],
          source: new TileWMS({
            url: 'http://localhost/MapService/wms.axd/vmap0',
            params: {'LAYERS': 'Land', 'TILED': true},
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
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
    return <div id="mapContainer" style={{ width: "100%", height: "360px" }}></div>
  }
}

export default MapModule;



 
