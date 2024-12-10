let circleColours = ['blue', 'white', 'red', 'orange'];
let index = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(50, 350, 50, 10);
  slider.position (10, 410);
  slider.size(80);
}

function draw() {
  let sliderVal = slider.value();
  background(10);

//fill(255, 0, 0, 60);

  fill(255, 0, 0, 100);
  circle(sliderVal, sliderVal, 50);

  fill(0, 255, 0, 100);
  circle(400 - sliderVal, sliderVal, 50);

  fill(0, 0, 255, 100);
  circle(sliderVal, height/2, 50);

  fill(255, 0, 255, 100);
  circle(width/2,sliderVal, 50);
  //orna circles below

  fill(0, 255, 255, 100);
  circle(sliderVal, 400-sliderVal, 50);
  //circle(width/2, height/2, 50); // 

  fill(255, 255, 0, 100);
  circle(400-sliderVal, height/2, 50);

  fill(255, 0, 0, 100);
  circle(400-sliderVal, 400-sliderVal, 50);

  fill(0, 255, 0, 100);
  circle(400-sliderVal, 400-sliderVal, 50);

  fill(255, 0, 255, 100);
  circle(width/2, 400-sliderVal, 50);
}

function mousePressed(){
  index++;
  if(index >= circleColours.length){
    index = 0;
  }
}
