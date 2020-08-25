class Ball {
  constructor(x, y,radius) {
var options={
              'restitution':1.1,
              'friction':0.009,
              'density':0.0085,
              isStatic:false
          }
    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius=radius/2;
    World.add(world, this.body);
  }
  display(){
    push();
   var pos= this.body.position;
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,this.radius);
   fill(255,105,180);
   pop();
 
  }
}