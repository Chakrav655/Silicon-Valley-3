var scr1,scrEmergency,scrHome,scrAr,scrAmbulance,scrBloodBank,scrArTutorial,scrBlood,scrChooseEmergency,scrChoking,scrChestPain,scrFracture,scrSeizures,scrSnakeBite,scrFeedback,scrCompany,scrLearn,scrProcedure,scrThank,scrSafetyProtocol;
var bgGradient1;
var imgEmergency,imgHome,imgAr,imgAmbulance,imgBloodBank,imgArTutorial,imgBlood,imgChooseEmergency,imgChoking,imgChestPain,imgFracture,imgSeizures,imgSnakeBite,imgFeedback,imgCompany,imgLearn,imgProcedure,imgThank,imgSafetyProtocol;
var gameState = 0;
var home,EmergencyScreen;
var t1 = 50;
var CNV,backB,backFB,emStartB,emBackB,ambB,ambBackB,emergencyB,procB1,procB2,procB3,procB4,procB5,procB6,notEmergencyB,infoB,learnB,feedbackB,bloodB,compB,fracB,chokeB,chestB,snakeB,seizB,lbackB,lARB,feedbackSubmB,bloodRequestB,bloodBankB;
var form1;
var userCount,user1;
var feedback1;
var font1;
var vid;
var location;
var foo;



function preload(){
//screens
scr1 = loadImage("ASSETS_NEW/Screens/logoScreen.png");
scrEmergency = loadImage("ASSETS_NEW/Screens/emergencyScreen.png");
scrChooseEmergency = loadImage("ASSETS_NEW/Screens/chooseEmergencyScreen.png");
scrSafetyProtocol = loadImage("ASSETS_NEW/Screens/safetyProtocolScreen.png");
scrProcedure = loadImage("ASSETS_NEW/Screens/procedureScreen.png");
scrAmbulance = loadImage("ASSETS_NEW/Screens/ambulanceRequestScreen.png");
scrAr = loadImage("ASSETS_NEW/Screens/arScreen.png");
scrArTutorial = loadImage("ASSETS_NEW/Screens/arTutorialScreen.png");
scrHome = loadImage("ASSETS_NEW/Screens/homeScreen.png");
scrLearn = loadImage("ASSETS_NEW/Screens/learnCatalogScreen.png");
scrThank = loadImage("ASSETS_NEW/Screens/thankScreen.png");
scrFeedback = loadImage("ASSETS_NEW/Screens/feedbackScreen.png");
scrFracture = loadImage("ASSETS_NEW/Screens/fractureScreen.png");
scrChoking = loadImage("ASSETS_NEW/Screens/chokingScreen.png");
scrChestPain = loadImage("ASSETS_NEW/Screens/chestPainsScreen.png");
scrSeizures = loadImage("ASSETS_NEW/Screens/seizuresScreen.png");
scrSnakeBite = loadImage("ASSETS_NEW/Screens/snakeBiteScreen.png");
scrCompany = loadImage("ASSETS_NEW/Screens/companyScreen.png");
scrBlood = loadImage("ASSETS_NEW/Screens/bloodScreen.png");
scrBloodBank = loadImage("ASSETS_NEW/Screens/bloodBankScreen.png");

//gradients
bgGradient1 = loadImage("ASSETS_NEW/Gradients/MegaTron.png");

//ForegroundScreens
img1 = loadImage("ASSETS_NEW/Screens/logoScreen.png");
imgEmergency = loadImage("ASSETS_NEW/Screens/emergencyScreen.png");
imgChooseEmergency = loadImage("ASSETS_NEW/Screens/chooseEmergencyScreen.png");
imgSafetyProtocol = loadImage("ASSETS_NEW/Screens/safetyProtocolScreen.png");
imgProcedure = loadImage("ASSETS_NEW/Screens/procedureScreen.png");
imgAmbulance = loadImage("ASSETS_NEW/Screens/ambulanceRequestScreen.png");
imgAr = loadImage("ASSETS_NEW/Screens/arScreen.png");
imgArTutorial = loadImage("ASSETS_NEW/Screens/arTutorialScreen.png");
imgHome = loadImage("ASSETS_NEW/Screens/homeScreen.png");
imgLearn = loadImage("ASSETS_NEW/Screens/learnCatalogScreen.png");
imgThank = loadImage("ASSETS_NEW/Screens/thankScreen.png");
imgFeedback = loadImage("ASSETS_NEW/Screens/feedbackScreen.png");
imgFracture = loadImage("ASSETS_NEW/Screens/fractureScreen.png");
imgChoking = loadImage("ASSETS_NEW/Screens/chokingScreen.png");
imgChestPain = loadImage("ASSETS_NEW/Screens/chestPainsScreen.png");
imgSeizures = loadImage("ASSETS_NEW/Screens/seizuresScreen.png");
imgSnakeBite = loadImage("ASSETS_NEW/Screens/snakeBiteScreen.png");
imgCompany = loadImage("ASSETS_NEW/Screens/companyScreen.png");
imgBlood = loadImage("ASSETS_NEW/Screens/bloodScreen.png");
imgBloodBank = loadImage("ASSETS_NEW/Screens/bloodBankScreen.png");
//fonts
//font1 = loadFont('ASSETS_NEW/Fonts/this.tff');


}


