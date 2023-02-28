class Platform {
    constructor(x, y, w, h) {
        let options = {isStatic: true}
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        if (keyIsDown(LEFT_ARROW)) {
            pos.x -= 10;
          }
        if (keyIsDown(RIGHT_ARROW)) {
            pos.x += 10;
        }
        push();
        rectMode(CENTER);
        noStroke();
        fill(50);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}