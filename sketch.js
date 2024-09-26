function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("blue");
    fill("rgb(187,95,95");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  