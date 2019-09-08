// @flow

import React, {Component} from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import TileImage from 'ol/source/TileImage';
import MapSettings, {OgcTypes} from './settings';
import { withSnackbar } from 'notistack';
import 'ol/ol.css';

type Props = {
  enqueueSnackbar: any
}

class Map extends Component<Props>  {

  map: OlMap = null;

  createMapLayerFromMetadata(layerMetadata: Object): TileImage{

    switch(layerMetadata.type)
    {
      case OgcTypes.WMS:
        return new TileWMS((({ url, params }) => ({url , params}))(layerMetadata));
      default:
          this.props.enqueueSnackbar(`Failed to load data for service ${layerMetadata.url}`, { 
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          });
    }

    return null;
  }

  getTileLayersFromSettings(): Array<TileImage>{
    return MapSettings.layers.map( layer => new TileLayer({ source : this.createMapLayerFromMetadata(layer)}))
  }

  constructor(props: Object) {
    super(props);

    this.map = new OlMap({
      target: null,
      layers: this.getTileLayersFromSettings(),
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

export default withSnackbar(Map);



 
