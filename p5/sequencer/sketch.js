var notes;
var bar;
var Asound;
var radi;

function setup() {
	createCanvas(1000,500);
	bar = new Bar();
	notes = [];
	Asound = new p5.Oscillator(440);
	radi = 20;
	// Asound.start();
}

function draw() {
	background(255);
	fill(0);
	textSize(40);
	text(radi, 0,40);
	textSize(20);
	text("Press Enter to Reset",70,40);
	for (var i = 0; i < notes.length; i++){
		notes[i].isHit(bar.x);
		notes[i].draw();
	}
	bar.draw();
	if (keyIsDown(UP_ARROW)){
		bar.speedUP();
	}
	if (keyIsDown(DOWN_ARROW)){
		bar.speedDOWN();
	}
	if (keyIsDown(LEFT_ARROW)){
		radi-=1;
		if (radi == 0){
			radi = 0;
		}
	}
	if (keyIsDown(RIGHT_ARROW)){
		radi+=1;
	}
}

function mouseClicked() {
  var temp = new Note(mouseX,mouseY,radi);
  append(notes,temp);
}

function keyPressed(){
	// if(keyCode == LEFT_ARROW){
	// 	radi-=1;
	// 	if (radi == 0){
	// 		radi = 0;
	// 	}
	// }
	// if(keyCode == RIGHT_ARROW){
	// 	radi+=1;
	// }
	if(keyCode == ENTER){
		notes = [];
	}
}

function Bar(){
	this.x = 0;
	this.speed = 1
	this.draw = function(){
		noStroke();
		fill(200,0,0);
		rect(this.x,0,5,height);
		this.x += this.speed;
		if (this.x > width){
			this.x = 0;
		}
	}
	this.speedUP = function(){
		this.speed += .3
	}
	this.speedDOWN = function(){
		this.speed -= .3
		if (this.speed < 0){
			this.speed = 0;
		}
	}

}

function Note(aX,aY,radii){
	this.x = aX;
	this.y = aY;
	this.radi = radii;
	this.on = true;
	this.soundMap = map(this.y,0,height,1000,65);
	this.colorMap = map(this.y,0,height,255,50);
	this.sound = new p5.Oscillator(this.soundMap);
	this.sound.start();
	this.sound.amp(0);

	this.draw = function(){
		if(this.on){
		ellipse(this.x,this.y,this.radi, this.radi);
	}
	}
	this.isClicked = function(){
		if (this.on){	
			if (dist(mouseX,mouseY,this.x,this.y) < this.radi/2){
				this.on = false;
			}
		}
	}
	this.isHit = function(barX){
		if(barX+5 > this.x-this.radi/2 && barX < this.x+this.radi/2){
			this.sound.amp(0.5,.05);
			fill(0,0,this.colorMap);
		}
		else {
			this.sound.amp(0,.05);
			fill(0);	
		}
	}
}
