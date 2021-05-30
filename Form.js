class Form{
    constructor(){
     this.input= createInput("Enter your name")
     this.button= createButton('Register')
     this.greeting= createElement('h2')
     this.title= createElement('h2')
     this.Oxygen= createElement('h2')
     this.oinput= createInput("Enter oxygen saturation")
     this.dinput=createInput("Enter any other ailments")
     this.phinput=createInput("Please enter your phone number")
     
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
        this.oinput.hide();
        this.dinput.hide();
    }
    display(){
        this.title.html("VacciNation- an Initiative by Rith");
        this.title.position(windowWidth/2 -100, 0);
        this.title.style('color', ' White');
        this.input.position(windowWidth/2 - 40 , windowHeight/2 -180);
        this.button.position(windowWidth/2 -40, displayHeight/2+90);
       this.dinput.position(windowWidth/2-40,windowHeight/2-120)
      this.oinput.position(windowWidth/2 -40, windowHeight/2-150)
      this.phinput.position(windowWidth/2 -40, windowHeight/2-90)
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         this.oinput.hide()
         this.dinput.hide()
         this.phinput.hide();
         player.name= this.input.value()
         player.oxygen= this.oinput.value()
         player.disease= this.dinput.value();
         player.phoneNumber= this.phinput.value();
         playerCount+=1;
         player.index=playerCount;
         player.update();
         player.updateCount(playerCount)
         this.greeting.html("hello "+player.name+" your response has been sent successfully")
         this.greeting.position(windowWidth/2 - 70, windowHeight/4)
     })
    
    }
}