/* * DUMMY TEST DATA * * */
var tests = {
    "Master_ID": "1657",
    "Tester": "Tester 4",
    "LocationID": "1208",
    "Date": "2016-10-24 00:00:00",
    "Time": "16:07:38",
    "Provider": "AT&T",
    "Operator": "AT&T",
    "Network": "LTE",
    "DeviceType": "Phone",
    "NormalLAT": "36.80071098",
    "NormalLONG": "-121.6647037",
    "cwTr_hops": "10",
    "cwStartISP": "AT&T Wireless",
    "cwStartHops": "3",
    "cwStartRTT": "84.68638",
    "cwTnISP1": "AT&T Services",
    "cwTnHops1": "3",
    "cwTnRTT1": "130.221450",
    "cwTnISP2": "*",
    "cwTnHops2": "2",
    "cwTnRTT2": "*",
    "cwTnISP3": "NA",
    "cwTnHops3": "NA",
    "cwTnRTT3": "NA",
    "cwTnISP4": "NA",
    "cwTnHops4": "NA",
    "cwTnRTT4": "NA",
    "cwTnISP5": "NA",
    "cwTnHops5": "NA",
    "cwTnRTT5": "NA",
    "cwTnISP6": "NA",
    "cwTnHops6": "NA",
    "cwTnRTT6": "NA",
    "cwTnISP7": "NA",
    "cwTnHops7": "NA",
    "cwTnRTT7": "NA",
    "cwTnISP8": "NA",
    "cwTnHops8": "NA",
    "cwTnRTT8": "NA",
    "cwTnISP9": "NA",
    "cwTnHops9": "NA",
    "cwTnRTT9": "NA",
    "cwTnISP10": "NA",
    "cwTnHops10": "NA",
    "cwTnRTT10": "NA",
    "cwEndISP": "Amazon",
    "cwEndHops": "2",
    "cwEndRTT": "4332.003000",
    "eTr_hops": "20",
    "eStartISP": "AT&T Wireless",
    "eStartHops": "3",
    "eStartRTT": "123.466250",
    "eTnISP1": "AT&T Services",
    "eTnHops1": "4",
    "eTnRTT1": "153.99016",
    "eTnISP2": "*",
    "eTnHops2": "4",
    "eTnRTT2": "*",
    "eTnISP3": "NA",
    "eTnHops3": "NA",
    "eTnRTT3": "NA",
    "eTnISP4": "NA",
    "eTnHops4": "NA",
    "eTnRTT4": "NA",
    "eTnISP5": "NA",
    "eTnHops5": "NA",
    "eTnRTT5": "NA",
    "eTnISP6": "NA",
    "eTnHops6": "NA",
    "eTnRTT6": "NA",
    "eTnISP7": "NA",
    "eTnHops7": "NA",
    "eTnRTT7": "NA",
    "eTnISP8": "NA",
    "eTnHops8": "NA",
    "eTnRTT8": "NA",
    "eTnISP9": "NA",
    "eTnHops9": "NA",
    "eTnRTT9": "NA",
    "eTnISP10": "NA",
    "eTnHops10": "NA",
    "eTnRTT10": "NA",
    "eEndISP": "Amazon",
    "eEndHops": "9",
    "eEndRTT": "185.05026",
    "owTr_hops": "19",
    "owStartISP": "AT&T Wireless",
    "owStartHops": "3",
    "owStartRTT": "102.193750",
    "owTnISP1": "AT&T Services",
    "owTnHops1": "3",
    "owTnRTT1": "120.32313",
    "owTnISP2": "*",
    "owTnHops2": "3",
    "owTnRTT2": "*",
    "owTnISP3": "NA",
    "owTnHops3": "NA",
    "owTnRTT3": "NA",
    "owTnISP4": "NA",
    "owTnHops4": "NA",
    "owTnRTT4": "NA",
    "owTnISP5": "NA",
    "owTnHops5": "NA",
    "owTnRTT5": "NA",
    "owTnISP6": "NA",
    "owTnHops6": "NA",
    "owTnRTT6": "NA",
    "owTnISP7": "NA",
    "owTnHops7": "NA",
    "owTnRTT7": "NA",
    "owTnISP8": "NA",
    "owTnHops8": "NA",
    "owTnRTT8": "NA",
    "owTnISP9": "NA",
    "owTnHops9": "NA",
    "owTnRTT9": "NA",
    "owTnISP10": "NA",
    "owTnHops10": "NA",
    "owTnRTT10": "NA",
    "owEndISP": "Amazon",
    "owEndHops": "10",
    "owEndRTT": "136.26958"
}
/* * * */


// Initialize Map when page loads
function pageLoad(){
    var map = '<div id="map"></div>'
    $( "body" ).append(map);

    // initiate map with master id of test and endpoint of test to display
    initMap(tests, "eEndISP");
}

