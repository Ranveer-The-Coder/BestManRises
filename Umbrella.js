class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.batmanImg = loadImage("batman.png")
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        
     if(frameCount >= 200){
        image(this.batmanImg,pos.x,pos.y+70,350,350);     
                
    } else{
        image(this.image,pos.x,pos.y+70,200,300);  
    }   
}
}