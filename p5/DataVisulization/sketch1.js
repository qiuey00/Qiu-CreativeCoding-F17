var data;
var Nodes = [];
function preload(){
	data = loadJSON("assets/arch.json");
}
function setup(){
	createCanvas(500,500);
	var good =0;
	var neutral = 0;
	var evil = 0;

	for(var i = 0; i < data.characters.length; i++){
		var overlap = true;
		if (Nodes.length == 0){
			append(Nodes, new Node(random(50,450),random(50,450),10));
			overlap = false;
		}
		while (overlap = true){
			if (data.characters[i].nature == "good"){
				var aX = random(50,450);
				var aY = random(50,450);
				for (var i = 0; i < Nodes.length; i++){
					if (dist(Nodes[i].x,Nodes[i].y,aX,aY) <= Nodes[i].radius*2){
						overlap = false;
					}
					if (overlap == false){
						var aNode = new Node(aX,aY,10);
						append(Nodes,aNode);
					}
				}
			}
			else if (data.characters[i].nature == "neutral"){
				var aX = random(50,450);
				var aY = random(50,450);
				for (var i = 0; i < Nodes.length; i++){
					if (dist(Nodes[i].x,Nodes[i].y,aX,aY) <= Nodes[i].radius*2){
						overlap = false;
					}
					if (overlap == false){
						var aNode = new Node(aX,aY,10);
						append(Nodes,aNode);
					}
				}
			}
			else if (data.characters[i].nature == "evil"){
				var aX = random(50,450);
				var aY = random(50,450);
				for (var i = 0; i < Nodes.length; i++){
					if (dist(Nodes[i].x,Nodes[i].y,aX,aY) <= Nodes[i].radius*2){
						overlap = false;
					}
					if (overlap == false){
						var aNode = new Node(aX,aY,10);
						append(Nodes,aNode);
					}
				}
			}
		}
	}

}
function draw(){
	for (var i = 0; i < Nodes.length; i++){
		Nodes[i].draw();
		// console.log(Nodes.length);
	}
}

function Node(X,Y,R){
	this.x = X;
	this.y = Y;
	this.status;
	this.radius = R;

	this.draw = function(){
		ellipse(this.x,this.y,this.radius,this.radius);
	}
}