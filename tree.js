class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("tree.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("green");
        image(this.image,pos.x,pos.y,650, 650)
      }
  };