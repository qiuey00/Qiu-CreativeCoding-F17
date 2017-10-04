
var myMap;
var mapto;
var color;
function setup(){
	createCanvas(600,600)

}


function draw(){
	background(255);

	//3 squares each individual
	// push();
	// translate(150,300);
	// rotate(24);
	// fill(255,0,0);
	// rect(-25,-25,50,50);
	// pop();

	// push();
	// fill(0,255,0);
	// translate(300,300);
	// rotate(45);
	// rect(-25,-25,50,50);
	// pop();
	
	// push();
	// fill(0,0,255);
	// translate(450,300);
	// rotate(50);
	// rect(-25,-25,50,50);
	// pop();
	
	//_____________________________________________________
	
	// 3 squares with for loop
	// for (var j = 0; j < 3; j++){
	// 	color = map(j,0,2,50,250);
	// 	fill(color);
	// 	push()
	// 	myMap = map(j,0,2,150,450);
	// 	translate(myMap,300);
	// 	mapto = map(j,0,2,25,90);
	// 	rotate(mapto);

	// 	rect(-25,-25,50,50);
	// 	pop()
	// }

	//____________________________________________________

	//controlling the rotation with the mouse
	for (var j = 0; j < 3; j++){
		color = map(j,0,2,50,250);
		fill(color);
		push()
		myMap = map(j,0,2,150,450);
		translate(myMap,300);
		mapto = map(mouseX,0,width,0,90);
		
		rotate(mapto);

		rect(-25,-25,50,50);
		pop()
	}

}