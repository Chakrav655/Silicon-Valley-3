class Feedback{
    constructor(){
        this.feedback = createInput();
        this.submit = createButton("Submit");
    }
    display(){
        this.feedback.size(300,600);
        this.feedback.position(35,80);
        this.submit.position(150,780);
        
        this.submit.mousePressed(()=>{            
            this.feedback.position(1000,1000);
            this.submit.position(1000,1000);
            gameState = 6_2;
        });

    }
}