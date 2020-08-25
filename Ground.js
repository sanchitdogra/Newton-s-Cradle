class Ground{

  constructor(){
      var option={
          isStatic: true
      }
this.body= Bodies.rectangle(600,100,450,20,option);
this.width=600;
this.height=40;
World.add (world,this.body);
}

  display(){
      var pos=this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  }

}