// initiate map using google maps api
function initMap(dataToGenerate, endpoint) {
    // cali - cal speed app is based in california
    var cali = {lat: 36.77, lng: -119.4};

    // map loaded using google maps api
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: cali
    });

    if(endpoint === "eEndISP" ) {

        // google maps api - marker
        var caMarker = new google.maps.Marker({
            position: {lat: parseFloat(dataToGenerate.NormalLAT), lng: parseFloat(dataToGenerate.NormalLONG)},
            map: map,
            title: 'caMarker'
        });

        // google maps api - information window
        var caInfowindow = new google.maps.InfoWindow({
            // content string for california west coast
            content: "<div isp='" + dataToGenerate.cwStartISP +"'  >Start: " + dataToGenerate.cwStartISP
            + "</div><div isp='" + dataToGenerate.cwTnISP1 +"'  >ISP 1: " + dataToGenerate.cwTnISP1
            + "</div><div isp='" + dataToGenerate.cwTnISP2 +"'  >ISP 2: " + dataToGenerate.cwTnISP2
            + "</div><div isp='" + dataToGenerate.cwTnISP3 +"'  >ISP 3: " + dataToGenerate.cwTnISP3
            + "</div><div isp='" + dataToGenerate.cwTnISP4 +"'  >ISP 4: " + dataToGenerate.cwTnISP4
            + "</div><div isp='" + dataToGenerate.cwTnISP5 +"'  >ISP 5: " + dataToGenerate.cwTnISP5
            + "</div><div isp='" + dataToGenerate.cwTnISP6 +"'  >ISP 6: " + dataToGenerate.cwTnISP6
            + "</div><div isp='" + dataToGenerate.cwTnISP7 +"'  >ISP 7: " + dataToGenerate.cwTnISP7
            + "</div><div isp='" + dataToGenerate.cwTnISP8 +"'  > ISP 8: " + dataToGenerate.cwTnISP8
            + "</div><div isp='" + dataToGenerate.cwTnISP9 +"'  > ISP 9: " + dataToGenerate.cwTnISP9
            + "</div><div isp='" + dataToGenerate.cwTnISP10 +"'  > ISP 10: " + dataToGenerate.cwTnISP10
            + "</div><div isp='" + dataToGenerate.cwEndISP +"'  > End: " + dataToGenerate.cwEndISP
            + "</div>"
        });

        // Amazon east coast server pinged for test
        var cwEndMarker = new google.maps.Marker({
            position: {lat: 37.339, lng:-121.895},
            map: map,
            title: 'cwEndMarker'
        });

        // google maps api - info window
        var cwEndInfo = new google.maps.InfoWindow({
            content: "<div numberOfHops='" + dataToGenerate.cwTr_hops +"'  >Number of Hops: " + dataToGenerate.cwTr_hops
            + "</div>"
        });

        // display info pop-up of traceroute visualization
        caMarker.addListener('click', function() {
            caInfowindow.open(map, caMarker);
        });

        // display end point info pop-up of data
        cwEndMarker.addListener('click', function() {
            cwEndInfo.open(map, cwEndMarker);
        });
    }

    // for east coast data
    if(endpoint === "eEndISP" ){

        // google maps api - marker
        var eMarker = new google.maps.Marker({
            position: {lat: parseFloat(dataToGenerate.NormalLAT), lng: parseFloat(dataToGenerate.NormalLONG)},
            map: map,
            title: 'eMarker'
        });

        // Amazon east coast server pinged for test
        var eEndMarker = new google.maps.Marker({
            position: {lat: 39.044, lng:-77.488},
            map: map,
            title: 'eEndMarker'
        });

        // google maps api - information window
        var eInfowindow = new google.maps.InfoWindow({
            // content string for east coast
            content: "<div isp='" + dataToGenerate.eStartISP +"'  >Start: " + dataToGenerate.eStartISP
            + "</div><div isp='" + dataToGenerate.eTnISP1 +"'  >ISP 1: " + dataToGenerate.eTnISP1
            + "</div><div isp='" + dataToGenerate.eTnISP2 +"'  >ISP 2: " + dataToGenerate.eTnISP2
            + "</div><div isp='" + dataToGenerate.eTnISP3 +"'  >ISP 3: " + dataToGenerate.eTnISP3
            + "</div><div isp='" + dataToGenerate.eTnISP4 +"'  >ISP 4: " + dataToGenerate.eTnISP4
            + "</div><div isp='" + dataToGenerate.eTnISP5 +"'  >ISP 5: " + dataToGenerate.eTnISP5
            + "</div><div isp='" + dataToGenerate.eTnISP6 +"'  >ISP 6: " + dataToGenerate.eTnISP6
            + "</div><div isp='" + dataToGenerate.eTnISP7 +"'  >ISP 7: " + dataToGenerate.eTnISP7
            + "</div><div isp='" + dataToGenerate.eTnISP8 +"'  > ISP 8: " + dataToGenerate.eTnISP8
            + "</div><div isp='" + dataToGenerate.eTnISP9 +"'  > ISP 9: " + dataToGenerate.eTnISP9
            + "</div><div isp='" + dataToGenerate.eTnISP10 +"'  > ISP 10: " + dataToGenerate.eTnISP10
            + "</div><div isp='" + dataToGenerate.eEndISP +"'  > End: " + dataToGenerate.eEndISP
            + "</div>"
        });

        // make marker clickable
        eMarker.addListener('click', function() {
            eInfowindow.open(map, eMarker);
        });

    }
    if(endpoint === "owEndISP" ){

        // google maps api - marker
        var owMarker = new google.maps.Marker({
            position: {lat: parseFloat(dataToGenerate.NormalLAT), lng: parseFloat(dataToGenerate.NormalLONG)},
            map: map,
            title: 'owMarker'
        });

        // Amazon oregon west coast server pinged for test
        var owEndMarker = new google.maps.Marker({
            position: {lat: 45.84, lng:-119.701},
            map: map,
            title: 'owEndMarker'
        });

        // google maps api - information window
        var owInfowindow = new google.maps.InfoWindow({
            // content string for oregon west
            content: "<div isp='" + dataToGenerate.owStartISP +"'  >Start: " + dataToGenerate.owStartISP
            + "</div><div isp='" + dataToGenerate.owTnISP1 +"'  >ISP 1: " + dataToGenerate.owTnISP1
            + "</div><div isp='" + dataToGenerate.owTnISP2 +"'  >ISP 2: " + dataToGenerate.owTnISP2
            + "</div><div isp='" + dataToGenerate.owTnISP3 +"'  >ISP 3: " + dataToGenerate.owTnISP3
            + "</div><div isp='" + dataToGenerate.owTnISP4 +"'  >ISP 4: " + dataToGenerate.owTnISP4
            + "</div><div isp='" + dataToGenerate.owTnISP5 +"'  >ISP 5: " + dataToGenerate.owTnISP5
            + "</div><div isp='" + dataToGenerate.owTnISP6 +"'  >ISP 6: " + dataToGenerate.owTnISP6
            + "</div><div isp='" + dataToGenerate.owTnISP7 +"'  >ISP 7: " + dataToGenerate.owTnISP7
            + "</div><div isp='" + dataToGenerate.owTnISP8 +"'  > ISP 8: " + dataToGenerate.owTnISP8
            + "</div><div isp='" + dataToGenerate.owTnISP9 +"'  > ISP 9: " + dataToGenerate.owTnISP9
            + "</div><div isp='" + dataToGenerate.owTnISP10 +"'  > ISP 10: " + dataToGenerate.owTnISP10
            + "</div><div isp='" + dataToGenerate.owEndISP +"'  > End: " + dataToGenerate.owEndISP
            + "</div>"
        });

        // make marker clickable
        owMarker.addListener('click', function() {
            owInfowindow.open(map, owMarker);
        });

        $("div").onclick(function(){
            $(this).css("background-color", "yellow");
        }, function(){
            $(this).css("background-color", "pink");
        });
    }
    // content of pop-ip window
    //var contentString = '<div id="content">'+
    //    '<img src="img/r2.jpg"</img>'
    //'</div>';

    // pop-up for displaying data on map


    // test1
    // google maps api for displaying markers on map

    /*
     //test2
     var marker2 = new google.maps.Marker({
     position: {lat: tests.test2.position.lat, lng: tests.test2.position.lng},
     map: map,
     title: 'test2'
     });
     var infowindow2 = new google.maps.InfoWindow({
     content: "Start: " + tests.test2.firstISP.toString() + " Second ISP: " + tests.test2.secondISP.toString() +
     " ThirdISP: " + tests.test2.firstISP.toString()
     });
     marker2.addListener('click', function() {
     infowindow2.open(map, marker2);
     });

     //test3
     var marker3 = new google.maps.Marker({
     position: {lat: tests.test3.position.lat, lng: tests.test3.position.lng},
     map: map,
     title: 'test3'
     });
     var infowindow3= new google.maps.InfoWindow({
     content: "Start: " + tests.test3.firstISP.toString() + " Second ISP: " + tests.test3.secondISP.toString() +
     " ThirdISP: " + tests.test3.firstISP.toString()
     });
     marker3.addListener('click', function() {
     infowindow3.open(map, marker3);
     });
     */
}
/*
 visualizationGenerator()
 Input: Takes a json object and creates a visualization by Master_ID
 */
function visualizationGenerator(dataToGenerate, endpoint) {
    /*
     var att_services = "AT&T Services";
     var att_wireless = "AT&T Wireless";
     var amazon = "Amazon";
     */
}