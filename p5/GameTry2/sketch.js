
//to play the game you need to use the arrow keys

var aPlayer;
var aCoin;
var aHaz;
var hazards = [];
var count;

function setup(){
	createCanvas(600,600);
	aCoin = new Coin();
	aPlayer = new Player();
	aHaz = new Hazard();
	count = 0
	append(hazards, aHaz);
}

function draw(){
	background(150);
	fill(0);
	textSize(32);
	text("Points = " + count, 10, 30);

	aPlayer.display();
	for (var i = 0; i < hazards.length; i++){
		hazards[i].display();
		endCheck(i);
		if (hazards.length > 1){
			for (var j = 0; j < hazards.length; j++){
				if (i == j){
					break;
				}
				ballCollision(hazards[i],hazards[j]);
			}
		}
	}
	aCoin.display();

	if (collisionCoin() == true){
		count++;
		aCoin.reset();
		if (count != 0 && count % 3 == 0 ){
			var anotherHaz = new Hazard();
			append(hazards, anotherHaz);
		}
	}

  //Game over 
  
}

function endCheck(index){
	if (collision(hazards[index]) == true){
		fill("red");
		if (count == 1){
			text("You Lose. You had " + count + " point", 100, 100);
		}
		else{
			text("You Lose. You had " + count + " points", 100, 100);
		}
		text("Press enter to restart",100,300);
		frameRate(0);
	}
}

function restart(){
	frameRate(60);
	aCoin = new Coin();
	aPlayer = new Player();
	aHaz = new Hazard();
	hazards = [];
	count = 0;
	append(hazards, aHaz);
}

function collision(haz){
  if (dist(aPlayer.getx(),aPlayer.gety(),haz.getx(),haz.gety()) <= 16){ //18 is the combined radius of both of the objects
  	console.log("hit");
  	return true;
  }
  else {return false;}
}

function ballCollision(haz1,haz2){
  if (dist(haz1.getx(),haz1.gety(),haz2.getx(),haz2.gety()) <= 15){ 
  	haz1.xVel *= -1;
  	haz1.yVel *= -1;
  	haz2.yVel *= -1;
  	haz2.yVel *= -1;
  }
  else {return false;}
}

function collisionCoin(){
  if (dist(aPlayer.getx(),aPlayer.gety(),aCoin.getx(),aCoin.gety()) <= 13){ //13 is the combined radius of both of the objects
  	return true;
  }
  else {return false;}
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		aPlayer.moveUp();
	}
	else if (keyCode == DOWN_ARROW){
		aPlayer.moveDown();
	}
	else if (keyCode == LEFT_ARROW){
		aPlayer.moveLeft();
	}
	else if (keyCode == RIGHT_ARROW){
		aPlayer.moveRight();
	}
	else if (keyCode == ENTER){
		restart()
	}
}

function keyReleased(){
	if (keyCode == UP_ARROW){
		aPlayer.speedResetY();
	}
	else if (keyCode == DOWN_ARROW){
		aPlayer.speedResetY();
	}
	else if (keyCode == LEFT_ARROW){
		aPlayer.speedResetX();
	}
	else if (keyCode == RIGHT_ARROW){
		aPlayer.speedResetX();
	}
}

function Player(){
	this.Posx = 300;
	this.Posy = 300;
	//player control can be made much smoother by individual variable for positive and negative x and y velocitie
	this.Velx = 0;
	this.Vely = 0;

	this.speedResetX = function(){
		this.Velx = 0;
	}
	this.speedResetY = function(){
		this.Vely = 0;
	}
	this.moveRight = function(){
		this.Velx = 3;
	}
	this.moveLeft = function(){
		this.Velx = -3;
	}
	this.moveUp = function(){
		this.Vely = -3;
	}
	this.moveDown = function(){
		this.Vely = 3;
	}
	this.getx = function(){
		return this.Posx;
	}
	this.gety = function(){
		return this.Posy;
	}
	this.display = function(){
		this.Posx += this.Velx;
		this.Posy += this.Vely;
		if (this.Posx <= 0 || this.Posx >= width){
			this.Posx -= this.Velx;
		}
		if (this.Posy <= 0 || this.Posy >= height){
			this.Posy -= this.Vely;
		}
		fill(250,250,250);
		ellipse(this.Posx,this.Posy,20,20);
	}
}

function Coin(){
	this.coinX = random(10,590);
	this.coinY = random(10,590);

	this.reset = function(){
		this.coinX = random(10,590);
		this.coinY = random(10,590);
	}
	this.getx = function(){
		return this.coinX;
	}
	this.gety = function(){
		return this.coinY;
	}
	this.display = function(){
		fill(250,250,0);
		ellipse(this.coinX,this.coinY, 10,10);
	}
}

function Hazard(){
	this.hazX = 30;
	this.hazY = 100;
	this.xVel = random(-5,5);
	this.yVel = random(-5,5);

	if (this.xVel > -1 && this.xVel < 1){
		this.xVel = random(-5,5);
	}

	if (this.yVel > -1 && this.yVel < 1){
		this.yVel = random(-5,5);
	}

	this.getx = function(){
		return this.hazX;
	}
	this.gety = function(){
		return this.hazY;
	}
	this.display = function(){
		fill(0,0,0);
		ellipse(this.hazX,this.hazY,15,15);
		this.hazX += this.xVel;
		this.hazY += this.yVel;
		if (this.hazX >= width || this.hazX <= 0) {
			this.xVel *= -1;
		}
		if (this.hazY >= height || this.hazY <= 0) {
			this.yVel *= -1;
		}
	}
}