class Canon {
    constructor(x, y, w, h, angle) {
        this.x = x;
        this.y = y;
        //var origX=x;        
        this.width = w;
        this.height = h;
        this.angle = angle;
        this.baseImg = loadImage("assets/wheel.png");
        this.snout = loadImage("assets/final.png");
        this.stand = loadImage("assets/stand.png");

        
    }
    display() {
        if (keyIsDown(RIGHT_ARROW) ) {
            //this.x=origX;
            this.angle +=0.2;
            
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.angle -= 0.2;
        }
        imageMode(CENTER);
        
        
        push();
        translate(this.x, this.y);
        //translate(0,0);
        //this.rect(0,0,this.width.this.height);
        rotate(this.angle);
       // imageMode(CORNER);
        image(this.snout, 80,-10, this.width-10, this.height);
        pop();

        image(this.stand, this.x , this.y + 30, 170, 150);
        image(this.baseImg, this.x+20 , this.y-20 , 130, 130);
        
       
    }
}

//&& this.angle < -0.55