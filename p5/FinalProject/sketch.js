var player;
var platform;
var platforms = [];
var songChoice;
var song;
var PosX ;
var count;
var freeMode = false;

var begin = true;

function setup() {
	createCanvas(windowWidth,windowHeight-100);
}

function mouseClicked(){
	if (mouseX > width/3-150 && mouseX < width/3+50 && mouseY > height/2-100 && mouseY< height/2+50){
		begin = false;
		songChoice = false;
		song2();
	}
	if (mouseX > width/3*2-100 && mouseX < width/3*2+100 && mouseY > height/2-100 && mouseY < height/2+50){
		songChoice = true;
		begin = false;
		song1();
	}
}

function draw() {
	if (begin){
		background(0);
		fill(0);
		stroke(255);
		rect(width/3-150,height/2-100,200,150);
		rect(width/3*2-100,height/2-100,200,150);
		
		rect(width/2-45, height/2,50,50);
		rect(width/2-45,height/2+50,50,50);
		rect(width/2-95,height/2+50,50,50);
		rect(width/2+5,height/2+50,50,50);
		rect(width/2-150,height/2+125,260,50);

		textSize(15);
		fill(255);
		text("jump", width/2-35,height/2+25);
		text("drop", width/2-35,height/2+75);
		text("move", width/2-85,height/2+70);
		text("left", width/2-78,height/2+85);
		text("move", width/2+15,height/2+70);
		text("right", width/2+18,height/2+85);
		text("activate free mode", width/2-80,height/2+155);

		textSize(50);
		fill(255);
		text("Pick a Song",width/2-140,100);
		text("Demons",width/3-140,height/2);
		text("Shelter",width/3*2-80,height/2);

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

		if (songChoice){
			bass2();
		}
		else{
			bassCheck();
		}



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
	else if (keyCode == LEFT_ARROW){
		if (freeMode){
			player.vel = createVector(-5,player.vel.y);
		}
	}
	else if (keyCode == RIGHT_ARROW){
		if (freeMode){
			player.vel = createVector(5,player.vel.y);	
		}
	}
	else if (key == ' '){
		player.vel = createVector(0,player.vel.y);	
		freeMode = true;
	}
}

function keyReleased(){
	if (keyCode == RIGHT_ARROW){
		if (freeMode){
			player.vel = createVector(0);
		}
	}
	if (keyCode == LEFT_ARROW){
		if (freeMode){
			player.vel = createVector(0);
		}
	}

}

function song2(){
	song = [[5,60,570],[311,1],[311,1],[466,2],[392,1],[349,1],[311,1],[311,1],[466,2],[392,1],[349,1],[311,1],[311,1],[523,2],[392,1],[349,1],[311,1],[311,1],[415,1],[415,1],[415,1]];
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
		var mapY = map(song[i][0],song[0][1],song[0][2],height-100,0+50);
		append(platforms, new Platform(song[i][0],song[i][1],PosX,mapY));
		PosX+=150 + (song[i][1]*100);
	}
}


function song1(){
	song = [[5,200,1000],[523,2],[880,1],[780,1],[523,3],[523,2],[880,1],[780,1],[587,2],[587,1],[523,1],[523,1],[880,1],[780,1],[659,1],[659,1],[523,1],[587,1],[659,1],[523,1],[587,1],[659,1],[523,1],[587,1],[523,5]];
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
function bass2(){
	if (player.pos.x > 700 && player.pos.x < 720){
		var back1 = new p5.Oscillator(349);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,3.5);
	}
	else if (player.pos.x > 2000 && player.pos.x < 2020){
		var back1 = new p5.Oscillator(329);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
	}
	else if (player.pos.x > 2850 && player.pos.x < 2870){
		var back1 = new p5.Oscillator(349);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
	}
	else if (player.pos.x > 3700 && player.pos.x < 3720){
		var back1 = new p5.Oscillator(329);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2.5);
	}
	else if (player.pos.x > 4450 && player.pos.x < 4470){
		var back1 = new p5.Oscillator(220);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,1);
	}
	else if (player.pos.x > 4970 && player.pos.x < 4990){
		var back1 = new p5.Oscillator(349);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,6);
		var back2 = new p5.Oscillator(293);
		back2.start();
		back2.setType('triangle');
		back2.amp(.35,.01);
		back2.amp(0,.01,6);
	}
	else if (player.pos.x > 6950 && player.pos.x < 6970){
		var back1 = new p5.Oscillator(349);
		back1.start();
		back1.setType('triangle');
		back1.amp(.35,.01);
		back1.amp(0,.01,2);
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