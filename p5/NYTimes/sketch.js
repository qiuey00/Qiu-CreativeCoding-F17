// var myData;
// function preload(){
// 	myData = loadJSON("assets/heights.json")
// }
// function setup(){
// 	createCanvvas(600,600);
// 	println(myData.animals.length);
// 	for(var i = 0; i < myData.animals.length; i++){
// 		var thisElement = myData.animals[i].height;
// 		consol.log(thisElement):
// 	}
// }
// function draw(){

// }

var myData;
var url;

var searchTerms = [];
var searchIndex = 0;
function setup(){
	// baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
	// query = "London,uk";
	// appID = "APPID9097338f581bdc9ea7275ecb327b7a4d";
	// url = baseUrl + "q=" + query + "&" + appID;
	
	url = "http://api.open-notify.org/iss-now.json";  //figure out how to access iss info

	// searchTerms = ["cats","dogs","birds"]
	// baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	// appID = ;//need to register for an appID
	// query = 
	console.log(url)
	myData = loadJSON(url);
	console.log(myData);
}
function draw(){
	if(myData){
		var posData = myData;  //figure out how to access iss info
		// var keys = Object.keys(posData);
		var dat = myData['iss_position'];
		console.log(posData);
		// console.log(keys);
	}
	else {
		console.log("bad data!")
	}
}

function dataResponse(tempData){
	myData = tempData;
}

function queryData(){
	loadJSON(url,dataResponse);
}

function mouseClicked(){
	query = searchTerms[serchIndex]
	searchIndex++;
	url = baseUrl + "q=" + query + "&" + appID;
}