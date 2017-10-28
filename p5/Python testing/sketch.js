var myImage;
function preload(){
	myImage = loadImage("assets/img.jpg");
}
function setup(){
	createCanvas(myImage.width,myImage.height);
	// image(myImage,0,0);
	var colors[];
	for (var x=0; x<myImage.width; x+=100){
		for (var y=0; y<myImage.height; y+=100){
			stroke(myImage.get(x,y))
			fill(myImage.get(x,y));
			ellipse(x,y,50,50);
		}
	}

	// for (var x=0; x<myImage.width; x+=100){
	// 	for (var y=0; y<myImage.height; y+=100){
	// 		append(colors,myImage.get(x,y));
	// 	}
	// }

	// for (var x=0;x<colors.length;x+=5){
	// 	for x=
	// }
}
function draw(){
	// var myColor = myImage.get(mouseX,mouseY);
	// fill(myColor);
	// rect(width/2,height/2,50,50);

	
}