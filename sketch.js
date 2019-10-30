//Baby, I'm here to slay, even if I'm a beginner

// Setting my variables
// Canvas
var canvas;
var canvasColor;
// Headers
var h1;
var h2;
var h3;
// Sliders
var sliderDimention;
var sliderWeight;
// Textual input
var typeInHere;
var mantra;


function preload() {}


function setup() {
  // Creating a canvas, setting the dimention, the position and the initial color
  canvas = createCanvas(1300, 550);
  canvas.position(70, 70);
  canvasColor = color(240, 128, 128);

  /* Here I can change the canvas color passing over with my mouse
  I'm calling the changeColor function, defined down*/
  canvas.mouseOver(changeCanvasColor);

  // Creating my indications
  h1 = createElement(h1, 'Slide to change text size');
  h1.position((windowWidth / 2) + 70, windowHeight - 80);
  h1.style('font-size: 20px');

  h2 = createElement(h2, 'Slide to change text weight');
  h2.position((windowWidth / 2) - 200, windowHeight - 80);
  h2.style('font-size: 20px');

  h3 = createElement(h3, 'Slide Your Text —>');
  h3.position(70, 25);
  h3.style('font-weight: bold');
  h3.style('font-size: 30px');

  // Creating the input to type your text in
  mantra = createP('shine bright');
  typeInHere = createInput('type here your mantra');
  mantra.position(100, 80);
  typeInHere.position(350, 35);

  // Creating my two sliders
  sliderDimention = createSlider(10, 200, 10);
  sliderWeight = createSlider(100, 900, 100);
  sliderDimention.position((windowWidth / 2) + 70, windowHeight - 50);
  sliderWeight.position((windowWidth / 2) - 200, windowHeight - 50);

  // Setting changes in input
  typeInHere.input(updateTextContent);
  sliderDimention.input(changeTextSize);
  sliderWeight.input(changeTextWeight);
}


function changeTextSize() {
  // Function to change font size
  mantra.style("font-size", sliderDimention.value() + "pt");
}


function changeTextWeight() {
  // Function to change font color
  mantra.style("font-weight", sliderWeight.value());
}


function updateTextContent() {
  // Function to update content
  mantra.html(typeInHere.value());
}


function draw() {
  // Setting my initial color
  background(canvasColor);
}


function mousePressed() {
  // Changing my text to make it funnier
  h1.html("Does size matter?");
  h1.position((windowWidth / 2) + 70, windowHeight - 80);

  h2.html("Enjoy a thick life!");
  h2.position((windowWidth / 2) - 200, windowHeight - 80);

  // Here is your motivational input :)
  motivation = createP("Happy :)");
}


function changeCanvasColor() {
  // Here is defined the randomness of the background color
  canvasColor = color(random(255), random(255), random(255));
}
