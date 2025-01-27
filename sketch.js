//A function that loops through all the rays inside FieldOfView
//and return the distance from the player to a wall that has been
//hit by the rays



function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.moveDirection = +1;
  } else if (keyCode == DOWN_ARROW) {
    player.moveDirection = -1;
  } else if (keyCode == RIGHT_ARROW) {
    player.turnDirection = +1;
  } else if (keyCode == LEFT_ARROW) {
    player.turnDirection = -1;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    player.moveDirection = 0;
  } else if (keyCode == DOWN_ARROW) {
    player.moveDirection = 0;
  } else if (keyCode == RIGHT_ARROW) {
    player.turnDirection = 0;
  } else if (keyCode == LEFT_ARROW) {
    player.turnDirection = 0;
  }
}

function setup() {
  // put setup code here
  createCanvas(screenWidth, screenheight * (1 + MINIMAP_SCALE_FACTOR));

}


function update() {
  player.update();
  player.castAllRays();
}

function show_instructions(){
  push()
  textSize(12);
  fill(255);
  text("Use the arrow keys to move", screenWidth - 170, 20);
  pop()
}


function draw() {
  background(0);
  show_instructions();
  update();
  player.render3DView();

  grid.render();
  for (ray of rays) {
    ray.render();
  }
  player.render();
}