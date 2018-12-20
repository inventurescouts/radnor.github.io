var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_Clippedextent_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (extent)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedextent_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9664139.837759, 4306500.732260, -9660571.791519, 4310528.047637]
                            })
                        });var format_Contourfine_1 = new ol.format.GeoJSON();
var features_Contourfine_1 = format_Contourfine_1.readFeatures(json_Contourfine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contourfine_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Contourfine_1.addFeatures(features_Contourfine_1);var lyr_Contourfine_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contourfine_1, maxResolution:4.76075924588,

                style: style_Contourfine_1,
                title: '<img src="styles/legend/Contourfine_1.png" /> Contourfine'
            });var format_Contour_2 = new ol.format.GeoJSON();
var features_Contour_2 = format_Contour_2.readFeatures(json_Contour_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Contour_2.addFeatures(features_Contour_2);var lyr_Contour_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contour_2, 
                style: style_Contour_2,
                title: '<img src="styles/legend/Contour_2.png" /> Contour'
            });var format_lake_3 = new ol.format.GeoJSON();
var features_lake_3 = format_lake_3.readFeatures(json_lake_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lake_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lake_3.addFeatures(features_lake_3);var lyr_lake_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lake_3, 
                style: style_lake_3,
                title: '<img src="styles/legend/lake_3.png" /> lake'
            });var format_RadnorTrails_4 = new ol.format.GeoJSON();
var features_RadnorTrails_4 = format_RadnorTrails_4.readFeatures(json_RadnorTrails_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadnorTrails_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RadnorTrails_4.addFeatures(features_RadnorTrails_4);var lyr_RadnorTrails_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RadnorTrails_4, 
                style: style_RadnorTrails_4,
                title: '<img src="styles/legend/RadnorTrails_4.png" /> Radnor Trails'
            });var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Road_5.addFeatures(features_Road_5);var lyr_Road_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                title: '<img src="styles/legend/Road_5.png" /> Road'
            });var format_OtterCreekRd154_6 = new ol.format.GeoJSON();
var features_OtterCreekRd154_6 = format_OtterCreekRd154_6.readFeatures(json_OtterCreekRd154_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtterCreekRd154_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OtterCreekRd154_6.addFeatures(features_OtterCreekRd154_6);var lyr_OtterCreekRd154_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtterCreekRd154_6, 
                style: style_OtterCreekRd154_6,
                title: '<img src="styles/legend/OtterCreekRd154_6.png" /> Otter Creek Rd (1.54)'
            });var format_HallDrive032_7 = new ol.format.GeoJSON();
var features_HallDrive032_7 = format_HallDrive032_7.readFeatures(json_HallDrive032_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HallDrive032_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HallDrive032_7.addFeatures(features_HallDrive032_7);var lyr_HallDrive032_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HallDrive032_7, 
                style: style_HallDrive032_7,
                title: '<img src="styles/legend/HallDrive032_7.png" /> Hall Drive (0.32)'
            });var format_AccessTrail027_8 = new ol.format.GeoJSON();
var features_AccessTrail027_8 = format_AccessTrail027_8.readFeatures(json_AccessTrail027_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccessTrail027_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AccessTrail027_8.addFeatures(features_AccessTrail027_8);var lyr_AccessTrail027_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccessTrail027_8, 
                style: style_AccessTrail027_8,
                title: '<img src="styles/legend/AccessTrail027_8.png" /> Access Trail (0.27)'
            });var format_DamWalkway024_9 = new ol.format.GeoJSON();
var features_DamWalkway024_9 = format_DamWalkway024_9.readFeatures(json_DamWalkway024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamWalkway024_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DamWalkway024_9.addFeatures(features_DamWalkway024_9);var lyr_DamWalkway024_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DamWalkway024_9, 
                style: style_DamWalkway024_9,
                title: '<img src="styles/legend/DamWalkway024_9.png" /> Dam Walkway (0.24)'
            });var format_GanierRidgeTrail185_10 = new ol.format.GeoJSON();
var features_GanierRidgeTrail185_10 = format_GanierRidgeTrail185_10.readFeatures(json_GanierRidgeTrail185_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GanierRidgeTrail185_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GanierRidgeTrail185_10.addFeatures(features_GanierRidgeTrail185_10);var lyr_GanierRidgeTrail185_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GanierRidgeTrail185_10, 
                style: style_GanierRidgeTrail185_10,
                title: '<img src="styles/legend/GanierRidgeTrail185_10.png" /> Ganier Ridge Trail (1.85)'
            });var format_LakeTrail155_11 = new ol.format.GeoJSON();
