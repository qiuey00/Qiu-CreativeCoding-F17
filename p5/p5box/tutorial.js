function setup(){
	createCanvas(600,600);
	// background(250);

}

function draw(){
	// background(200,200,200);
	// strokeWeight(2);
	// var myDistance = dist(mouseX, mouseY, pmouseX, pmouseY);
	// strokeWeight(myDistance);
	// stroke(myDistance);
	clear()
	if (mouseIsPressed){
		line(mouseX,mouseY,pmouseX,pmouseY);
	}

	if(mouseX > .5*width){
		fill(0,0,250);
		rect(.5*width,0,.5*width,height);
	}

	if (mouseX == .75*width){
		background(250,250,0);
	}
	if (mouseX < .5*width && mouseY < 200){
		fill(0,128,128);
		rect(0,0,.5*width,200);
	}
	if (mouseX < .5*width && mouseY > 200){
		fill(250,0,0);
		rect(0,200,.5*width,400);
	}
}



// function mouseDragged(){
// 	noStroke();
// 	fill(255,0,255);
// 	ellipse(mouseX,mouseY, 40,40);
// }