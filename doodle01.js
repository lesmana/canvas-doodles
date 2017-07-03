'use strict';

var doodle = doodle || {};

(function(doodle) {

  var canvas;
  var context;
  
  function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    draw(0, 0);
    canvas.addEventListener('mousemove', onMouseMove);
  }

  function onMouseMove(evt) {
    var rect = canvas.getBoundingClientRect();
    var mousex = evt.clientX - rect.left;
    var mousey = evt.clientY - rect.top;
    draw(mousex, mousey);
  }

  function draw(mousex ,mousey) {
    context.clearRect(0, 0, 600, 600);
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 20; j++) {
        var x = i * 30 + 15;
        var y = j * 30 + 15;
        var dx = x - mousex;
        var dy = y - mousey
        var dist = Math.hypot(dx, dy);
        var radius = dist * 0.07;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.closePath();
      }
    }
  }

  doodle.init = init;

})(doodle);