var features_LakeTrail155_11 = format_LakeTrail155_11.readFeatures(json_LakeTrail155_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakeTrail155_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LakeTrail155_11.addFeatures(features_LakeTrail155_11);var lyr_LakeTrail155_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LakeTrail155_11, 
                style: style_LakeTrail155_11,
                title: '<img src="styles/legend/LakeTrail155_11.png" /> Lake Trail (1.55)'
            });var format_SouthTrailsConnector008_12 = new ol.format.GeoJSON();
var features_SouthTrailsConnector008_12 = format_SouthTrailsConnector008_12.readFeatures(json_SouthTrailsConnector008_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthTrailsConnector008_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthTrailsConnector008_12.addFeatures(features_SouthTrailsConnector008_12);var lyr_SouthTrailsConnector008_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthTrailsConnector008_12, 
                style: style_SouthTrailsConnector008_12,
                title: '<img src="styles/legend/SouthTrailsConnector008_12.png" /> South Trails Connector (0.08)'
            });var format_SouthCoveTrail153_13 = new ol.format.GeoJSON();
var features_SouthCoveTrail153_13 = format_SouthCoveTrail153_13.readFeatures(json_SouthCoveTrail153_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthCoveTrail153_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthCoveTrail153_13.addFeatures(features_SouthCoveTrail153_13);var lyr_SouthCoveTrail153_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthCoveTrail153_13, 
                style: style_SouthCoveTrail153_13,
                title: '<img src="styles/legend/SouthCoveTrail153_13.png" /> South Cove Trail (1.53)'
            });var format_SouthLakeTrail090_14 = new ol.format.GeoJSON();
var features_SouthLakeTrail090_14 = format_SouthLakeTrail090_14.readFeatures(json_SouthLakeTrail090_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthLakeTrail090_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthLakeTrail090_14.addFeatures(features_SouthLakeTrail090_14);var lyr_SouthLakeTrail090_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthLakeTrail090_14, 
                style: style_SouthLakeTrail090_14,
                title: '<img src="styles/legend/SouthLakeTrail090_14.png" /> South Lake Trail (0.90)'
            });var format_SouthTrailsAccess011_15 = new ol.format.GeoJSON();
var features_SouthTrailsAccess011_15 = format_SouthTrailsAccess011_15.readFeatures(json_SouthTrailsAccess011_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthTrailsAccess011_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthTrailsAccess011_15.addFeatures(features_SouthTrailsAccess011_15);var lyr_SouthTrailsAccess011_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthTrailsAccess011_15, 
                style: style_SouthTrailsAccess011_15,
                title: '<img src="styles/legend/SouthTrailsAccess011_15.png" /> South Trails Access  (0.11)'
            });var format_SpillwayTrail025_16 = new ol.format.GeoJSON();
var features_SpillwayTrail025_16 = format_SpillwayTrail025_16.readFeatures(json_SpillwayTrail025_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpillwayTrail025_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SpillwayTrail025_16.addFeatures(features_SpillwayTrail025_16);var lyr_SpillwayTrail025_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpillwayTrail025_16, 
                style: style_SpillwayTrail025_16,
                title: '<img src="styles/legend/SpillwayTrail025_16.png" /> Spillway Trail (0.25)'
            });var format_ValveHouseTrail015_17 = new ol.format.GeoJSON();
var features_ValveHouseTrail015_17 = format_ValveHouseTrail015_17.readFeatures(json_ValveHouseTrail015_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValveHouseTrail015_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ValveHouseTrail015_17.addFeatures(features_ValveHouseTrail015_17);var lyr_ValveHouseTrail015_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ValveHouseTrail015_17, 
                style: style_ValveHouseTrail015_17,
                title: '<img src="styles/legend/ValveHouseTrail015_17.png" /> Valve House Trail (0.15)'
            });var format_WestVisitorTrailAccesstracksany_18 = new ol.format.GeoJSON();
var features_WestVisitorTrailAccesstracksany_18 = format_WestVisitorTrailAccesstracksany_18.readFeatures(json_WestVisitorTrailAccesstracksany_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestVisitorTrailAccesstracksany_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WestVisitorTrailAccesstracksany_18.addFeatures(features_WestVisitorTrailAccesstracksany_18);var lyr_WestVisitorTrailAccesstracksany_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestVisitorTrailAccesstracksany_18, 
                style: style_WestVisitorTrailAccesstracksany_18,
                title: '<img src="styles/legend/WestVisitorTrailAccesstracksany_18.png" /> West Visitor Trail Access tracks any'
            });var format_EducationCenter_19 = new ol.format.GeoJSON();
