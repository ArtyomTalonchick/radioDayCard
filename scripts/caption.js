$(document).ready(function() {
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var mainDiv = document.getElementById('main-div');
    var fullCaption = document.getElementById('caption');
    var svg = document.getElementById('svg-caption');
    if(isIE || isEdge){
        mainDiv.removeChild(svg);
    } else {
        mainDiv.removeChild(fullCaption);
    }

});

