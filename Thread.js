class Thread{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.045,
          length: 350
      }
      this.pointB=pointB;
      this.thread = Constraint.create(options);
      World.add(world, this.thread);
  }


  display(){
      var pointA = this.thread.bodyA.position;
      var pointB = this.pointB;
     strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  
}
