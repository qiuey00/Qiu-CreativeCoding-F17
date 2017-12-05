//https://www.youtube.com/watch?v=H5o37KEAGMA
var player;
var platform;
var platforms = [];
var song = [[5,60,570],[311,1],[311,1],[466,2],[392,1],[349,1],[311,1],[311,1],[466,2],[392,1],[349,1],[311,1],[311,1],[523,2],[392,1],[349,1],[311,1],[311,1],[415,1],[415,1],[415,1]];
var PosX ;
var count;

var begin = true;

function setup() {
	createCanvas(windowWidth,windowHeight-100);
	song1();
}

function mouseClicked(){
	if (mouseX > width/2-200 && mouseY<width/2+200 && mouseY > height/2-100 && mouseY < height/2+100){
		song1();
		begin = false;
	}
}

function draw() {
	if (begin){
		background(0);
		fill(0);
		stroke(255);
		rect(width/2-200,height/2-100,400,200);
		textSize(50);
		fill(255);
		text("Start",width/2-50,height/2+20);
	}
	else{

	background(200);

	var gravity = createVector(0,0.8);
	player.applyForce(gravity);

	translate(-player.pos.x+width/2,0);

	var bar = height/5;
	fill(0);
	stroke(0);
	for (var i = 1; i < 5; i++){
		rect(0,bar*i,PosX+100,5);
	}
	var measure = PosX/platforms.length;
	for (var i = 0; i < platforms.length/4; i++){
		rect(measure*(i*4),0,5, height);
	}
	rect(PosX+100,0,5,height);
	rect(PosX+110,0,10,height);


	bassCheck();

	player.update();
	player.draw();
	player.edges();

	for (var i = 0; i < platforms.length; i++){
		platforms[i].draw();
		player.platforms(platforms[i]);
	}

	//end screen
	if (player.pos.x > PosX+100){
		frameRate(0);
		for (var i = 0; i < platforms.length; i++){
			if (platforms[i].hit == true){
				count++;
			}
		}
		background(0);
		textSize(50);
		fill(255,255,255);
		textAlign(CENTER);
		text("You hit " + count/platforms.length*100 + "% of the platforms",player.pos.x,height/2);
	}
}
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		var jump = createVector(0,-17);
		player.applyForce(jump);
	}
	else if (keyCode == DOWN_ARROW){
		var jump = createVector(0,20);
		player.applyForce(jump);
	}
	else if (keyCode == RIGHT_ARROW){
		var jump = createVector(1,0);
		player.applyForce(jump);
	}
	else if (keyCode == LEFT_ARROW){
		var jump = createVector(-1,0);
		player.applyForce(jump);
	}
}

function song1(){
	player = new Player();
	count = 0;
	PosX = 700;
	if (song[0][0] == 0){
		player.vel = createVector(4,0);
	}
	else{
		player.vel = createVector(song[0][0],0);
	}
	for (var i = 1; i < song.length; i++){
		console.log(PosX);
		var mapY = map(song[i][0],song[0][1],song[0][2],height-100,0+50);
		append(platforms, new Platform(song[i][0],song[i][1],PosX,mapY));
		PosX+=150 + (song[i][1]*100);
	}
}

function bassCheck(){
	if (player.pos.x > 1200 && player.pos.x < 1220){
		var back1 = new p5.Oscillator(233);
		var back2 = new p5.Oscillator(155);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
		back2.start();
		back2.setType('triangle')
		back2.amp(.35,.01);
		back2.amp(0,.01,2.5);
	}
	else if (player.pos.x > 2550 && player.pos.x < 2570){
		var back1 = new p5.Oscillator(174);
		var back2 = new p5.Oscillator(116);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
		back2.start();
		back2.setType('triangle')
		back2.amp(.35,.01);
		back2.amp(0,.01,2.5);
	} else if (player.pos.x > 3900 && player.pos.x < 3920){
		var back1 = new p5.Oscillator(130);
		var back2 = new p5.Oscillator(196);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
		back2.start();
		back2.setType('triangle')
		back2.amp(.35,.01);
		back2.amp(0,.01,2.5);
	} else if (player.pos.x > 5250 && player.pos.x < 5270){
		var back1 = new p5.Oscillator(155);
		var back2 = new p5.Oscillator(103);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
		back2.start();
		back2.setType('triangle')
		back2.amp(.35,.01);
		back2.amp(0,.01,2.5);
	}
}

function Platform(notefreq, ntoelength,xVal,yVal){
	this.pos = createVector(xVal,yVal);
	this.length = ntoelength*100;;
	this.width = 40;

	this.note = new p5.Oscillator(notefreq);
	this.note.amp(0,.01);
	this.note.setType('sine');
	this.note.start();
	this.color = color(255, 150)
	this.hit = false;

	this.draw = function(){
		fill(this.color,50);
		stroke(0);
		rect(this.pos.x, this.pos.y, this.length,this.width);
	}
}

function Player() {
	this.pos = createVector(50, height);
	this.vel;
	this.acc = createVector(0, 0);

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	this.draw = function() {
		fill(253, 230, 26);
		stroke(0);
		rect(this.pos.x, this.pos.y-50,20,50);
	}

	this.edges = function() {
		if (this.pos.y > height) {
			this.vel.y *= 0;
			this.pos.y = height;
		}
	}
	this.platforms = function(aPlat){
		if (this.pos.x+20 >= aPlat.pos.x && this.pos.x <= aPlat.pos.x + aPlat.length){
			if (this.pos.y >= aPlat.pos.y && this.pos.y <= aPlat.pos.y + 34){
				this.pos.y = aPlat.pos.y;
				this.vel.y *= 0;
				aPlat.note.amp(.4,0.01)
				aPlat.color = color(253, 230, 26);
				aPlat.hit = true;
			}
			else{
				aPlat.note.amp(0,.01)
				if (this.pos.y <= aPlat.pos.y+aPlat.width+50 && this.pos.y >= aPlat.pos.y+aPlat.width-20+50){
					this.vel.y *= 0;
					this.pos.y = aPlat.pos.y+aPlat.width+50;
				}
			}
		}
		else{
			aPlat.note.amp(0,.01)
		}
	}
}