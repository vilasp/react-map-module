let  mapSettings = {
        layers : [
            {
                url: 'http://localhost/MapService/wms.axd/vmap0geonames',
                params: {
                    'LAYERS': ['Land','Coastlines','Bounds','Water','Cities','CityPolygons','CityNames','LargeCities','Geonames'], 
                    'TILED': true
                }
            }
        ],
        scaleBar : false
};

export default mapSettings;