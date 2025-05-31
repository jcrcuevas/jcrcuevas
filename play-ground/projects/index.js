console.log("Hellow World");


// retrieve from HTML to console
const dateElement = document.getElementById('date');

console.log(dateElement);

// retrieving the current date today
let currentDate =  new Date();


// Displaying the current date in the console
console.log(currentDate);

// Taking the date with year month day *US Format)
let dateOptions =  {year: 'numeric', month: 'long', day: 'numeric'};

// pass into HTML content
// dateElement.innerHTML = currentDate;
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// from Rapid API snippets re Twitter trending topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '9ed120707amshcc8113cd0087273p1990f4jsne16f9a6ed030',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};





/*let myPost = {
	name: ":Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
}

console.log(myPost);
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.followers);

// Declare an array object
let graphData = [
		// index = 0
		{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
		// index = 1
		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}]


console.log(graphData);
console.log(graphData[1]);

console.log(graphData[1].name);
console.log(graphData);

graphData.push(myPost);
console.log(graphData);*/


let graphData = [];

// using new fetch request
fetch (url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

	console.log(graphData.length);
	console.log("Using Loop");

	for(let i = 0; i <25; i++){
		graphData.push(
		{
			"name": data.trends[i].name,
			"volume": data.trends[i].volume
		})
		/*console.log(graphData[i].name);
		console.log(graphData[i].queryUrl);
		console.log(graphData[i].volume);*/
	}

	console.log("Using Map To Display Name");
	let topics = graphData.map(object => {
		console.log(object);
		console.log(object.name);
		return object.name;
	})

	console.log(topics);


	console.log("Using Map To Display Volume");
	let volumes = graphData.map(object => {
		return object.volume
	})


	console.log(volumes);



	// Create a chart
	 const ctx = document.getElementById('myChart');

	  let barChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
		labels: topics,
	   	datasets: [{
			    label: '# of tweets/xeets',
			    data: volumes,
			    borderWidth: 2,
		        backgroundColor: [
		    		'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
		        ],
		        borderColor: [
		    		'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
		        ],
		        hoverBackgroundColor: [
		        	'rgb(255, 99, 132)',
		        	'rgb(255, 159, 64)',
		        	'rgb(255, 205, 86)',
		        	'rgb(75, 192, 192)',
		        	'rgb(54, 162, 235)',
		        	'rgb(153, 102, 255)',
		        	'rgb(201, 203, 207)'
		        ]
			  }]
			},
			options: {
			  indexAxis: 'y',
			  scales: {
			    y: {
			      beginAtZero: true
			    }
			  }
			}
	  });


	})