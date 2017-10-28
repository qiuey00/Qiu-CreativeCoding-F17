
var myMap;
var mapto;
function setup(){
	createCanvas(600,600)
	// var x = 0
	// var y = 0

	// for(var j = 0; j < height; j+=60){
	// 	for(var i = 0; i < width; i+=60){
	// 		color +=6;
	// 		fill(j/2, 7, i/2);
	// 		rect(j,i,30,30);
	// 	}
	// }
}


function draw(){
	//MAP FUnction
	// background(255);
	// myMap = map(mouseY, 0, height, 0,255);
	// mapto = map(mouseX, 0 ,width, 40, 400);
	// fill(0,0,myMap);
	// ellipse(width/2,height/2,mapto,mapto);

	// background(255);
	// line(100,0,100,height);
	// line(500,0,500,height);
	// myMap = map(mouseX,0,width,100,500);
	// mapto = constrain(mouseX, 100,500);
	// ellipse(myMap, 200,50,50);
	// ellipse(mapto, 400,50,50);


	push();
	translate(150,300);
	rotate(24);
	fill(255,0,0);
	rect(-25,-25,50,50);
	pop();

	push();
	fill(0,255,0);
	translate(300,300);
	rotate(45);
	rect(-25,-25,50,50);
	pop();
	
	push();
	fill(0,0,255);
	translate(450,300);
	rotate(50);
	rect(-25,-25,50,50);
	pop();
}