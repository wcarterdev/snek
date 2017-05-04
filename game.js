var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext('2d');

var posx = 0;
var posy = 0;

ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.fillRect(0,0,20,20);
ctx.stroke();

window.addEventListener('keydown', keyDown, false);

function keyDown(e) {
  if (e.keyCode === 37) {
    if (posx > 0) {
      posx = posx - 20;
      update();
    }
  }
  if (e.keyCode === 38) {
    if (posy > 0) {
      posy = posy - 20;
      update();
    }
  }
  if (e.keyCode === 39) {
    if (posx < 780) {
      posx = posx + 20;
      update();
    }
  }
  if (e.keyCode === 40) {
    if (posy < 780) {
      posy = posy + 20;
      update();
    }
  }
}

function update() {
  console.log(posx);
  console.log(posy);

  ctx.clearRect(0, 0, 800, 800);
  ctx.fillRect(posx,posy,20,20);
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.stroke();
}
