//Create variables 
var database;
var dog, dogIMG;
var happyDog, happyDogIMG;
var foodS, foodStock;

function preload()
{
  //Load images
dogIMG = loadImage("images/dogImg.png");
happyDogIMG = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

  //Create canvas and give properties to objects
  createCanvas(500, 500);
  
  dog = createSprite(250, 200);
  dog.addImage(dogIMG);

}


function draw() {  

  drawSprites();
  //add styles here

}



