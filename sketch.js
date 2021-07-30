let r, g, b; 

function setup() {
  createCanvas(500,500);
  background(0);
  smooth();
  noStroke();
  frameRate(10);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  fill(0, 40);
  //rect(0, 0, width, height);
  
  stroke(r, g, b);
  smooth();
  circle(random(width), random(height), random(30));
}