function setup(){
    CNV = createCanvas(375,812);
  //home = createSprite(200,400,100,100);
  backB=new Clickable(50,50);
  backFB=new Clickable(50,50);
  emergencyB=new Clickable(200,200);
  notEmergencyB=new Clickable(200,500);
  infoB=new Clickable(50,50);
  learnB=new Clickable(50,50);
  feedbackB=new Clickable(50,50);
  bloodB=new Clickable(50,50);
  compB=new Clickable(50,50);
  procB1=new Clickable(50,50);
  procB2=new Clickable(50,50);
  procB3=new Clickable(50,50);
  procB4=new Clickable(50,50);
  procB5=new Clickable(50,50);
  procB6=new Clickable(50,50);
  emBackB=new Clickable(50,50);
  emStartB=new Clickable(50,50);
  ambB=new Clickable(50,50);
  ambBackB=new Clickable(50,50);
  fracB=new Clickable(50,50);
  chokeB=new Clickable(50,50);
  chestB=new Clickable(50,50);
  seizB=new Clickable(50,50);
  snakeB=new Clickable(50,50);
  lbackB=new Clickable(50,50);
  lARB=new Clickable(50,50);
  feedbackSubmB=new Clickable(50,50);
  bloodRequestB=new Clickable(50,50);
  bloodBankB=new Clickable(50,50);
  form1 = new Form();
  user1=new User();
  feedback1=new Feedback();

}



function draw(){
  
 t1=t1-1;
  
//textFont(font1);
if (t1 === 0 || t1<0 && gameState !== 2 && gameState !== 3_1 && gameState !== 3_12 && gameState !== 3_13 && gameState !== 3 && gameState !== 3_0 && gameState !== 4  && gameState !== 5 && gameState !== 6 && gameState !== 6_2 && gameState !== 7 && gameState !== 8 && gameState !== 5_1 && gameState !== 5_2 && gameState !== 5_3 && gameState !== 5_4 && gameState !== 5_5 && gameState !== 5_0 && gameState !== 6_1 && gameState !== 7_1 && gameState !== 7_2){
  background(scrEmergency);
 
  gameState = 1; 

  //emergencyB.color = "#6F42C1"; 
  emergencyB.locate(40,127);  
  emergencyB.resize(300,230); 
  emergencyB.draw();

  
 // notEmergencyB.color = "#6F42C1";
  notEmergencyB.locate(45,595);
  notEmergencyB.resize(300,60); 
  notEmergencyB.draw();

  background(imgEmergency);
    }

else if (gameState === 0){
  background(scr1);
} 

emergencyB.onRelease = function(){
  gameState=2;
  background(scrChooseEmergency);
  emergencyB.hide();
  
}

notEmergencyB.onRelease = function(){
  gameState=3_0;
  background(bgGradient1);
  notEmergencyB.hide();
   
}

if (gameState === 2){
  
  //procB.color = "#6F42C1";
  procB1.locate(40,250);
  procB1.resize(305,55); 
  procB1.draw();

  procB2.locate(70,350);
  procB2.resize(220,50); 
  procB2.draw();

  procB3.locate(40,450);
  procB3.resize(305,55); 
  procB3.draw();

  procB4.locate(70,550);
  procB4.resize(220,50); 
  procB4.draw();

  procB5.locate(40,650);
  procB5.resize(305,55); 
  procB5.draw();

  procB6.locate(70,750);
  procB6.resize(220,50); 
  procB6.draw();  

  //emBackB.color = "#6F42C1";
  emBackB.locate(10,10);
  emBackB.resize(25,25);
  emBackB.text= "";
  emBackB.draw();

  background(imgChooseEmergency);

  procB1.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB1.hide();  
  }

  procB2.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB2.hide();  
  }

  procB3.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB3.hide();  
  }

  procB4.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB4.hide();  
  }

  procB5.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB5.hide();  
  }

  procB6.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB6.hide();  
  }
   emBackB.onRelease = function(){
    gameState=1;
    background(scrEmergency);
   procB1.hide(); 
   
  }
}

