class Stone{
  constructor (x,y,width,height) {
  
      var options = { 
        'isStatic':false,
          'restitution':0, 
          'friction':1,
           'density':1.2 
          }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("stone1.png")
      this.width = width
      this.height = height
  
      World.add(world,this.body)
      
  }
  display(){
      var pos = this.body.position  
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      imageMode(CENTER);
      fill("grey");
      rect(0,0,this.width,this.height);
      image(this.image,0,0,this.width+20,this.height+20)
      pop();
  }
  }