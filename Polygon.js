class Polygon{
    constructor(x, y, radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);

        World.add(world, this.body);

        this.radius = radius;
        
        this.image = loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
       image(this.image, pos.x, pos.y, 60, 60);
    }
}