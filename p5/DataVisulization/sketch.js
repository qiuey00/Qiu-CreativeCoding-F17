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
	var aY = 20;

	var aX1 = 20;
	var aY1 = 50;

	var aX2 = 20;
	var aY2 = 80;

	for(var i = 0; i < data.characters.length; i++){
		if (data.characters[i].nature == "good"){
			good++;
			append(Nodes, new Node(aX,aY,25,"green"));
			aX += 30;
			aY += 30;
		}
		else if (data.characters[i].nature == "neutral"){
			neutral++;
			append(Nodes, new Node(aX1,aY1,25,"grey"));
			aX1 += 30;
			aY1 += 30;
		}
		else if (data.characters[i].nature == "evil"){
			evil++;
			append(Nodes, new Node(aX2,aY2,25,"red"));
			aX2 += 30;
			aY2 += 30;
		}
		
	}

}
function draw(){
	for (var i = 0; i < Nodes.length; i++){
		Nodes[i].draw();
		// console.log(Nodes.length);
	}
}

function Node(theX,theY,theR,color){
	this.x = theX;
	this.y = theY;
	this.status = color;
	this.radius = theR;

	this.draw = function(){
		fill(this.status);
		noStroke();
		ellipse(this.x,this.y,this.radius,this.radius);
		fill("black");
	}
}