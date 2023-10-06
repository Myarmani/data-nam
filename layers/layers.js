var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_YounesDouarFl_1 = new ol.format.GeoJSON();
var features_YounesDouarFl_1 = format_YounesDouarFl_1.readFeatures(json_YounesDouarFl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YounesDouarFl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YounesDouarFl_1.addFeatures(features_YounesDouarFl_1);
var lyr_YounesDouarFl_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YounesDouarFl_1, 
                style: style_YounesDouarFl_1,
                interactive: true,
                title: '<img src="styles/legend/YounesDouarFl_1.png" /> YounesDouarFl'
            });
var format_ProjetFLCNst_2 = new ol.format.GeoJSON();
var features_ProjetFLCNst_2 = format_ProjetFLCNst_2.readFeatures(json_ProjetFLCNst_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetFLCNst_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetFLCNst_2.addFeatures(features_ProjetFLCNst_2);
var lyr_ProjetFLCNst_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetFLCNst_2, 
                style: style_ProjetFLCNst_2,
                interactive: true,
                title: '<img src="styles/legend/ProjetFLCNst_2.png" /> ProjetFLCNst'
            });

lyr_GoogleMap_0.setVisible(true);lyr_YounesDouarFl_1.setVisible(true);lyr_ProjetFLCNst_2.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_YounesDouarFl_1,lyr_ProjetFLCNst_2];
lyr_YounesDouarFl_1.set('fieldAliases', {'id': 'id', 'nom_douar': 'nom_douar', 'id_S': 'id_S', });
lyr_ProjetFLCNst_2.set('fieldAliases', {'id': 'id', 'id_s': 'id_s', 'Avancement': 'Avancement', });
lyr_YounesDouarFl_1.set('fieldImages', {'id': 'TextEdit', 'nom_douar': 'TextEdit', 'id_S': '', });
lyr_ProjetFLCNst_2.set('fieldImages', {'id': '', 'id_s': '', 'Avancement': '', });
lyr_YounesDouarFl_1.set('fieldLabels', {'id': 'no label', 'nom_douar': 'no label', 'id_S': 'no label', });
lyr_ProjetFLCNst_2.set('fieldLabels', {'id': 'no label', 'id_s': 'no label', 'Avancement': 'no label', });
lyr_ProjetFLCNst_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});