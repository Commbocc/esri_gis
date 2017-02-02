// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare", "jimu/BaseWidget"], function(b, c) {
    return b([c], {
        baseClass: "jimu-widget-demo",
        postCreate: function() {
            this.inherited(arguments);
            console.log("postCreate");
        },
        startup: function() {
            this.inherited(arguments);
            this.widgetManager.maximizeWidget(this);
            $( "#accordion" ).accordion({
                heightStyle:    "content",
                 active: false,
                 collapsible: true,
                activate: function( event, ui ) {
                var id =  ui.newHeader[0].id;
                    zoomToFeature(id);
                }
            });
//            $( "#accordion" ).click( function() {
//                alert(this.id);
//            });
            loadProjects();
            console.log("startup");
        },
        onOpen: function() {
            console.log("onOpen");
        },
        onClose: function() {
            console.log("onClose");
        },
        onMinimize: function() {
            console.log("onMinimize");
        },
        onMaximize: function() {
            console.log("onMaximize");
        },
        onSignIn: function(a) {
            console.log("onSignIn");
        },
        onSignOut: function() {
            console.log("onSignOut");
        },
        showVertexCount: function(a) {
            this.vertexCount.innerHTML = "The vertex count is: " + a;
        }
    });
});
function loadProjects(){
    require(["esri/tasks/QueryTask", "esri/tasks/query"], function(QueryTask, Query) {
        var qtProjects = new QueryTask("https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/FY17PlannedResurfacing/MapServer/0");
        var qProjects = new Query();
        qProjects.returnGeometry = false;
        qProjects.outFields = ["*"];
        qProjects.where = '1 = 1';
        qtProjects.execute(qProjects, function(result) {
                  processSelection(result);
          });
        
        function processSelection(result) {
            var projects = [];
            var sortByString = "";
            result.features.forEach(function (att){
                var item = att.attributes;
                // Remove direction from street string to sort better
                var street = item.STREET;
                if(street.substring(1, 2) === ' '){
                    sortByString = street.slice(2,street.length-1);
                } else {
                    sortByString = street;
                }
                projects.push({sortBy: sortByString, id:item.OBJECTID, street:item.STREET, project:item.Project, from:item.FRSTNM, to:item.TOSTNM });
            });
            var sortedArray = projects.sortBy('sortBy');       
            var content = '';
            sortedArray.forEach(function(project){
                content = '<h3 id="' + project.id + '">' + project.street + '</h3>';
                      content += '<div>';
                      content += 'Project: ' + project.project  + '<br>';
                      content += 'From ' + project.from + " to " + project.to;
                      content += '</div>';
                      $('#accordion').append(content);
                      $("#accordion").accordion( "refresh" );
            });
        }
    });
    }
    Array.prototype.sortBy = function(p) {
        return this.slice(0).sort(function(a,b) {
          return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
    };
    function zoomToFeature(id) {
            require(["esri/tasks/QueryTask", "esri/tasks/query", "esri/symbols/SimpleLineSymbol","esri/Color","esri/graphic"], function(QueryTask, Query, SimpleLineSymbol, Color, graphic) {
                    var qtProjects = new QueryTask("https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/FY17PlannedResurfacing/MapServer/0");
                    var qProjects = new Query();
                    qProjects.returnGeometry = true;
                    qProjects.outFields = ["*"];
                    qProjects.outSpatialReference = Map.spatialReference; 
                    qProjects.where = 'OBJECTID = ' + id;
                    qtProjects.execute(qProjects, function(result) {
                        var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH,
			new Color([255, 0, 0]), 7);
                        var line = new graphic(result.features[0].geometry,symbol,"");
                        var extent = result.features[0].geometry.getExtent();
                        Map.graphics.clear();
                        Map.graphics.add(line);
                        Map.setExtent(extent.expand(2));
                    });
            });
        }