
// Initialize Map when page loads
function pageLoad(){
    var map = '<div id="map"></div>'
    $( "body" ).append(map);
    initMap();
}


/* * DUMMY TEST DATA * * */
/*
    TODO:
    This was taken from a json dump on a php page, must be formatted as callback object from backend, 
    not sure what objects are being spit out, not connected to server, yet.
*/
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



// initiate map using google maps api
function initMap() {
    // cali - cal speed app is based in california
    var cali = {lat: 36.77, lng: -119.4};

    // map loaded using google maps api
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: cali
    });

    // content of pop-ip window
    //var contentString = '<div id="content">'+
    //    '<img src="img/r2.jpg"</img>'
    //'</div>';

    // pop-up for displaying data on map


    // test1
    // google maps api for displaying markers on map
    var marker1 = new google.maps.Marker({
        position: {lat: parseFloat(tests.NormalLAT), lng: parseFloat(tests.NormalLONG)},
        map: map,
        title: 'test1'
    });
    var infowindow1 = new google.maps.InfoWindow({
        content: "<div isp='" + tests.cwStartISP +"'  >Start: " + tests.cwStartISP
        + "</div><div isp='" + tests.cwTnISP1 +"'  >ISP 1: " + tests.cwTnISP1
        + "</div><div isp='" + tests.cwTnISP2 +"'  >ISP 2: " + tests.cwTnISP2
        + "</div><div isp='" + tests.cwTnISP3 +"'  >ISP 3: " + tests.cwTnISP3
        + "</div><div isp='" + tests.cwTnISP4 +"'  >ISP 4: " + tests.cwTnISP4
        + "</div><div isp='" + tests.cwTnISP5 +"'  >ISP 5: " + tests.cwTnISP5
        + "</div><div isp='" + tests.cwTnISP6 +"'  >ISP 6: " + tests.cwTnISP6
        + "</div><div isp='" + tests.cwTnISP7 +"'  >ISP 7: " + tests.cwTnISP7
        + "</div><div isp='" + tests.cwTnISP8 +"'  > ISP 8: " + tests.cwTnISP8
        + "</div><div isp='" + tests.cwTnISP9 +"'  > ISP 9: " + tests.cwTnISP9
        + "</div><div isp='" + tests.cwTnISP10 +"'  > ISP 10: " + tests.cwTnISP10
        + "</div><div isp='" + tests.cwEndISP +"'  > End: " + tests.cwEndISP
        + "</div>"
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });

    /* TEST MARKERS */
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
