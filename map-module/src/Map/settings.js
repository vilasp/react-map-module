export const ogcTypes = {
    "WMS" : "WMS"
}

let  mapSettings = {
        layers : [
            // WMS Tiled
            {
                type: ogcTypes.WMS,
                url: 'http://localhost/MapService/wms.axd/vmap0geonames',
                params: {
                    'LAYERS': ['Land','Coastlines','Bounds','Water','Geonames'], 
                    'TILED': true
                },
                groupID: 1
            },

            // WMS Tiled 2
            {
                url: 'http://localhost/MapService/wms.axd/vmap0geonames',
                params: {
                    'LAYERS': ['Cities','CityPolygons','CityNames','LargeCities'], 
                    'TILED': true
                },
                groupID: 2
            }
        ],
};

export default mapSettings;