var canvas, ctx, flag = false;
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "white",
        y = 9;

function init()
{
  canvas = document.getElementById("digit");
  ctx = canvas.getContext("2d");
  canvas.height = 200;
  canvas.width = 200;
  w = canvas.width;
  h = canvas.height;

  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
  }, false);
  
}
function findxy(res, e) {
  if (res == 'down') {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;

      flag = true;
      dot_flag = true;
      if (dot_flag) {
          ctx.beginPath();
          ctx.fillStyle = x;
          ctx.fillRect(currX, currY, 2, 2);
          ctx.closePath();
          dot_flag = false;
      }
  }
  if (res == 'up' || res == "out") {
      flag = false;
  }
  if (res == 'move') {
      if (flag) {
          prevX = currX;
          prevY = currY;
          currX = e.clientX - canvas.offsetLeft;
          currY = e.clientY - canvas.offsetTop;
          draw();
      }
  }
}
function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

// function save() {
//   var dataURL = canvas.toDataURL();
//   var canvas2 = document.getElementById("show-digit");
//   var ctx2 = canvas2.getContext("2d");
//   var imagecp = new Image();
//   imagecp.src = dataURL;
//   ctx2.drawImage(canvas, 0 ,0);
// }

function erase() {
    var m = true;
    if (m) {
        ctx.clearRect(0, 0, w, h);
    }
}

init();