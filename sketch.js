const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform;
var box;
var boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  platform = new Platform(width / 2, height - 25, 200, 30);
}


function draw() {
  background(100);
  Engine.update(engine);
  platform.show();
  createBox();
  showBoxes();
}

function createBox() {
  if (frameCount % 60 == 0) {
    var box = new Box(Math.round(random(0, width)), -150, Math.round(random(0, 100)) + 50, Math.round(random((0, 100))) + 50);
    boxes.push(box);
  }
}

function showBoxes() {
  for (n = 0; n < boxes.length; n++) {
    if (boxes[n]) {
      boxes[n].show();
      boxes[n].collide(platform);
    }
  }
}

/*function collide(body, sprite) {
  if (body != null) {
    var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
    if (d <= 80) {
      World.remove(engine.world, );
      fruit = null;
      return true;
    } else {
      return false;
    }
  }
}*/