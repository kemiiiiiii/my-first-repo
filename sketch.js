let circleColours = ['blue', 'white', 'red', 'orange'];
let index = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 350, 55, 10);
  slider.position (10, 10);
  slider.size(80);
}

function draw() {
  let sliderVal = slider.value();
  background(10);
  fill(circleColours[index]);
  circle(sliderVal, sliderVal, 50);
  circle(400 - sliderVal, sliderVal, 50);
  circle(sliderVal, height/2, 50);
  circle(width/2,sliderVal, 50);
}

function mousePressed(){
  index++;
  if(index >= circleColours.length){
    index = 0;
  }
}
