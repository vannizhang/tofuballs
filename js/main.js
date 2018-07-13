$( document ).ready(function() {

    let map = null;
    let pointsLayer = null;

    const dataJsonFilePath = 'js/data.json?' + Date.now();

    //define values needed to initiate map object
    const mapInitOptions = {
        leafletOptions: {
            touchZoom: true, 
            zoomControl:false, 
            dragging: true, 
            attributionControl: false, 
            scrollWheelZoom: false, 
            doubleClickZoom: true
        },
        defaultCenter: [-33.8553, 18.4839],
        defaultZoom: 12
    };

    const initMap = (function(){
        map = L.map('map', mapInitOptions.leafletOptions).setView(mapInitOptions.defaultCenter, mapInitOptions.defaultZoom);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 16
        }).addTo(map);

        L.control.zoom({position: 'topright'}).addTo(map);
    })();

    const zoomToPointFeature =  function(d){
        pointsLayer.eachLayer(function(layer){
            if (layer.feature.properties.name === d) {
                layer.openPopup();
                map.setView(layer.getLatLng());
            } else {
                layer.closePopup();
            }
        });
    }

    function populatePoints(data){
        
        const pointMarkerOptions = {
            radius: 7,
            fillColor: "#247BA0",
            color: "white",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
        };

        const onEachFeature = function(feature, layer) {
            var content = '<div class="post-container">'+              
                '<div class="post-thumb"><img src="'+feature.properties.imglink+'"></div>'+
                '<div class="post-content">'+
                    '<p><b>' + feature.properties.name + '</b>'+'<br>' + feature.properties.content + '</p>'+
                '</div>'
    
            if (feature.properties) {
                layer.bindPopup(content);
            }
        }

        pointsLayer = L.geoJson(data,{
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, pointMarkerOptions);
            }
        }).addTo(map);

        zoomToPointFeature('Esri');
    }

    function populatePortfolio(data){
        const arrOfHtmlStrForPortfolioItems = data.map(function(d, i){
            const theme = i % 2 ? 'light' : 'drak';
            // let hrmlStr = `
            //     <div class="row project-item ${theme}">
            //         <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            
            //             <div class="project-info">
            //                 <h2><a href="${d.url}">${d.title}</a></h2>
            //                 <p>${d.description}</p>     
            //             </div>
            
            //             <div class="browser-mockup">
            //                 <a href="${d.url}"><img src="./assets/img/${d.screenshot}" alt="" style="width:100%;"></a>
            //             </div>
            //         </div>   
            //     </div>
            // `;
            const hrmlStr = "<div class=\"row project-item " + theme + "\"><div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\"><div class=\"project-info\"><h2><a href=\"" + d.url + "\">" + d.title + "</a></h2><p>" + d.description + "</p>     </div><div class=\"browser-mockup\"><a href=\"" + d.url + "\"><img src=\"./assets/img/" + d.screenshot + "\" alt=\"\" style=\"width:100%;\"></a></div></div></div>";
            return hrmlStr;
        });

        $('.portfolio-container').html(arrOfHtmlStrForPortfolioItems.join(''));
    }

    $.getJSON(dataJsonFilePath, function( data ) {
        populatePortfolio(data["portfolio-data"]);
        populatePoints(data["map-data"]);
    });

    $(".points-layer").on('mouseover', function(d){
        zoomToPointFeature($(this).attr('value'));
    });

    /* util functions */

        // jQuery to collapse the navbar on scroll
        function collapseNavbar() {
            if ($(".navbar").offset().top > 100) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        }

        $(window).scroll(collapseNavbar);

        collapseNavbar();

    /* End of util functions */
});