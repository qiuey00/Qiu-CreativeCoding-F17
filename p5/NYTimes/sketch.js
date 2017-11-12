//Partner: Abi
var myData;
var url;

var searchTerms = [];
var searchIndex = 0;
var boxSearch = [];
var queryInput;

var myData;
var url;
var newsfeed;
var tempTextH;
var tempTextS;

function setup(){
	createCanvas(1200,600);
	searchTerms = ["Brooklyn","Manhattan","Queens"];
	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	appId = "api-key=864d90e87eda4e419d3b5bc32205ad32"; //we killed this key
	query = "q=";
	queryInput = "manhattan";
	url = baseUrl + query + queryInput + "&" + appId;
	console.log(url);

	myData = loadJSON(url);
	console.log(myData);

	setInterval(queryData, 3000);

	newsfeed = new Box();
	for (var i = 0; i < searchTerms.length; i++){
		var myMap = map(i, 0, searchTerms.length, 100, width);
		var aBox = new SearchBox(myMap-50,searchTerms[i],width/searchTerms.length);
		append(boxSearch, aBox);
	}
}
function draw(){
	background(255, 228, 225);
	if(myData){
		newsfeed.draw();
		newsfeed.headline(str(tempTextH));
		newsfeed.snippet(str(tempTextS));
	} else {
		console.log("Bad data!");
	}
	for(var i = 0; i < boxSearch.length; i++){
		boxSearch[i].draw();
	}
	// console.log(queryInput);
}

function mouseClicked(){
	for(var i = 0; i < boxSearch.length; i++){
		if(boxSearch[i].clicked()){
			queryInput = boxSearch[i].seachTerm;
			myData = loadJSON(url);
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

//callback function. can't be called except through the loadJSON
function dataResponse(tempData) {
	myData = tempData;
	for (var i = 0; i < tempData.response.docs.length; i++) {
		tempTextH = tempData.response.docs[i].headline.print_headline;
		tempTextS = tempData.response.docs[i].snippet;
	}
}

function queryData(){
	loadJSON(url, dataResponse);
}

function Box(){
	this.x = 200;
	this.y = 150;

	this.draw = function(){
		noStroke();
		fill(30, 144, 255);
		rect(this.x, this.y, 700, 400);
	}

	this.headline = function(_x){
		this.text = _x;
		fill(255);
		textSize(20);
		text(this.text, this.x + 100, this.y + 100);
	}

	this.snippet = function(_x){
		this.text = _x;
		fill(255);
		textSize(10);
		text(this.text, this.x + 100, this.y + 200, 500, 300);
	}
};