class PlayerArcher{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/playerArcher.png");
        Matter.Body.setAngle(this.body,-PI/2);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;


        if(keyCode === 24 && PlayerArcher.Body.angle < 1.77){
            angleValue = 0.1;
        }else{
            angleValue = -0.1;
        }
        

        if(keyCode === 25 && PlayerArcher.Body.angle > 1.47){
            angleValue = -0.1;
        }else{
            angleValue = 0.1;
        }


        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        rect(pos.x,pos.y,this.w,this.h);
        pop()
    }
}