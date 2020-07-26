class baseClass{
    constructor(x,y,width,height){
    this.x= x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.icon = createSprite(this.x,this.y,this,width,this.height);
    //this.rectangle = rect(this.x,this.y,this.width,this.height);
    
    //this.img = img;
    //this.image= loadImage("ASSETS/1.png");

    }
    display(){
       
       rectMode(CENTER);
       rect(this.x,this.y,this.width,this.height);
    }

    
  

}