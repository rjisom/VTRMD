function dataVizGenerator(calSpeedData) {
    // clear landing area
    $("#visualizationLanding").html("");
    // for cw server
    var cwWest = "<h1 style='color:white'>California West Data: </h1>";
    $("#visualizationLanding").append(cwWest);
    for (i = 0; i < calSpeedData.cwStartHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwStartISP +"'><span class='tooltiptext'>"
            + calSpeedData.cwStartISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }

    //$("#visualizationLanding").append("<div edge='edge'></div>");

    for (i = 0; i < calSpeedData.cwTnHops1; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP1 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP1 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }

    for (i = 0; i < calSpeedData.cwTnHops2; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP2 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP2 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops3; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP3 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP3 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops4; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP4 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP4 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops5; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP5 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP5 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops6; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP6 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP6 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops7; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP7 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP7 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops8; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP8 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP8 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops9; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP9 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnISP9 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwTnHops10; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwTnISP10 +"'><span class='tooltiptext'>"
            + calSpeedData.cwTnHops10 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.cwEndHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.cwEndISP +"'><span class='tooltiptext'>"
            + calSpeedData.cwEndISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }

    // for east coast server
    var eastTitle = "<br><h1 style='color:white'>East Coast Data: </h1>";
    $("#visualizationLanding").append(eastTitle);
    for (i = 0; i < calSpeedData.eStartHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eStartISP +"'><span class='tooltiptext'>"
            + calSpeedData.eStartISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops1; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP1 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP1 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops2; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP2 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP2 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops3; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP3 +"'><span class='tooltiptext'>"
            + calSpeedData.cwEndISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops4; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP4 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP4 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops5; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP5 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP5 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops6; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP6 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP6 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops7; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP7 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP7 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops8; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP6 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP6 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops9; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP9 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP9 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eTnHops10; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eTnISP10 +"'><span class='tooltiptext'>"
            + calSpeedData.eTnISP10 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.eEndHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.eEndISP +"'><span class='tooltiptext'>"
            + calSpeedData.eEndISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }

    // for ow server
    var owTitle = "<br><h1 style='color:white'>Oregon West Data: </h1>";
    $("#visualizationLanding").append(owTitle);
    for (i = 0; i < calSpeedData.owStartHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owStartISP +"'><span class='tooltiptext'>"
            + calSpeedData.owStartISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops1; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP1 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP1 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops2; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP2 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP2 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops3; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP3 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP3 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops4; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP4 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP4 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops5; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP5 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP5 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops6; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP6 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP6 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops7; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP7 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP7 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops8; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP8 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP8 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops9; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP9 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP9 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owTnHops10; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owTnISP10 +"'><span class='tooltiptext'>"
            + calSpeedData.owTnISP10 + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
    for (i = 0; i < calSpeedData.owEndHops; i++) {
        var isp = "<div class='tooltip' isp='" + calSpeedData.owEndISP +"'><span class='tooltiptext'>"
            + calSpeedData.owEndISP + "</span></div>";
        $("#visualizationLanding").append(isp);
    }
}
