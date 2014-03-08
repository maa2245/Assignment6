

// to make sure that I have successfully loaded my javascript into my html, I will console.log js load successful.
// If it works, this should show up in the console.
console.log ("js load successful")

// This is the function where I will create an array of an array 
function ColumbiaLoaded(UNEMPDATA){
	
	console.log(UNEMPDATA);
	
// Now I will feed the google vizualization data into my array
	var gMathiasTable = new google.visualization.DataTable();	

	gMathiasTable.addColumn('string', UNEMPDATA.columns[0]);
	gMathiasTable.addColumn('number', UNEMPDATA.columns[1]);
	
	gMathiasTable.addRows(UNEMPDATA.rows);

		// Now I am going to create options object customize the look of the chart. I will make a title and call it Unemployment since 1980

	var ChartOptions = {
          title: "Unemployment since 1980"
        };

	// Now I am telling google to create a line chart.
	var gMathiasChart = new google.visualization.LineChart(document.getElementById("MathiasDiv"));
		gMathiasChart.draw(gMathiasTable, ChartOptions);
	
}

function MathiasLoaded(){
	
	
	//Here I am going to load the data I want to use via the get function. Last week, I used a static json file. This week
	// I am going to use a Google Fusion Table. 
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*FROM+1ObMagBpe6gu58ykSgqx9oswHnP4S6ZKdPKqk0Bnm+WHERE+DATE>'1979-12-01'&key=AIzaSyDgXCjc_6-rhgi4hlZ8B38upvpVu8nXd-4", ColumbiaLoaded, "json");
	
}

//this is my first function, which I am going to use in my document.ready. I will call it ChartLoaded.
function ChartLoaded(){
	console.log("here's a page");
	
	// here I am going to load Google's visualization function.
	google.load("visualization", "1", {packages:["corechart"], callback: "MathiasLoaded"});
	
}

// here I am going to write my document.ready function.
$(document).ready(ChartLoaded);
