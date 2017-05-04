var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

var fps = 20;
var block_dimension = 10;

var boundaries = {
  left: 0,
  up: 0,
  right: canvas.width - block_dimension,
  down: canvas.height - block_dimension
};

var food = {
  x: 100,
  y: 110
}

var snek = {
  head: {
    x: 300,
    y: 300
  },
  body: [],
  dx: 0,
  dy: 0
};

snek.run = function() {
  update();
}

function end() {
  snek.dx = 0;
  snek.dy = 0;
  clearInterval(snek._intervalId);
  init();
}

window.addEventListener('keydown', keyDown, false);

function keyDown(e) {
  if (e.keyCode === 37) {
    snek.dx = -10;
    snek.dy = 0;
  }
  if (e.keyCode === 38) {
    snek.dx = 0;
    snek.dy = -10;
  }
  if (e.keyCode === 39) {
    snek.dx = 10;
    snek.dy = 0;
  }
  if (e.keyCode === 40) {
    snek.dx = 0;
    snek.dy = 10;
  }
}

function init() {
  snek._intervalId = setInterval(snek.run, 1000 / fps);
  console.log('called');
  snek.head.x = 300,
  snek.head.y = 300;
  ctx.clearRect(0, 0, 600, 600);
  ctx.fillStyle = "red";
  ctx.fillRect(snek.head.x, snek.head.y, 10, 10);
  ctx.fillStyle = "white";
  ctx.fillRect(food.x, food.y, 10, 10);
  ctx.stroke();
}

function update() {
  if (snek.head.x >= boundaries.left && snek.head.y >= boundaries.up
    && snek.head.x <= boundaries.right && snek.head.y <= boundaries.down) {

    var posx = snek.head.x + snek.dx;
    var posy = snek.head.y + snek.dy;
    snek.head.x += snek.dx;
    snek.head.y += snek.dy;
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "red";
    ctx.fillRect(posx, posy, block_dimension, block_dimension);
    ctx.fillStyle = "white";
    ctx.fillRect(food.x, food.y, 10, 10);

  } else {
    end();
  }
}

init();
