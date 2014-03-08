

// to make sure that I have successfully loaded my javascript into my html, I will console.log js load successful.
// If it works, this should show up in the console.
console.log ("js load successful")

// This is the function where I will create an array of an array 
function ColumbiaLoaded(UNEMPDATA){
	
	console.log(UNEMPDATA);

	
	var myData = UNEMPDATA.observations; 

	//I am trying to construct an array of arrays. 
	var MathiasList = [];

	var topArray = ["Date", "Value"];
	MathiasList.push(topArray);


// Now I am going to convert my json data to an array 
	// of arrays using a for loop.
	for(var i=0; i<myData.length;i++) {

		
		var MathiasObj = myData[i];

		var MathiasArray = [MathiasObj.date, Number(MathiasObj.value)];

		MathiasList.push(MathiasArray);



	} // This is the end of my loop

	console.log(MathiasList);

	// Now I will feed the google vizualization data into my array
	var MathiasTable = google.visualization.arrayToDataTable(MathiasList);

	// Now I am going to create options object customize the look of the chart. I will make a title and call it Unemployment since 1980

	var ChartOptions = {
          title: "Unemployment since 1980"
        };

	
	var myChart = new google.visualization.LineChart(document.getElementById("MathiasDiv"));
		myChart.draw(MathiasTable, ChartOptions);
	
}

function MathiasLoaded(){
	
	
	//Here I am going to load the data I want to use via the get function. I will write down the name of the file
	// the name of the function I am using as callback and then finally the file type.
	$.get("Uempdata.json", ColumbiaLoaded, "json");
	
}

//this is my first function, which I am going to use in my document.ready. I will call it ChartLoaded.
function ChartLoaded(){
	console.log("here's a page");
	
	// here I am going to load Google's visualization function.
	google.load("visualization", "1", {packages:["corechart"], callback: "MathiasLoaded"});
	
}

// here I am going to write my document.ready function.
$(document).ready(ChartLoaded);
