var colors =["white","black","red","green","blue"];

function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");
  
  header();

 for (i=0; i < colors.length; i++){
    console.log(colors[i]);
  }

  /*console.log(colors[0]);
  console.log(colors[1]);
  console.log(colors[2]);
  console.log(colors[3]);
  console.log(colors[4]);*/


}


function draw() {
  
  /*white = new ColorBox(0, 50, 50, 50, "white");
  white.appear();
  black = new ColorBox(0, 100, 50, 50, "black");
  black.appear();
  red = new ColorBox(0, 150, 50, 50, "red");
  red.appear();
  green = new ColorBox(0, 200, 50, 50, "green");
  green.appear();
  blue = new ColorBox(0, 250, 50, 50, "blue");
  blue.appear();*/
    
}

//display instruction
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}
    

