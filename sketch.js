var gameState = 0;
var playerCount;
var allPlayers;
var oxygen
var disease
var database;
var form, player, game;
var red,orange
var boiss
var phoneNumber
function preload() {


  }



function setup() {
  createCanvas(windowWidth , windowHeight)
 
  database=firebase.database()
 game= new Game();
 game.getState();
 game.start();
}


function draw() {
background("green")
  if(playerCount===30){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()

  }
  
  }
  
 

 


