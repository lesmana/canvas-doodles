'use strict';

var doodle = doodle || {};

(function(doodle) {

  var canvas;
  var context;
  var tiles;
  
  function init() {
    initTiles();
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    draw();
    canvas.addEventListener('click', onClick);
  }
  
  function initTiles() {
    tiles = {}
    for (var i = 0; i < 20; i++) {
      tiles[i] = {}
      for (var j = 0; j < 20; j++) {
        tiles[i][j] = true;
      }
    }
  }

  function onClick(evt) {
    var rect = canvas.getBoundingClientRect();
    var mousex = evt.clientX - rect.left;
    var mousey = evt.clientY - rect.top;
    flipTile(mousex, mousey);
    draw();
  }
  
  function flipTile(x, y) {
    var tilex = Math.trunc(x / 30);
    var tiley = Math.trunc(y / 30);
    tiles[tilex][tiley] = !tiles[tilex][tiley];
  }

  function draw() {
    context.clearRect(0, 0, 600, 600);
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 20; j++) {
        var x = i * 30;
        var y = j * 30;
        var w = x + 30;
        var h = y + 30;
        context.lineWidth = 3;
        context.lineCap = 'square';
        context.beginPath();
        if (tiles[i][j]) {
          context.moveTo(x + 5, y);
          context.lineTo(x, y + 5);
          context.moveTo(x + 15, y);
          context.lineTo(x, y + 15);
          context.moveTo(x + 25, y);
          context.lineTo(x, y + 25);
          context.moveTo(w - 25, h);
          context.lineTo(w, h - 25);
          context.moveTo(w - 15, h);
          context.lineTo(w, h - 15);
          context.moveTo(w - 5, h);
          context.lineTo(w, h - 5);
        } else {
          context.moveTo(w - 5, y);
          context.lineTo(w, y + 5);
          context.moveTo(w - 15, y);
          context.lineTo(w, y + 15);
          context.moveTo(w - 25, y);
          context.lineTo(w, y + 25);
          context.moveTo(x + 25, h);
          context.lineTo(x, h - 25);
          context.moveTo(x + 15, h);
          context.lineTo(x, h - 15);
          context.moveTo(x + 5, h);
          context.lineTo(x, h - 5);
        }
        context.stroke();
        context.closePath();
      }
    }
  }

  doodle.init = init;

})(doodle);

