var wms_layers = [];

        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type': 'base',
            'opacity': 0.603000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });var lyr_Hillshade_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hillshade_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8997891.213600, 4096189.624000, -8461763.976700, 4775983.028400]
                            })
                        });var format_ACP2016_2 = new ol.format.GeoJSON();
var features_ACP2016_2 = format_ACP2016_2.readFeatures(json_ACP2016_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACP2016_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ACP2016_2.addFeatures(features_ACP2016_2);var lyr_ACP2016_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACP2016_2, 
                style: style_ACP2016_2,
                title: '<img src="styles/legend/ACP2016_2.png" /> ACP 2016'
            });var format_ACPvariations_3 = new ol.format.GeoJSON();
var features_ACPvariations_3 = format_ACPvariations_3.readFeatures(json_ACPvariations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACPvariations_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ACPvariations_3.addFeatures(features_ACPvariations_3);var lyr_ACPvariations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACPvariations_3, 
                style: style_ACPvariations_3,
                title: '<img src="styles/legend/ACPvariations_3.png" /> ACP variations'
            });

lyr_BaseMap_0.setVisible(true);lyr_Hillshade_1.setVisible(true);lyr_ACP2016_2.setVisible(true);lyr_ACPvariations_3.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Hillshade_1,lyr_ACP2016_2,lyr_ACPvariations_3];
lyr_ACP2016_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Length': 'Length', });
lyr_ACPvariations_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'DATASOURCE': 'DATASOURCE', 'Name2': 'Name2', 'Update_Rea': 'Update_Rea', 'Comment_': 'Comment_', 'Shape_STLe': 'Shape_STLe', });
lyr_ACP2016_2.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'Length': 'TextEdit', });
lyr_ACPvariations_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'DATASOURCE': 'TextEdit', 'Name2': 'TextEdit', 'Update_Rea': 'TextEdit', 'Comment_': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_ACP2016_2.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'Length': 'no label', });
lyr_ACPvariations_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'DATASOURCE': 'no label', 'Name2': 'no label', 'Update_Rea': 'no label', 'Comment_': 'no label', 'Shape_STLe': 'no label', });
lyr_ACPvariations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});