var features_EducationCenter_19 = format_EducationCenter_19.readFeatures(json_EducationCenter_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducationCenter_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EducationCenter_19.addFeatures(features_EducationCenter_19);var lyr_EducationCenter_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EducationCenter_19, 
                style: style_EducationCenter_19,
                title: '<img src="styles/legend/EducationCenter_19.png" /> Education Center'
            });var format_VisitorCenter_20 = new ol.format.GeoJSON();
var features_VisitorCenter_20 = format_VisitorCenter_20.readFeatures(json_VisitorCenter_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VisitorCenter_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VisitorCenter_20.addFeatures(features_VisitorCenter_20);var lyr_VisitorCenter_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VisitorCenter_20, 
                style: style_VisitorCenter_20,
                title: '<img src="styles/legend/VisitorCenter_20.png" /> Visitor Center'
            });var format_ParkingLot_21 = new ol.format.GeoJSON();
var features_ParkingLot_21 = format_ParkingLot_21.readFeatures(json_ParkingLot_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingLot_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParkingLot_21.addFeatures(features_ParkingLot_21);var lyr_ParkingLot_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParkingLot_21, 
                style: style_ParkingLot_21,
                title: '<img src="styles/legend/ParkingLot_21.png" /> Parking Lot'
            });var format_Pictures_22 = new ol.format.GeoJSON();
var features_Pictures_22 = format_Pictures_22.readFeatures(json_Pictures_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pictures_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pictures_22.addFeatures(features_Pictures_22);var lyr_Pictures_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pictures_22, 
                style: style_Pictures_22,
                title: '<img src="styles/legend/Pictures_22.png" /> Pictures'
            });

