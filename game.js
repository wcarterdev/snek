var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

var fps = 10;
var block_dimension = 10;

var snek = {
  head: {
    x: 250,
    y: 250
  },
  body: [],
  dx: 0,
  dy: 0
};

snek.run = function() {
  update();
}

window.addEventListener('keydown', keyDown, false);

function keyDown(e) {
  if (e.keyCode === 37) {
    if (snek.head.x > 0) {
      snek.dx = -10;
      snek.dy = 0;
    }
  }
  if (e.keyCode === 38) {
    if (snek.head.y > 0) {;
      snek.dx = 0;
      snek.dy = -10;
    }
  }
  if (e.keyCode === 39) {
    if (snek.head.x < canvas.width - block_dimension) {
      snek.dx = 10;
      snek.dy = 0;
    }
  }
  if (e.keyCode === 40) {
    if (snek.head.y < canvas.height - block_dimension) {
      snek.dx = 0;
      snek.dy = 10;
    }
  }
}

function init() {
  ctx.clearRect(0, 0, 800, 800);
  ctx.fillStyle = "red";
  ctx.fillRect(snek.head.x, snek.head.y, 10, 10);
  ctx.stroke();
}

function update() {
  var posx = snek.head.x + snek.dx;
  var posy = snek.head.y + snek.dy;
  snek.head.x += snek.dx;
  snek.head.y += snek.dy;
  ctx.clearRect(0, 0, 800, 800);
  ctx.fillStyle = "red";
  ctx.fillRect(posx, posy, block_dimension, block_dimension);
}

setInterval(snek.run, 1000 / fps);

init();