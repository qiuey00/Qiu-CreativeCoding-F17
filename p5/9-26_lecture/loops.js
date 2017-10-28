function setup(){
	createCanvas(600,600);
	// background(255);
	noStroke();
	// for(var i = 0; i < 5; i++){
	// 	ellipse((i*20)+50,100,10,10);
	// }
}

function draw(){
	var color = 0
	for(var j = 0; j < 20; j++){
		for(var i = 0; i < 5; i++){
			color +=2.5;

			// fill(color,0,0);
			fill(j*11, 0, i*40);
			ellipse((i*50)+20,(j*20)+20,10,10);
		}
	}

	var x = =0;
	while(x < 40){

	}

	// fill(255,255,255,50);
	// rect(0,0,width,height);
	// fill(0);
	// ellipse(mouseX,mouseY,30,30);

	

	
}

