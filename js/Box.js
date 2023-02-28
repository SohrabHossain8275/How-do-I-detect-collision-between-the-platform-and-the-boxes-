class Box {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w;
        this.h = h;
        this.score = (this.w * this.h) / 2500;
        World.add(world, this.body);
    }
    show() {
        let pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill(150);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
        
    }
    collide(sprite) {
        if (this.body != null) {
          var d = dist(this.x, this.y, sprite.x, sprite.y);
          if (d <= 80) {
            World.remove(engine.world, this.body);
            this.body = null;
            return true;
          } else {
            return false;
          }
        }
      }
}