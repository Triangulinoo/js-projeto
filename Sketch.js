function setup() {
  createCanvas(400,400);
  background(" red " );
}

function draw () {
  stroke(" black");
  fill(" blue");

  if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
  }
  
}
