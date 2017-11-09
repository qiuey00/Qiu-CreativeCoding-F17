var data;
var Nodes = [];
function preload(){
	data = loadJSON("assets/arch.json");
}
function setup(){
	createCanvas(500,500);
	var good = 0;
	var neutral = 0;
	var evil = 0;

	var aX = 20;
	var aY = 30;

	var aX1 = 20;
	var aY1 = 100;

	var aX2 = 20;
	var aY2 = 170;

	for(var i = 0; i < data.characters.length; i++){
		if (data.characters[i].nature == "good"){
			good++;
			append(Nodes, new Node(aX,aY,25,"green",data.characters[i].name));
			aX += 30;
			aY += 30;
		}
		else if (data.characters[i].nature == "neutral"){
			neutral++;
			append(Nodes, new Node(aX1,aY1,25,"grey",data.characters[i].name));
			aX1 += 30;
			aY1 += 30;
		}
		else if (data.characters[i].nature == "evil"){
			evil++;
			append(Nodes, new Node(aX2,aY2,25,"red",data.characters[i].name));
			aX2 += 30;
			aY2 += 30;
		}
		
	}

}
function draw(){
	for (var i = 0; i < Nodes.length; i++){
		Nodes[i].draw();
	}
}
function mouseClicked(){
	background(255);
	for (var i = 0; i < Nodes.length; i++){
		if (dist(mouseX,mouseY,Nodes[i].x,Nodes[i].y) <= Nodes[i].radius){
			Nodes[i].printName();
		}
	}
}

function Node(theX,theY,theR,color,atext){
	this.x = theX;
	this.y = theY;
	this.status = color;
	this.radius = theR;
	this.good = atext;

	this.draw = function(){
		fill(this.status);
		noStroke();
		ellipse(this.x,this.y,this.radius,this.radius);
		fill("black");
	}
	this.printName = function(){
		textSize(40);
		fill(this.status);
		text(this.good,0,height);
	}
}