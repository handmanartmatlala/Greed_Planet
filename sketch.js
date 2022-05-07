let fog; 
let clouds; 
let wood; 
let cabin; 

function preload(){
  cabin = loadModel('farmhouse_obj.obj')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fog = loadImage('fog.png'); 
  clouds = loadImage('clouds.png');
  wood = loadImage('wood.jpg');
  tree = loadImage('tree.png');
  trees = loadImage('trees.png'); 
}

function draw() {
  background(20);
  orbitControl();
  
  noStroke()
  
  camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(0,-90, 400, 0, 0, 1, 0, 1, 0);
  
  //landscape
  push();
  translate(-80,0,0);
  fill(0,0,0);
  box(10, 15, 700);
  pop();
  
  push();
  translate(-100,0,0);
  fill(0,0,0);
  box(10, 15, 700);
  pop();
  
  push();
  translate(-80,0,0);
  fill(112, 112, 112);
  box(1000, 10, 700);
  pop();
  
  //fog1
  //push();
//  translate(300,-55,0);
  //fill(112, 112, 112);
 // texture(fog)
//  plane(200,100);
 // pop();
  
  //landscape
 // push();
 // translate(0,0,0);
//  texture(clouds)
  //fill(112, 112, 112);
//  box(1000, 500, 700);
 // pop();
  
  push();
  translate(0,-8,100);
  texture(wood);
  rotateX(3.14);
  scale(2.5);
  model(cabin);
  pop();
  
  push();
  translate(100,-8,100);
  texture(wood);
  rotateX(3.14);
  scale(2.5);
  model(cabin);
  pop();
  
  push();
  translate(200,-8,100);
  texture(wood);
  rotateX(3.14);
  scale(2.5);
  model(cabin);
  pop();
  

  
  //treesback
  push();
  translate(-80,-20,-350);
  texture(trees);
  plane(1100, 700);
  pop();
  
  
  //treesfront
  push();
  translate(-80,-20,350);
  texture(trees);
  plane(1100, 700);
  pop();
  
  //treesright
  push();
  translate(410,-20,0);
  rotateY(7.85)
  texture(trees);
  plane(1100, 700);
  pop();
  
  //treesleft
  push();
  translate(-570,-20,0);
  rotateY(7.85)
  texture(trees);
  plane(1100, 700);
  pop();
}