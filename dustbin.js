class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true 
        }
        thid.body = Bodies.rectangle(x,y,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(pos.x,pos.y,this.width,this.height);
    }
}