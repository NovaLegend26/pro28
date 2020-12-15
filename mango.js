class Mango {
    constructor(x,y,angle){
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1,
        }
        this.body = Matter.Bodies.circle(x, y, 10, options);
        this.diameter = 20
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow")
        circle(0,0,this.diameter);
        image(this.image,0, 0 ,53,50);
        pop();
      }
    }