
var weight;
var x = 0;
function setup(){
	createCanvas(600,600)
}


function draw(){
	// background(255);
	fill(255);
	// createShapes();
	background(255);
	while (x<100000){
		translate(300,300);
		rect(0,0,40,60);
		rotate(mouseX);
	}

	x+=5;
}

function createShapes(){
	ellipse(mouseX,mouseY,90,90);
	ellipse(mouseX,mouseY,70,70);
	ellipse(mouseX,mouseY,50,50);
}

function createLines(weight){
	strokeWeight(weight);
	line(pmouseX, pmouseY,mouseX, mouseY);
}