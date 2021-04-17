var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(200,200,20,20)

  wall = createSprite(1000, 200, 10, 100)
  wall.shapeColor = color(80,80,80)

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed
}

function draw() {
  background(0);  

  if (wall.x-car.x < (car.width+car. width)/2) {
     car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22500;
     if (deformation < 100) {
       car.shapeColor = color (0,255,0)
     }
     if (deformation < 180 && deformation > 100) {
       car.shapeColor = color (230,230,0)
     }
     if (deformation > 180) {
       car.shapeColor = color (255,0,0)
     }
  }

  drawSprites();
}