if (gameState === 3_1){
  
 // emStartB.color = "#6F42C1";
  emStartB.locate(70,462);
  emStartB.resize(250,65); 
  emStartB.draw();

  //emBackB.color = "#6F42C1";
  emBackB.locate(20,710);
  emBackB.resize(25,25); 
  emBackB.text= "";
  emBackB.draw();

  ambB.locate(30,25);
  ambB.resize(300,65); 
  ambB.text= "";
  ambB.draw();

background(imgSafetyProtocol);

  emBackB.onRelease = function(){
    gameState=1;
    background(scrEmergency);
   emBackB.hide();   
  }
   emStartB.onRelease = function(){
    gameState=3_12;
    background(scrProcedure);
   emStartB.hide();  
  
  }    
  ambB.onRelease = function(){
    gameState=3_13;
    background(scrAmbulance);
       ambB.hide();
  }

  }
if (gameState === 3_12){
  
  backB.color = "#2C5364"
  backB.locate(100,720);
  backB.resize(200,50);
  backB.text= "";
  backB.draw(); 
  background(scrProcedure);

}

if (gameState === 3_13){
  ambBackB.locate(10,10);
  ambBackB.resize(25,25); 
  ambBackB.text= "";
  ambBackB.draw();
background(imgAmbulance);
  ambBackB.onRelease = function(){
    gameState=3_1;
    ambBackB.hide();   
  }
}
if (gameState === 3_0){
  form1.display();
  background(bgGradient1);
//gameState = 3;
}
if (gameState===3 ){

  infoB.color = "#B14172"
  infoB.locate(55,190 );
  infoB.resize(270,157);
  infoB.text= "Select";
  infoB.draw(); 
  
  learnB.color = "#B14172"
  learnB.locate(18,755);
  learnB.resize(40,40);
  learnB.text= "";
  learnB.draw();

  feedbackB.color = "#B14172"
  feedbackB.locate(118,755);
  feedbackB.resize(40,40);
  feedbackB.text= "";
  feedbackB.draw();

  bloodB.color = "#B14172"
  bloodB.locate(218,755);
  bloodB.resize(40,40);
  bloodB.text= "";
  bloodB.draw();

  compB.color = "#B14172"
  compB.locate(318,755);
  compB.resize(40,40);
  compB.text= "";
  compB.draw();
  
  background(imgHome);
  form1.displayUserName();
}

infoB.onRelease = function(){
   gameState= 4;
   background(bgGradient1);
   form1.displayUserInfo();
  }

  learnB.onRelease = function(){
    gameState= 5;
    background(scrLearn);
    
   }

   feedbackB.onRelease = function(){
    gameState= 6;
    background(scrFeedback);
    
   }

   bloodB.onRelease = function(){
    gameState= 7;
    background(scrBlood);
    
   }

   compB.onRelease = function(){
    gameState= 8;
    background(scrCompany);
   }

   fracB.onRelease = function(){
    gameState= 5_1;
    background(scrFracture);
   }

   chokeB.onRelease = function(){
    gameState= 5_2;
    background(scrChoking);
   }

   chestB.onRelease = function(){
    gameState= 5_3;
    background(scrChestPain);
   }

   snakeB.onRelease = function(){
    gameState= 5_4;
    background(scrSnakeBite);
   }

   seizB.onRelease = function(){
    gameState= 5_5;
    background(scrSeizures);
   }

   lbackB.onRelease = function(){
     gameState = 5;
     background(scrLearn);
   }

   lARB.onRelease = function(){
     gameState = 5_0;
     background(scrArTutorial);
   }

   feedbackSubmB.onRelease = function(){
    gameState = 6_1;
    background(bgGradient1);
  }

  bloodRequestB.onRelease = function(){
    gameState = 7_1;
    background(bgGradient1);
  }

  bloodBankB.onRelease = function(){
    gameState = 7_2;
    background(bgGradient1);
  }

