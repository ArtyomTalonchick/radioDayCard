$(document).ready(function() {
   var svg = document.getElementById('svg-tanks');
   var tank = document.getElementById('tank');

   [...Array(5).keys()].forEach(i => {
       var tank_copy = tank.cloneNode(true);
       [...tank_copy.children].forEach(child => child.setAttribute('begin', `${i}s`))
       svg.appendChild(tank_copy);
   });

});

