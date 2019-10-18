$(document).ready(function() {
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var mainDiv = document.getElementById('main-div');
    var fullCaption = document.getElementById('caption');
    var svg = document.getElementById('svg-caption');
    if(isIE){
        mainDiv.removeChild(svg);
    } else {
        mainDiv.removeChild(fullCaption);
    }

});

