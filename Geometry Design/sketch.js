var y = 100;
var z = 1;
var p = 1;
function setup(){
	createCanvas(600,600);
	background(200);
	noFill();
}

function draw(){

	background(200);
	var colorY = map(mouseY, 0, height, 0,255);
    changeColor(colorY);

	var mappedRot = map(mouseX,0,width,0,2*PI);
	push();
	translate(width/2,height/2);
	ellipse(0,0,80,80);
	pop();

     for(var i = 0; i < p; i++){

     	push();
     	translate(300,300);
     	rotate(mappedRot);
     	var iw = 2*PI/p;
     	rotate(2*PI/p*i);
     	for(var j = 0; j < z; j++){
     		triangle(40,-40,40,40,y+j*10,0);
     	}
     	pop();
     }
 }

function changeColor(color){
	stroke(color,0,0);
}

 function keyPressed(){

 	if(keyCode == UP_ARROW){
 		z ++;
 	}

 	if(keyCode == DOWN_ARROW){
 		z--;
 		if (z < 0){
 			z = 0;
 		}
 	}
 	if(keyCode == RIGHT_ARROW){
 		p++;
 	}
 	if(keyCode == LEFT_ARROW){
 		p--;
 		if (p<0){
 			p = 0;
 		}
 	}
 }