lyr_Clippedextent_0.setVisible(true);lyr_Contourfine_1.setVisible(true);lyr_Contour_2.setVisible(true);lyr_lake_3.setVisible(true);lyr_RadnorTrails_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_OtterCreekRd154_6.setVisible(true);lyr_HallDrive032_7.setVisible(true);lyr_AccessTrail027_8.setVisible(true);lyr_DamWalkway024_9.setVisible(true);lyr_GanierRidgeTrail185_10.setVisible(true);lyr_LakeTrail155_11.setVisible(true);lyr_SouthTrailsConnector008_12.setVisible(true);lyr_SouthCoveTrail153_13.setVisible(true);lyr_SouthLakeTrail090_14.setVisible(true);lyr_SouthTrailsAccess011_15.setVisible(true);lyr_SpillwayTrail025_16.setVisible(true);lyr_ValveHouseTrail015_17.setVisible(true);lyr_WestVisitorTrailAccesstracksany_18.setVisible(true);lyr_EducationCenter_19.setVisible(true);lyr_VisitorCenter_20.setVisible(true);lyr_ParkingLot_21.setVisible(true);lyr_Pictures_22.setVisible(true);
var layersList = [baseLayer,lyr_Clippedextent_0,lyr_Contourfine_1,lyr_Contour_2,lyr_lake_3,lyr_RadnorTrails_4,lyr_Road_5,lyr_OtterCreekRd154_6,lyr_HallDrive032_7,lyr_AccessTrail027_8,lyr_DamWalkway024_9,lyr_GanierRidgeTrail185_10,lyr_LakeTrail155_11,lyr_SouthTrailsConnector008_12,lyr_SouthCoveTrail153_13,lyr_SouthLakeTrail090_14,lyr_SouthTrailsAccess011_15,lyr_SpillwayTrail025_16,lyr_ValveHouseTrail015_17,lyr_WestVisitorTrailAccesstracksany_18,lyr_EducationCenter_19,lyr_VisitorCenter_20,lyr_ParkingLot_21,lyr_Pictures_22];
lyr_Contourfine_1.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Contour_2.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'Elevfeet': 'Elevfeet', });
lyr_lake_3.set('fieldAliases', {'qc_id': 'qc_id', 'lake2': 'lake2', });
lyr_RadnorTrails_4.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Road_5.set('fieldAliases', {'qc_id': 'qc_id', 'otter1': 'otter1', });
lyr_OtterCreekRd154_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_HallDrive032_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_AccessTrail027_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_DamWalkway024_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_GanierRidgeTrail185_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_LakeTrail155_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthTrailsConnector008_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthCoveTrail153_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthLakeTrail090_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthTrailsAccess011_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SpillwayTrail025_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_ValveHouseTrail015_17.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_WestVisitorTrailAccesstracksany_18.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_EducationCenter_19.set('fieldAliases', {'qc_id': 'qc_id', 'education': 'education', });
lyr_VisitorCenter_20.set('fieldAliases', {'qc_id': 'qc_id', 'visitor ce': 'visitor ce', });
lyr_ParkingLot_21.set('fieldAliases', {'qc_id': 'qc_id', 'parking': 'parking', });
lyr_Pictures_22.set('fieldAliases', {'Name': 'Name', 'Camera Model': 'Camera Model', 'Azimuth': 'Azimuth', 'Lon': 'Lon', 'Date': 'Date', 'Time': 'Time', 'ID': 'ID', 'North': 'North', 'Path': 'Path', 'Lat': 'Lat', 'Camera Maker': 'Camera Maker', 'Altitude': 'Altitude', });
lyr_Contourfine_1.set('fieldImages', {'ID': 'Hidden', 'ELEV': 'Hidden', });
lyr_Contour_2.set('fieldImages', {'ID': 'Hidden', 'ELEV': 'Hidden', 'Elevfeet': 'Hidden', });
lyr_lake_3.set('fieldImages', {'qc_id': 'Hidden', 'lake2': 'Hidden', });
lyr_RadnorTrails_4.set('fieldImages', {'qc_id': 'Hidden', 'name': 'Hidden', 'symbol': 'Hidden', 'number': 'Hidden', 'comment': 'Hidden', 'description': 'Hidden', 'source': 'Hidden', 'url': 'Hidden', 'url name': 'Hidden', });
lyr_Road_5.set('fieldImages', {'qc_id': 'Hidden', 'otter1': 'Hidden', });
lyr_OtterCreekRd154_6.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_HallDrive032_7.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_AccessTrail027_8.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_DamWalkway024_9.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_GanierRidgeTrail185_10.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_LakeTrail155_11.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthTrailsConnector008_12.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthCoveTrail153_13.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthLakeTrail090_14.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthTrailsAccess011_15.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SpillwayTrail025_16.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_ValveHouseTrail015_17.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_WestVisitorTrailAccesstracksany_18.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_EducationCenter_19.set('fieldImages', {'qc_id': 'TextEdit', 'education': 'TextEdit', });
lyr_VisitorCenter_20.set('fieldImages', {'qc_id': 'TextEdit', 'visitor ce': 'TextEdit', });
lyr_ParkingLot_21.set('fieldImages', {'qc_id': 'TextEdit', 'parking': 'TextEdit', });
lyr_Pictures_22.set('fieldImages', {'Name': 'Hidden', 'Camera Model': 'Hidden', 'Azimuth': 'Hidden', 'Lon': 'Hidden', 'Date': 'Hidden', 'Time': 'Hidden', 'ID': 'Hidden', 'North': 'Hidden', 'Path': 'Photo', 'Lat': 'Hidden', 'Camera Maker': 'Hidden', 'Altitude': 'Hidden', });
lyr_Contourfine_1.set('fieldLabels', {});
lyr_Contour_2.set('fieldLabels', {});
lyr_lake_3.set('fieldLabels', {});
lyr_RadnorTrails_4.set('fieldLabels', {});
lyr_Road_5.set('fieldLabels', {});
lyr_OtterCreekRd154_6.set('fieldLabels', {});
lyr_HallDrive032_7.set('fieldLabels', {});
lyr_AccessTrail027_8.set('fieldLabels', {});
lyr_DamWalkway024_9.set('fieldLabels', {});
lyr_GanierRidgeTrail185_10.set('fieldLabels', {});
lyr_LakeTrail155_11.set('fieldLabels', {});
lyr_SouthTrailsConnector008_12.set('fieldLabels', {});
lyr_SouthCoveTrail153_13.set('fieldLabels', {});
lyr_SouthLakeTrail090_14.set('fieldLabels', {});
lyr_SouthTrailsAccess011_15.set('fieldLabels', {});
lyr_SpillwayTrail025_16.set('fieldLabels', {});
lyr_ValveHouseTrail015_17.set('fieldLabels', {});
lyr_WestVisitorTrailAccesstracksany_18.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_EducationCenter_19.set('fieldLabels', {'qc_id': 'no label', 'education': 'no label', });
lyr_VisitorCenter_20.set('fieldLabels', {'qc_id': 'no label', 'visitor ce': 'no label', });
lyr_ParkingLot_21.set('fieldLabels', {'qc_id': 'no label', 'parking': 'no label', });
lyr_Pictures_22.set('fieldLabels', {'Path': 'no label', });
lyr_Pictures_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});