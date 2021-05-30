class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    }

    update(state){
    database.ref('/').update({
        gameState:state
    })
    }

    async start(){
      if(gameState===0){
          player=new Player();
          var playerCountRef= await database.ref('playerCount').once("value")
          if(playerCountRef.exists()){
              playerCount= playerCountRef.val();
              player.getCount();
          }
          form= new Form();
          form.display();
      }
    
    
   
    }
    
    play(){
     form.hide();
     Player.getPlayerInfo();
    
     if(allPlayers !== undefined){
         background(rgb(198,135,103))
        
      
         var index=0
         var x=175
         var y;
         for (var plr in allPlayers){
             index=index+1
             x=x+200
             y = displayHeight - allPlayers[plr].distance;
            
              textSize(30)
        
             text(allPlayers[plr].name+ "(you)",x+60,y+25) 
             if (index === player.index){
             stroke(10)
             
             
             
               
             }     
        }
     }
     if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.y=player.y+10
        
      }
      drawSprites()
    }
}

    