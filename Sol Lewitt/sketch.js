
var Colors = [];

function setup(){
	createCanvas(600,600);
	var blue = color(7,84,220);
	var orange = color(253,133,32);
	var red = color(213,40,6);
	var purple = color(67,29,128);
	var yellow = color(253,242,23);
	var green = color(61,146,28);
	Colors = [red, orange, yellow, green, blue, purple];


//arcs
noFill()
strokeWeight(10);
var x = 300;
var y = 300;
var ellipseWidth = width+200;
var ellipseHeight = height+200;
while (ellipseHeight>0){
	stroke(any());
	arc(x, y, ellipseWidth, ellipseHeight, 0, PI);
	ellipseWidth -= 20;
	ellipseHeight -= 20;
}

//left triangle

var x = 5;
var y = 5;
while(x < 295){
	stroke(any());
	line(x,0,0,y);
	x+=10;
	y+=10;
}
var newY = 0;
while(y<height){
	stroke(any());
	line(x,newY,0,y);
	y += 10;	
	newY += 10
}

//right triangle
strokeWeight(10);
var x = 300;
var y = 300;
while(x < height){
	stroke(any());
	line(x,0,x,y);
	x+=10;
	y+=10;
}


//boarder
stroke(0);

strokeWeight(20);
line(0,0,0,height);
line(0,height,width,height);
line(width,height,width,0);
line(0,0,width,0);

//lines in the square
strokeWeight(10);
line(width/2,0,300,300);
line(0,height,300,300);
line(300,300,height,width);


}



// function draw(){
// 	)
// }

function warm(){
	var colour = int(random(0,3));
	return Colors[colour];
}

function cold(){
	var colour = int(random(3,6));
	return Colors[colour];
}

function any(){
	var colour = int(random(0,6));
	return Colors[colour];
}