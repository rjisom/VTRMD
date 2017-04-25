function dataVizGenerator(calSpeedData) {
    // clear landing area
    $("#visualizationLanding").html("");
    // for cw server
    var cwWest = "<h1 #=''>California West Data: </h1><div></div>";
    $("#visualizationLanding").append(cwWest);
    for (i = 0; i < calSpeedData.cwStartHops; i++) {
        var isp = "<div isp='" + calSpeedData.cwStartISP +"'>" + calSpeedData.cwStartISP + "</div>";
        $("#visualizationLanding").append(isp);
    }

    for (i = 0; i < calSpeedData.cwTnHops1; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP1 +"'>" + calSpeedData.cwTnISP1 + "</div>";
        $("#visualizationLanding").append(isp);
    }

    for (i = 0; i < calSpeedData.cwTnHops2; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP2 +"'>" + calSpeedData.cwTnISP2 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops3; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP3 +"'>" + calSpeedData.cwTnISP3 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops4; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP4 +"'>" + calSpeedData.cwTnISP4 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops5; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP5 +"'>" + calSpeedData.cwTnISP5 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops6; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP6 +"'>" + calSpeedData.cwTnISP6 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops7; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP7 +"'>" + calSpeedData.cwTnISP7 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops8; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP8 +"'>" + calSpeedData.cwTnISP8 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops9; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP9 +"'>" + calSpeedData.cwTnISP9 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops10; i++) {
        var isp = "<div isp='" + calSpeedData.cwTnISP10 +"'>" + calSpeedData.cwTnISP10 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eEndHops; i++) {
        var isp = "<div isp='" + calSpeedData.eEndISP +"'>" + calSpeedData.eEndISP + "</div>";
        $("#visualizationLanding").append(isp);
    }

    // for east coast server
    var eastTitle = "<br><h1 #=''>East Coast Data: </h1><br>";
    $("#visualizationLanding").append(eastTitle);
    for (i = 0; i < calSpeedData.eStartHops; i++) {
        var isp = "<div isp='" + calSpeedData.eStartISP +"'>" + calSpeedData.eStartISP + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops1; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP1 +"'>" + calSpeedData.eTnISP1 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops2; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP2 +"'>" + calSpeedData.eTnISP2 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops3; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP3 +"'>" + calSpeedData.eTnISP3 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops4; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP3 +"'>" + calSpeedData.eTnISP4 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops5; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP5 +"'>" + calSpeedData.eTnISP5 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops6; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP6 +"'>" + calSpeedData.eTnISP6 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops7; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP7 +"'>" + calSpeedData.eTnISP7 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops8; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP6 +"'>" + calSpeedData.eTnISP6 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops9; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP9 +"'>" + calSpeedData.eTnISP9 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops10; i++) {
        var isp = "<div isp='" + calSpeedData.eTnISP10 +"'>" + calSpeedData.eTnISP10 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eEndHops; i++) {
        var isp = "<div isp='" + calSpeedData.eEndISP +"'>" + calSpeedData.eEndISP + "</div>";
        $("#visualizationLanding").append(isp);
    }

    // for ow server
    var owTitle = "<br><h1 #=''>Oregon West Data: </h1><br>";
    $("#visualizationLanding").append(owTitle);
    for (i = 0; i < calSpeedData.owStartHops; i++) {
        var isp = "<div isp='" + calSpeedData.owStartISP +"'>" + calSpeedData.owStartISP + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops1; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP1 +"'>" + calSpeedData.owTnISP1 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops2; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP2 +"'>" + calSpeedData.owTnISP2 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops3; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP3 +"'>" + calSpeedData.owTnISP3 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops4; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP4 +"'>" + calSpeedData.owTnISP4 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops5; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP5 +"'>" + calSpeedData.owTnISP5 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops6; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP6 +"'>" + calSpeedData.owTnISP6 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops7; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP7 +"'>" + calSpeedData.owTnISP7 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops8; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP8 +"'>" + calSpeedData.owTnISP8 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops9; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP9 +"'>" + calSpeedData.owTnISP9 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops10; i++) {
        var isp = "<div isp='" + calSpeedData.owTnISP10 +"'>" + calSpeedData.owTnISP10 + "</div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eEndHops; i++) {
        var isp = "<div isp='" + calSpeedData.eEndISP +"'>" + calSpeedData.eEndISP + "</div>";
        $("#visualizationLanding").append(isp);
    }
}