if (gameState === 4){
  background(bgGradient1);
  form1.displayUserInfo();
 
}
backFB.onRelease = function(){
  gameState =3;
  form1.hideUserInfo();
}
if (gameState === 5){
  backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 

  fracB.color = "#2C5364"
  fracB.locate(40,328);
  fracB.resize(120,130);
  fracB.text= "";
  fracB.draw();
  
  chokeB.color = "#2C5364"
  chokeB.locate(210,328);
  chokeB.resize(120,130);
  chokeB.text= "";
  chokeB.draw(); 

  chestB.color = "#2C5364"
  chestB.locate(40,488);
  chestB.resize(280,110);
  chestB.text= "";
  chestB.draw(); 

  snakeB.color = "#2C5364"
  snakeB.locate(40,640);
  snakeB.resize(120,130);
  snakeB.text= "";
  snakeB.draw(); 

  seizB.color = "#2C5364"
  seizB.locate(210,640);
  seizB.resize(120,130);
  seizB.text= "";
  seizB.draw(); 

  background(imgLearn);
   }

   if (gameState === 5_1){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    lARB.color = "#2C5364"
    lARB.locate(65,710);
    lARB.resize(245,50);
    lARB.text= "";
    lARB.draw(); 
    
    background(imgFracture);
   }

   if (gameState === 5_2){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    lARB.color = "#2C5364"
    lARB.locate(65,710);
    lARB.resize(245,50);
    lARB.text= "";
    lARB.draw(); 

    background(imgChoking);
   }

   if (gameState === 5_3){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    lARB.color = "#2C5364"
    lARB.locate(65,710);
    lARB.resize(245,50);
    lARB.text= "";
    lARB.draw(); 

    background(imgChestPain);
   }

   if (gameState === 5_4){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    lARB.color = "#2C5364"
    lARB.locate(65,710);
    lARB.resize(245,50);
    lARB.text= "";
    lARB.draw(); 

    background(imgSeizures)
   }

   if (gameState === 5_5){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    lARB.color = "#2C5364"
    lARB.locate(65,710);
    lARB.resize(245,50);
    lARB.text= "";
    lARB.draw(); 

    background(imgSnakeBite);
   }

   if (gameState === 5_0){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 
    
    background(imgArTutorial);
    vid = createVideo('ASSETS_NEW/Videos/trial_1.ogv');
    vid.size(300,100);
    vid.position(10,200);
    vid.volume(0);
    vid.loop();

   }
  
   if (gameState === 6){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 

  feedbackSubmB.color = "#2C5364"
  feedbackSubmB.locate(50,370);
  feedbackSubmB.resize(300,60);
  feedbackSubmB.text= "";
  feedbackSubmB.draw(); 

background(imgFeedback);
  }

  if (gameState === 6_1){
    
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 
    background(bgGradient1);
 feedback1.display();
 
//display feedback form here*****
  }
  if (gameState === 6_2){
  backB.color = "#2C5364"
    backB.locate(80,680);
    backB.resize(230,80);
    backB.text= "";
    backB.draw(); 
    background(scrThank);
  }

  if (gameState === 7){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 

  bloodRequestB.color = "#2C5364"
  bloodRequestB.locate(20,330);
  bloodRequestB.resize(150,220);
  bloodRequestB.text= "";
  bloodRequestB.draw(); 

  bloodBankB.color = "#2C5364"
  bloodBankB.locate(200,550);
  bloodBankB.resize(150,220);
  bloodBankB.text= "";
  bloodBankB.draw(); 

  background(imgBlood);
  }

  if (gameState === 7_1){
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 

    //display blook bank database here*****
  }

  if (gameState === 7_2){
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 

    //display user request form here*****
  }

  if (gameState === 8){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 
  background(scrCompany);
  }
  backB.onRelease = function(){
    gameState= 3;
    background(scrHome);
    
   }
}



