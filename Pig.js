class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visiblity=255;
    //this.image = loadImage("sprites/paper.png");

  }
  display(){
    if(this.body.speed<2.5){
      super.display()
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility-=1;
      
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }
}