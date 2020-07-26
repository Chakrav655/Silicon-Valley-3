class Form {

  constructor() {
    this.name = createInput("Name");
    this.age = createInput("Age");
    this.weight = createInput("Weight(kg)");
    this.height = createInput("Height(m)");
    this.bloodGroup = createSelect("BloodGroup");
    this.bloodGroup.option('A+ve');
    this.bloodGroup.option('A-ve');
    this.bloodGroup.option('B+ve');
    this.bloodGroup.option('B-ve');
    this.bloodGroup.option('AB+ve');
    this.bloodGroup.option('AB-ve');
    this.bloodGroup.option('O+ve');
    this.bloodGroup.option('O-ve');
    this.phone = createInput("Add.Phone");
    this.insurance = createInput("Insurance");
    this.button = createButton('Next');  
    this.button2 = createButton('That`s Good');  
    this.title = createElement('h2');
    this.title2 = createElement('h1');

    this.greeting = createElement('h1');
    this.infoBmi = createElement('h2');
    this.infoAge = createElement('h2');
    this.infoBloodGroup = createElement('h2');
    this.infoPhone = createElement('h2');
    this.infoInsurance = createElement('h2');

    //this.myInfo = createButton('MyInfo');

   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.name.hide();
    this.age.hide();
    this.weight.hide();
    this.height.hide();
    this.bloodGroup.hide();
    this.phone.hide();
    this.insurance.hide();
    this.title.hide();
    this.title2.hide();
    this.button2.hide();
    this.infoBmi.hide();
    this.infoAge.hide();
    this.infoPhone.hide();
    this.infoBloodGroup.hide();
    this.infoInsurance.hide();
    
  }
displayUserName(){
  //textFont(font1);
  var userName = this.name.value();
  textFont('LucidaSans');
  textAlign(CENTER);
  textSize(40);
  fill("#0F99A5");
  text(userName,150,70);
}


  display(){
    //textFont(font1);
    this.title.html("RESPOND_FAST");
    this.title.position(90,20);

    this.name.position(40,100+40);
    this.age.position(40,170+40);
    this.weight.position(40,240+40);
    this.height.position(40,310+40);
    this.bloodGroup.position(40,380+40);
   
    this.phone.position(40,450+40);
    this.insurance.position(40,520+40);

    this.button.position(150,650);

    
    this.button.mousePressed(()=>{
    gameState = 3;
    this.title.hide();
    this.name.hide();
    this.age.hide();
    this.weight.hide();
    this.height.hide();
    this.bloodGroup.hide();
    this.phone.hide();this.name.hide();
    this.insurance.hide();
    this.button.hide();

        });
      }
      
      displayUserInfo(){
//textFont(font1);
        var userName = this.name.value();
var userAge = this.age.value();
var userWeight = this.weight.value();
var userHeight = this.height.value()*this.height.value();
var userBloodGroup = this.bloodGroup.value();
var userPhone = this.phone.value();
var userInsurance = this.insurance.value();

this.name.hide();
this.age.hide();
this.weight.hide();
this.height.hide();
this.bloodGroup.hide();
this.phone.hide();
this.insurance.hide();
this.button.hide();
this.title.hide();

this.title2.html("YOUR INFO");
this.title2.position(100,20);
     
this.greeting.html("Welcome " + userName);
this.greeting.position(70,200);

this.infoBmi.html("Body Mass Index: "+ Math.round(userWeight/userHeight));
this.infoBmi.position(50,350);

this.infoAge.html("Age: "+userAge);
this.infoAge.position(50,400);

this.infoBloodGroup.html("Blood Group: "+userBloodGroup);
this.infoBloodGroup.position(50,450);

this.infoPhone.html("Add.Phone: "+userPhone);
this.infoPhone.position(50,500);

this.infoInsurance.html("Insurance: "+userInsurance);
this.infoInsurance.position(50,550);

this.button2.position(120,680);

        this.button2.mousePressed(()=>{
         
         //user.update();
       //this.myInfo.position(90,200);
       gameState = 3;
       this.title2.position(1000,1000);
       this.greeting.position(1000,1000);
       this.infoBmi.position(1000,1000);
       this.infoAge.position(1000,1000);
       this.infoBloodGroup.position(1000,1000);
       this.infoPhone.position(1000,1000);
       this.infoInsurance.position(1000,1000);
       this.button2.position(1000,1000);
          });
        }
}
