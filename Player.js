class Player{
   constructor(){
       this.index=null;
       this.name=null;
       this.oxygen=0
       this.disease= null
       this.phoneNumber=null
   } 

   getCount(){
       var playerCountRef= database.ref('playerCount')
       playerCountRef.on("value",(data)=>{
           playerCount=data.val()
       })
   }


updateCount(count){
    database.ref('/').update({
        playerCount:count
    });
}

update(){
    var playerIndex= "players/player"+ this.index;
    database.ref(playerIndex).set({
        name:this.name,
        oxygen:this.oxygen,
        disease:this.disease,
        phoneNumber: this.phoneNumber
    })
}

static getPlayerInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on("value",(data)=>{
        allPlayers=data.val();
    })
}
}
