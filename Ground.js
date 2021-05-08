class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
          this.width = width;
          this.height = height;
          this.ground = Bodies.rectangle(x,y,width,height,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        var pos= this.ground.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}