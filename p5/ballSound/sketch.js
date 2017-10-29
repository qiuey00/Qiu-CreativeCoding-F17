var mySound;
var x;
var y;
var r;
var g;
var b;
var xspeed;
var yspeed;
function preload(){
	mySound = loadSound('assets/boom.mp3');
}
function setup(){
	createCanvas(300,300);
	mySound.playMode("sustain");
	x = width/2;
	y = height/2;
	r=0;
	g=0;
	b=0;
	xspeed = random(2,7);
	yspeed = random(2,7);
}

function draw(){
	background(255);
	noStroke();
	fill(r,g,b);
	ellipse(x,y,20,20)
	x += xspeed;
	y += yspeed;

	if (x >= width){
		mySound.play();
		xspeed *= -1;
		r+= random(0,50);
		r = r%255;
	}
	else if (y <= 0){
		mySound.play();
		yspeed *= -1
		g+=random(0,50);
		g = b%255;
	}
	else if (x <= 0){
		mySound.play();
		xspeed *= -1;
		b += random(0,50);
		b = b%255;
	}
	else if (y >= height){
		mySound.play();
		yspeed *= -1;
	}
}

function mouseClicked(){
	//change the speed of the ball when it hits the bottom wall
	xspeed = random(2,7);
	yspeed = random(2,7);
}

