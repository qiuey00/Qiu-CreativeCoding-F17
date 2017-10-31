var myShape;
var myShape2;
var shapes = [];
var sound;

function preload(){
	sound = loadSound('assets/boom.mp3');
}

function setup(){
	createCanvas(500,500);
	for (var i = 0; i < 5; i++){
		myShape = new Shape(sound);
		shapes.push(myShape);
}
	
}

function draw() {
	background(255);
	for (var i = 0; i < shapes.length; i++){
		shapes[i].display();
		shapes[i].animate();
}
}

function Shape(mySound){
	// this.x = xPos;
	// this.y = yPos;
	this.x = random(50,440);
	this.y = random(50,440);
	this.size = random(15,25);
	this.xVel = random(2,5);
	this.yVel = random(2,5);

	this.sound = mySound;

	this.r = random(0,255)
	this.g = random(0,255)
	this.b = random(0,255)

	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;
		if (this.x > width || this.x < 0){
			this.xVel *= -1;
			this.sound.play();
		}
		if (this.y > height || this.y < 0){
			this.yVel *= -1;
			this.sound.play();
		}
	}

	this.display = function(){
		fill(this.r,this.g,this.b);
		noStroke();
		ellipse(this.x,this.y, this.size, this.size);
	}
}