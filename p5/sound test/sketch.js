var mode;
var mySound;
var loopMode
function preload(){
	mySound = loadSound('assets/buzz.mp3');
}
function setup(){
	createCanvas(250,60);
	loopMode = "restart"
	
}

function draw(){
	background(255);
	mySound.playMode(loopMode);
	textSize(32);
	if (loopMode == "restart"){
			text("Restart Mode",10,height);
		}
		else {
			text("Sustain Mode",10,height);
		}
}

function keyPressed(){
	if (keyCode == ENTER){
		if (loopMode == "restart"){
			loopMode = "sustain";
		}
		else {
			loopMode = "restart";
		}
	}
}
function mouseClicked() {
  mySound.play();
}