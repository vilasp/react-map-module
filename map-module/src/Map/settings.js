export const OgcTypes = {
    "WMS" : "WMS",
    "Error" : "Error"
}

let MapSettings = {
        layers : [
            // WMS Tiled
            {
                type: OgcTypes.WMS,
                url: 'http://localhost/MapService/wms.axd/vmap0geonames',
                params: {
                    'LAYERS': ['Land','Coastlines','Bounds','Water','Geonames'], 
                    'TILED': true
                },
                groupID: 1
            },

            // WMS Tiled 2
            {
                type: OgcTypes.Error,
                url: 'http://localhost/MapService/wms.axd/vmap0geonames',
                params: {
                    'LAYERS': ['Cities','CityPolygons','CityNames','LargeCities'], 
                    'TILED': true
                },
                groupID: 2
            }
        ],
};

export default MapSettings;