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

// total number of hops using test data
var totalHops = parseInt(tests.cwTr_hops) + parseInt(tests.owTr_hops) + parseInt(tests.eTr_hops);

// Initialize Map when page loads
function makeMap(){
    var map = '<div id="map"></div>'
    $( "#mapBox" ).append(map);

    // initiate map with master id of test and endpoint of test to display
    initMap(tests, "eEndISP");
}

// initiate map using google maps api
function initMap(dataToGenerate, endpoint) {
    // cali - cal speed app is based in california
    var cali = {lat: 36.77, lng: -119.4};

    // map loaded using google maps api
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: cali,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    // google maps api - marker
    var caMarker = new google.maps.Marker({
        position: {lat: parseFloat(dataToGenerate.NormalLAT), lng: parseFloat(dataToGenerate.NormalLONG)},
        map: map,
        title: 'caMarker'
    });

    // google maps api - information window
    // clicking the icon generates data for this test's data
    var caInfowindow = new google.maps.InfoWindow({
        // content string for california west coast
        content: "<div>Total Number of Hops: " + totalHops + "</div>"
        + "<i class='fa fa-mobile fa-5x' onclick='dataVizGenerator(tests);'></i>"
        + "<i class='material-icons' style='font-size:48px'>tablet_android</i>"
    });

    // display info pop-up of traceroute visualization
    caMarker.addListener('click', function() {
        caInfowindow.open(map, caMarker);
    });
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
     var locationID = dataToGenerate.LocationID ;
     */
}
