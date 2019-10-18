const DUR = 20;

$(document).ready(function() {
    var svg = document.getElementById('svg-caption');
    var airplane = svg.children[0];
    var caption = svg.children[1];
    airplane.firstElementChild.setAttribute('dur', `${DUR}s`);
    caption.firstElementChild.setAttribute('dur', `${DUR}s`);

    var delay = 0;
    [...'с днем войск связи'].forEach(letter => {
        if (letter !== ' ') {
            var airplane_copy = airplane.cloneNode(true);
            airplane_copy.firstElementChild.setAttribute('begin', `${delay}s`);
            svg.appendChild(airplane_copy);

            var caption_copy = caption.cloneNode(true);
            caption_copy.firstElementChild.setAttribute('begin', `${delay}s`);
            caption_copy.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./res/caption/_${letter}.png`);

            svg.appendChild(caption_copy);
            console.log(caption_copy);
        }
        delay++;
   });

});

