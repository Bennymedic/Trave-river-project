var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gauge_catchment_1 = new ol.format.GeoJSON();
var features_gauge_catchment_1 = format_gauge_catchment_1.readFeatures(json_gauge_catchment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gauge_catchment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gauge_catchment_1.addFeatures(features_gauge_catchment_1);
var lyr_gauge_catchment_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gauge_catchment_1, 
                style: style_gauge_catchment_1,
                interactive: true,
                title: '<img src="styles/legend/gauge_catchment_1.png" /> gauge_catchment'
            });
var lyr_dx_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "dx",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dx_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346430, 7109318.385557, 1186976.899304, 7180430.079589]
                            })
                        });
var lyr_dy_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dy_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346430, 7109318.385557, 1186976.899304, 7180430.079589]
                            })
                        });
var lyr_discharge_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "discharge",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/discharge_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346494, 7109318.385493, 1186976.899309, 7180430.079588]
                            })
                        });
var lyr_depth_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "depth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/depth_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346494, 7109318.385493, 1186976.899309, 7180430.079588]
                            })
                        });
var format_Channel_6 = new ol.format.GeoJSON();
var features_Channel_6 = format_Channel_6.readFeatures(json_Channel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channel_6.addFeatures(features_Channel_6);
var lyr_Channel_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channel_6, 
                style: style_Channel_6,
                interactive: true,
    title: 'Channel<br />\
    <img src="styles/legend/Channel_6_0.png" /> 5<br />\
    <img src="styles/legend/Channel_6_1.png" /> 6<br />\
    <img src="styles/legend/Channel_6_2.png" /> 7<br />\
    <img src="styles/legend/Channel_6_3.png" /> 8<br />\
    <img src="styles/legend/Channel_6_4.png" /> 9<br />\
    <img src="styles/legend/Channel_6_5.png" /> 10<br />\
    <img src="styles/legend/Channel_6_6.png" /> <br />'
        });
var lyr_Aspect_catchment_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Aspect_catchment",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aspect_catchment_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346430, 7109318.385557, 1186976.899304, 7180430.079589]
                            })
                        });
var lyr_Slope_catchment_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope_catchment",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_catchment_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346430, 7109318.385557, 1186976.899304, 7180430.079589]
                            })
                        });
var lyr_clipped_mask_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "clipped_mask",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/clipped_mask_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1132848.346494, 7109318.385493, 1186976.899309, 7180430.079588]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_gauge_catchment_1.setVisible(true);lyr_dx_2.setVisible(true);lyr_dy_3.setVisible(true);lyr_discharge_4.setVisible(true);lyr_depth_5.setVisible(true);lyr_Channel_6.setVisible(true);lyr_Aspect_catchment_7.setVisible(true);lyr_Slope_catchment_8.setVisible(true);lyr_clipped_mask_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gauge_catchment_1,lyr_dx_2,lyr_dy_3,lyr_discharge_4,lyr_depth_5,lyr_Channel_6,lyr_Aspect_catchment_7,lyr_Slope_catchment_8,lyr_clipped_mask_9];
lyr_gauge_catchment_1.set('fieldAliases', {'DN': 'DN', });
lyr_Channel_6.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_gauge_catchment_1.set('fieldImages', {'DN': 'Range', });
lyr_Channel_6.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_gauge_catchment_1.set('fieldLabels', {'DN': 'no label', });
lyr_Channel_6.set('fieldLabels', {'SEGMENT_ID': 'header label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_Channel_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});