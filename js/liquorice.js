var canvas = document.createElement("canvas");
canvas.style.backgroundColor = "green";
var ctx = canvas.getContext("webgl2");

function onWindowLoad() {
  document.body.style.backgroundColor = "black";
  document.body.append(canvas);
  onWindowResize();
}
window.addEventListener("load", onWindowLoad);

function onWindowResize() {
  canvas.width = document.width;
  canvas.height = document.height;
}
window.addEventListener("resize", onWindowResize);