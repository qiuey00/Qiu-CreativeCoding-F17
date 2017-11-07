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
	
	
	for (var i = 0; i < notes.length; i++){
		notes[i].isHit(bar.x);
		notes[i].draw();
	}
	bar.draw();
	fill(0);
	textSize(40);
	text(radi, 0,40);
	textSize(20);
	if (millis() < 10000){
		text("Press Enter to Reset; Left and Right to change circle radii; Up and Down to change tempo",70,40);
	}

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
	var notColor;
	if(mouseX <= width/5){
		var aMap = map(mouseX, 0,width/5,0,1);
		var red = color(255,0,0);
		var orange = color(255,127,0)
		notColor = lerpColor(red,orange,aMap);
	}
	if((width/5) < mouseX && mouseX <= (width/5)*2){
		var aMap = map(mouseX, width/5,(width/5)*2,0,1);
		var yellow = color(255,255,0);
		var orange = color(255,127,0);
		notColor = lerpColor(orange,yellow,aMap);
	}
	if((width/5)*2 < mouseX && mouseX <= (width/5)*3){
		var aMap = map(mouseX, (width/5)*2,(width/5)*3,0,1);
		var yellow = color(255,255,0);
		var green = color(0,255,0);
		notColor = lerpColor(yellow,green,aMap);
	}
	if((width/5)*3 < mouseX && mouseX <= (width/5)*4){
		var aMap = map(mouseX, (width/5)*3,(width/5)*4,0,1);
		var blue = color(0,0,255);
		var green = color(0,255,0);
		notColor = lerpColor(green,blue,aMap);
	}
	if((width/5)*4 < mouseX && mouseX <= width){
		var aMap = map(mouseX, (width/5)*4,width,0,1);
		var blue = color(0,0,255);
		var purple = color(75,0,130);
		notColor = lerpColor(blue,purple,aMap);
	}
	var temp = new Note(mouseX,mouseY,radi, notColor);
	append(notes,temp);
}

function keyPressed(){
	if(keyCode == ENTER){
		notes = [];
	}
}

function Bar(){
	this.x = 0;
	this.speed = 1
	this.color = "black";
	this.draw = function(){
		noStroke();
		fill(this.color);
		rect(this.x,0,5,height);
		this.x += this.speed;
		if (this.x > width){
			this.x = 0;
		}
	}
	this.changeColor = function(aColor){
		this.color = aColor;
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

function Note(aX,aY,radii, color){
	this.x = aX;
	this.y = aY;
	this.radi = radii;
	this.on = true;
	this.soundMap = map(this.y,0,height,1000,65);
	// this.colorMap = map(this.y,0,height,255,50);
	this.sound = new p5.Oscillator(this.soundMap);
	this.sound.start();
	this.sound.amp(0);
	this.color = color;

	this.draw = function(){
		if(this.on){
			fill(this.color);
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
			fill(this.color);
			bar.changeColor(this.color);
		}
		else {
			this.sound.amp(0,.05);
			// var a = color(0,0,0)
			bar.changeColor("black");
		}
	}
}
