var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext('2d');

var dx = 5;
var dy = 5;

var snek = {
  head: {
    x: 0,
    y: 0
  },
  body: []
};

//ctx.beginPath();
//ctx.lineWidth = "1";
//ctx.strokeStyle = "red";

//ctx.fillRect(0,0,20,20);
//ctx.stroke();

window.addEventListener('keydown', keyDown, false);

function keyDown(e) {
  if (e.keyCode === 37) {
    if (snek.head.x > 0) {
      //update();
    }
  }
  if (e.keyCode === 38) {
    if (snek.head.y > 0) {;
      //update();
    }
  }
  if (e.keyCode === 39) {
    if (snek.head.x <= 780) {
      console.log(snek.head.x);
      //update();
    }
  }
  if (e.keyCode === 40) {
    if (snek.head.y <= 780) {
      //update();
    }
  }
}

function init() {
  ctx.clearRect(0, 0, 800, 800);
  ctx.fillStyle = "red";
  ctx.fillRect(snek.head.x, snek.head.y, 20, 20);
  //ctx.beginPath();
  //ctx.lineWidth = "1";
  //ctx.strokeStyle = "red";
  //ctx.fillStyle = "red";
  ctx.stroke();
}


function tick() {
  while (true) {
    console.log('hey');
    //setTimeout(update(), 2000);
  }
}


function update() {
  //requestAnimationFrame(update);
  ctx.clearRect(0, 0, 800, 800);
  ctx.fillRect(snek.head.x + dx, snek.head.y + dy, 20, 20);
}

init();
tick();
