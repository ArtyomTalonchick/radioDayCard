$(document).ready(function() {
   var svg = document.getElementById('svg-caption');
   var airplane = document.getElementById('airplane');
   var caption = document.getElementById('caption');

   var delay = 0;
   [...Array(12).keys()].forEach(i => {
       var airplane_copy = airplane.cloneNode(true);
       airplane_copy.firstElementChild.setAttribute('begin', `${delay}s`);
       svg.appendChild(airplane_copy);

       var caption_copy = caption.cloneNode(true);
       caption_copy.firstElementChild.setAttribute('begin', `${delay}s`);
       caption_copy.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./res/caption/_${i+1}.png`)
       svg.appendChild(caption_copy);

        if(delay === 0 || delay === 5){
            delay += 2;
        } else {
            delay++;
        }
   });

});

