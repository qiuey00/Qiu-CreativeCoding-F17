var y = 100;
var z = 1;

function setup(){
	createCanvas(600,600);
	background(200);
	noFill();
}

function draw(){

	background(200);
	var mappedRot = map(mouseX,0,width,0,2*PI);
	push();
	translate(width/2,height/2);
	ellipse(0,0,80,80);
	pop();


     for(var i = 0; i < 6; i++){

     	push();
     	translate(300,300);
     	rotate(mappedRot);
     	rotate(i);
     	for(var j = 0; j < z; j++){
     		triangle(40,-40,40,40,y+j*10,0);
     	}
     	pop();
     }
 }

 function keyPressed(){

 	if(keyCode == UP_ARROW){
 		z ++;
 	}

 	if(keyCode == DOWN_ARROW){
 		z++;
 	}
 }