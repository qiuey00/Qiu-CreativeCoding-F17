var drops = [];
var sunOn;
var rainTime;
var deathRain;
var prime;
var colorLife;
// var image;
// function preload(){
// 	myImage = loadImage("assets/environment1.jpg");
// }

function setup() {
	createCanvas(600, 600);
	for (var i = 0; i < 100; i++) {
		drops[i] = new Drop();
	}
	sunOn = true;
	rainTime = 0;
	deathRain = 50;
}

function draw() {
	// print(deathRain);
	if (deathRain < -60 || deathRain > 160){

		rainTime = 0;
		deathRain = 50;
	}

	if (rainTime == 125){
		prime = true;
	}
	else{
		prime = false;
	}
	
	background(255,203,148);
	// image(myImage,0,0);
	if (prime == false){
		push();
		var backFade= map(rainTime, 0, 120, 100, 0);
		// print(backFade);
		background(255,203,148, backFade);
		// background(0,0,0,backFade);
		pop();
	}

	stroke(0);
	push();
	translate(300, height-5);
	if (rainTime > 125){
		rainTime = 125;
	}
	branch(rainTime);
	pop();

	for (var i = 0; i < drops.length; i++) {
		drops[i].fall();
	}

	push()
	if (deathRain > 64){
		colorLife = map(deathRain,65,100,0,100);
	}
	else if (deathRain < 36){
		colorLife = map(deathRain,0,35,100,0);
	}
	else {
		colorLife = 0;
	}
	// var colorLife = map(deathRain,0,100,0,100);
	background(0,0,0,colorLife);
	pop()


	if (sunOn == false){
		for (var i = 0; i < drops.length; i++) {
			drops[i].fall();
			drops[i].show();
			strokeWeight(1);
			stroke("black");
		}
		cloud(mouseX,mouseY);
		if (mouseX > 250 && mouseX < 350){
			rainTime += .1;
			print(rainTime);
			if (prime == false){
				deathRain += .3;
			}	
			else{
				deathRain +=.1;
			}
		}
		if (mouseX < 250 || mouseX > 350){
			if (prime == false) {
				deathRain -= .2;
			}
			else{
				deathRain -=.2;
			}
		}
	}
	else {
		sun();
		if (prime == false) {
			deathRain -= .2;
		}
		else{
			deathRain -=.1;
		}
	}
}

function sun(){
	stroke(255,0,14);
	fill(255,0,14);
	ellipse(mouseX,mouseY,50,50);
	
	for(var i = 1; i <= 10; i++){
		push();
		translate(mouseX,mouseY);
		rotate((2*PI/10)*i);
		strokeWeight(6);
		line(0,0,70,0);
		strokeWeight(1);
		pop();
	}
	
}

function cloud(x, y) {
	fill(255, 255, 255);
	noStroke();
	arc(x,y,25*3,20*3,PI+TWO_PI,TWO_PI);
	arc(x+10, y, 25*3, 45*3, PI+TWO_PI, TWO_PI);
	arc(x+25,y,25*3, 35*3, PI+TWO_PI, TWO_PI);
	arc(x+40,y,30*3, 20*3, PI+TWO_PI, TWO_PI);
}

function branch(size) {
	stroke(83,53,10);
	trunk = map(size,0,125,.6,15);
	strokeWeight(trunk);
	stroke("black");
	line(0, 0, 0, -size);
	push();
	translate(0, -size);
	if (size > 4) {
		push();
		rotate(PI/4);
		branch(size * 0.67);
		pop();

		push();
		rotate(-PI/4);
		branch(size * 0.67);
		pop();
	}
	pop();
}

function mouseClicked(){
	if (sunOn == true) {
		sunOn = false;
	}
	else sunOn = true;
}

//Some code here borrowed from https://www.youtube.com/watch?v=KkyIDI6rQJI : a rain tutorial by "The Coding Train"
function Drop() {
	this.x = random(mouseX-40,mouseX+85);
	this.y = random(mouseY-10,mouseY+1);
	this.z = random(0, 20);
	this.length = map(this.z, 0, 20, 10, 20);
	this.yspeed = map(this.z, 0, 20, 4, 10);

	this.fall = function() {
		this.y = this.y + this.yspeed;
		var grav = map(this.z, 0, 20, 0, 0.2);
		this.yspeed += grav;

		if (this.y > height) {
			this.y = random(mouseY-10,mouseY+1);
			this.x = random(mouseX-40,mouseX+85);
			this.yspeed = map(this.z, 0, 20, 6, 10);
		}
	}

	this.show = function() {
		// stroke(152,148,255);
		stroke(68,124,209);
		var rainSize = map(this.z, 0, 20, 1, 3);
		strokeWeight(rainSize);
		line(this.x, this.y, this.x, this.y+this.length);
		if (this.y >= height-5) {
			fill(0, 25,255);
			ellipse(this.x, height - random(0, 15), random(20, 30), random(1, 4));
		}
	}

}