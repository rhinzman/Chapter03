


function debugAjax(){
	//define a variable to hold the data
	var myData;
	
	fetch('data/MegaCities.geojson')
		.then(function(response){
			return response.json();
		})
	.then(function(response){
		myData=response;
		
	})
	function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))

