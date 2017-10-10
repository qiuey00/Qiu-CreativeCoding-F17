var y = 100;
var z = 1;
var p = 1;
var count = 0;
var textA = 150;
var textB = 150;
var textC = 150;

function setup(){
	createCanvas(600,600);
	background(30);
    noFill();
    
}

function draw(){

	background(30);
    
    stroke(textA);
    text("V1",10,590);
    stroke(textB);
    text("V2",30,590);
    stroke(textC);
    text("V3",50,590);
    
	//var colorY = map(mouseY, 0, height, 0,255);
    var colorY = (millis()/40)  % 220;
    var colorX = (millis()/30) % 220;
    changeColor(colorY,colorX);

	var mappedRot = map(mouseX,0,width,0,2*PI);
	push();
	translate(width/2,height/2);
	ellipse(0,0,80,80);
	pop();


     for(var i = 0; i < p; i++){

     	push();
     	translate(300,300);
     	rotate(2*PI/p*i);
     	rotate(mappedRot);
     	for(var j = 0; j < z; j++){
     		triangle(40,-40,40,40,y+j*10,0);
     	}
     	pop();
     }
 }

function changeColor(color,color2){
    // Color V1
	if (count % 3 == 0){
		stroke(color,color2,100);
        textA = 255;
        textB = 150;
        textC = 150;
	} 
    // Color V2
    else if(count % 3 == 1){
		stroke(100,color,color2);
        textB = 255;
        textA = 150;
        textC = 150;
	}
    // Color V3
    else{
		stroke(color2,100,color);
        textC = 255;
        textA = 150;
        textB = 150;
	}
}

function mouseClicked(){
	count ++;
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