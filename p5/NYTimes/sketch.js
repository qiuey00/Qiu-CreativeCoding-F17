//Partner: Abi
var myData;
var url;

var searchTerms = [];
var searchIndex = 0;
var boxSearch = [];
var queryInput;
function setup(){
	createCanvas(1200,600);
	searchTerms = ["Brooklyn","Manhattan","Queens"];
	for (var i = 0; i < searchTerms.length; i++){
		var myMap = map(i, 0, searchTerms.length, 100, width);
		var aBox = new SearchBox(myMap-50,searchTerms[i],width/searchTerms.length);
		append(boxSearch, aBox);
	}
}
function draw(){
	for(var i = 0; i < boxSearch.length; i++){
		boxSearch[i].draw();
	}
	console.log(queryInput);
}

function mouseClicked(){
	for(var i = 0; i < boxSearch.length; i++){
		if(boxSearch[i].clicked()){
			queryInput = boxSearch[i].seachTerm;
		}
	}
}

function SearchBox(aX,term, aLength){
	this.x = aX;
	this.y = 50;
	this.length = aLength-100;
	this.seachTerm = term;
	this.draw = function(){
		noFill();
		rect(this.x, this.y, this.length, 100);
		textSize(50);
		fill(0);
		text(this.seachTerm,this.x+40, this.y+70);
	}
	this.clicked = function(){
		if(mouseX < this.x+this.length && mouseX > this.x && mouseY < this.y+100 && mouseY > this.y){
			return true;
		} else{
			return false;
		}
	}
};