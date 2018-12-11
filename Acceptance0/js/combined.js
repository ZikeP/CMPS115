
$(function(){
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
})

//api key for themovie database 
var api = 'edd37bcd78573bd6c7db2376590199f9';
//page number default
var p = 1; 
var animepage = 0;
//function for search animes
//using the kitsu database

function searchanime(){
	$('#tableresults').html('');
	$('#buttons').html('');

	q = $('#query').val();
	text = "text";

	$.get(
		//search anime from kitsu api database
		'https://kitsu.io/api/edge/anime?filter[text] = '+ q +'&page[offset]='+ animepage +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var counter = 0;
			
			console.log(data);
			
			totalpages = data.meta.count;
			//for each anime, get the data and call getOutput for a nice layout
			$.each(data.data, function(r, result){
				var output = getOutputanime(result, counter);
				$('#tableresults').append(output);
				//count the number of the results, the larger number is,the longer fade in time it is.
				counter++;
			});
			if (animepage == totalpages){
				return;
			}else{
				var buttons = nextanimepage(prevPageToken, nextPageToken);
				$('#buttons').append(buttons);				
			}

		}
		
	);
}

function getOutputanime(result, counter){
	//get elements from api array 
	var title = result.attributes.canonicalTitle;
	var description = result.attributes.synopsis;
	var poster = result.attributes.posterImage.medium;
	var videoDate = result.attributes.startDate;
	if(description.length > 495){
		description = description.substring(0,495)+"...";
	}

	//count the number of the results, the larger number is,the longer fade in time it is.
	if(counter == 0){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity1">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity1">' +
			'<img src="'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 0 && counter <= 2){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity2">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity2">' +
			'<img src="'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 2 && counter <= 8){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity3">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity3">' +
			'<img src="'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 8 && counter <= 14){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity4">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity4">' +
			'<img src="'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 14){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity5">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity5">' +
			'<img src="'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}
	return output;
}



function searchanimetag(keyword){
	$('#tableresults').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		'https://kitsu.io/api/edge/anime?filter[genres] = '+ q +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var counter = 0;
			
			console.log(data);
			
			$.each(data.data, function(r, result){
				var output = getOutputanime(result, counter);
				$('#tableresults').append(output);
				counter++;
			});
		}
		
	);
}

function nextanimepage(prevPageToken, nextPageToken){
	if(animepage == 0){
		var btnoutput = '<div class = "button-container">'+'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "nextPage(), searchanime();">Next</button></div>';
		animepage = animepage + 10;
	}else{
		var btnoutput = '<div class = "button-container">'+
		'<div class = "button-container">'+'<button id = "next-button" class = "button" data-token = "'+prevPageToken+'" data-query ="'+q+'" onclick = "minusanime(), prevPage(),searchanime();">Last</button>'+
		'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "addanime(), nextPage(),searchanime();">Next</button></div>'+ '</div>';
	}

	return btnoutput;
}

function minusanime(){
	animepage = animepage - 10;
};

function addanime(){
	animepage = animepage + 10; 
}
//search functions for searching the movies in table view 
//using the movie database

function search(){
	$('#tableresults').html(''); //results return to the home page named tableresults
	$('#buttons').html('');
	q = $('#query').val();


	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: api,
		query: q,
		page: p
	},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var counter = 0;
			
			console.log(data);
			var total_page = data.total_pages; 			
			$.each(data.results, function(r, result){
				var output = getOutputmovie(result, counter);
				$('#tableresults').append(output);
				counter++;
			});
			// if there are no more next page, disable next page button 
			if (p == total_page){
				return;
			}else{
				var buttons = nextpage(prevPageToken, nextPageToken);
				$('#buttons').append(buttons);
			}
		}
		
	);
}


function getOutputmovie(result, counter){
	//get elements from api array 
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;
	if(description.length > 495){
		description = description.substring(0, 495)+"...";
	}

	//count the number of the results, the larger number is,the longer fade in time it is.
	if(counter == 0){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity1">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity1">' +
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 0 && counter <= 2){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity2">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity2">' +
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 2 && counter <= 8){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity3">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity3">' +
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 8 && counter <= 14){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity4">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity4">' +
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}else if(counter > 14){
		if(poster == null){
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity5">' +
			'<img src="net.png">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}else{
			var output = '<li>' +
			'<div class = "list-left w3-animate-opacity5">' +
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
			'</div>' +
			'<div class="list-right">' +
			'<h3>'+title+'</h3>' +
			'<small>Released On '+videoDate+'</small>' +
			'<p>'+description+'</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'<br/>' +
			'';
		}
	}
	
	return output;
}

function searchtag(keyword){
	$('#tableresults').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: api,
		query: q,
	},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var counter = 0;
			
			console.log(data);	
			$.each(data.results, function(r, result){
				var output = getOutputmovie(result, counter);
				$('#tableresults').append(output);
				counter++;
			});

		}
		
	);
}
// function for filp to next page
function nextpage(prevPageToken, nextPageToken){
	if(p == 1){
		var btnoutput = '<div class = "button-container">'+'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "nextPage(), search();">Next</button></div>';
		p = p + 1;
	}else{
		var btnoutput = '<div class = "button-container">'+
		'<button id = "next-button" class = "button" data-token = "'+prevPageToken+'" data-query ="'+q+'" onclick = "minus(), prevPage(), search();">Last</button>' +
		'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "add(), nextPage(), search();">Next</button></div>';
	}

	return btnoutput;
}

function minus(){
	p = p - 1;
	animepage = animepage - 10;
};
function add(){
	p = p + 1;
	animepage = animepage + 10; 
}
//implementation of search function in net view

function searchnet(){
	for(var i=0; i<=30; i++){
		$('#results'+i).html('');
	}
	$('#buttons').html('');

	q = $('#query').val();
	
	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: 'edd37bcd78573bd6c7db2376590199f9',
		query: q},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			//array to store api results
			var net = [];
			//count the number of the results
			var counter = 0;
			
			console.log(data);
			
			$.each(data.results, function(r, result){
				var output = getOutputnet(result, counter);
				net.push(output);
				counter = counter + 1;
			});
			//assign each HTML object an api results
			for(var i=0; i<=30; i++){
				$('#results'+i).append(net[i]);
			}
		}
	);
}

function getOutputnet(result, counter){
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;
	
	//limit the word count in order to fit in the poster
	if(counter <= 2){
		if(description.length >= 200){
			description = description.substring(0,200)+"...";
		}
	}else if(counter > 2 && counter <= 8){
		if(description.length >= 100){
			description = description.substring(0,100)+"...";
		}
	}else if(counter > 8 && counter <= 14){
		if(description.length >= 40){
			description = description.substring(0,40)+"...";
		}
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
		
	}else if(counter > 14){
		description = description.substring(0,0)+"...";
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
	}
	
	//count the number of the results, the larger number is,the longer fade in time it is
	//and smaller size it is.
	if(counter == 0){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity1" src="net.png" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img class="w3-animate-opacity1" src="https://image.tmdb.org/t/p/w500'+poster+'" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 0 && counter <= 2 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity2" src="net.png" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img class="w3-animate-opacity2" src="https://image.tmdb.org/t/p/w500'+poster+'" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 2 && counter <= 8 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity3" src="net.png" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img class="w3-animate-opacity3" src="https://image.tmdb.org/t/p/w500'+poster+'" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 8 && counter <= 14 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity4" src="net.png" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img class="w3-animate-opacity4" src="https://image.tmdb.org/t/p/w500'+poster+'" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 14){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity5" src="net.png" width="80px" height="100px">'
			+'<h8>'+title+'</h8>' +
			'<h9>Released On '+videoDate+'</h9>' +
			'<h10>'+description+'</h10>'
		}else{
			var output =
			'<img class="w3-animate-opacity5" src="https://image.tmdb.org/t/p/w500'+poster+'" width="80px" height="100px">'
			+'<h8>'+title+'</h8>' +
			'<h9>Released On '+videoDate+'</h9>' +
			'<h10>'+description+'</h10>'
		}
	}
	
	return output;
}

function searchtagnet(keyword){

	for(var i=0; i<=30; i++){
		$('#results'+i).html('');
	}
	$('#buttons').html('');

	q = keyword;
	
	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: 'edd37bcd78573bd6c7db2376590199f9',
		query: q},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var net = [];
			var counter = 0;
			
			console.log(data);
			
			$.each(data.results, function(r, result){
				var output = getOutputnet(result, counter);
				net.push(output);
				counter = counter + 1;
			});
			for(var i=0; i<=30; i++){
				$('#results'+i).append(net[i]);
			}
		}
		
	);
}

//search anime function in net view
function searchanimenet(){
	for(var i=0; i<=30; i++){
		$('#results'+i).html('');
	}

	q = $('#query').val();
	
	$.get(
		'https://kitsu.io/api/edge/anime?filter[text] = '+ q +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var net = [];
			var counter = 0;
			
			console.log(data);
			
			$.each(data.data, function(r, result){
				var output = getOutputanimenet(result, counter);
				net.push(output);
				counter = counter + 1;
			});
			for(var i=0; i<=30; i++){
				$('#results'+i).append(net[i]);
			}
		}
		
	);
}

function getOutputanimenet(result, counter){
	var title = result.attributes.canonicalTitle;
	var description = result.attributes.synopsis;
	var poster = result.attributes.posterImage.medium;
	var videoDate = result.attributes.startDate;

	//limit the word count in order to fit in the poster
	if(counter <= 2){
		if(description.length >= 200){
			description = description.substring(0,200)+"...";
		}
	}else if(counter > 2 && counter <= 8){
		if(description.length >= 100){
			description = description.substring(0,100)+"...";
		}
	}else if(counter > 8 && counter <= 14){
		if(description.length >= 40){
			description = description.substring(0,40)+"...";
		}
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
		
	}else if(counter > 14){
		description = description.substring(0,0)+"...";
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
	}
	
	//count the number of the results, the larger number is,the longer fade in time it is
	//and smaller size it is.
	if(counter == 0){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity1" src="net.png" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img class="w3-animate-opacity1" src="'+poster+'" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 0 && counter <= 2 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity2" src="net.png" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img class="w3-animate-opacity2" src="'+poster+'" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 2 && counter <= 8 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity3" src="net.png" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img class="w3-animate-opacity3" src="'+poster+'" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 8 && counter <= 14 ){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity4" src="net.png" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img class="w3-animate-opacity4" src="'+poster+'" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 14){
		if(poster == null){
			var output =
			'<img class="w3-animate-opacity5" src="net.png" width="80px" height="100px">'
			+'<h8>'+title+'</h8>' +
			'<h9>Released On '+videoDate+'</h9>' +
			'<h10>'+description+'</h10>'
		}else{
			var output =
			'<img class="w3-animate-opacity5" src="'+poster+'" width="80px" height="100px">'
			+'<h8>'+title+'</h8>' +
			'<h9>Released On '+videoDate+'</h9>' +
			'<h10>'+description+'</h10>'
		}
	}
	
	return output;
}

function searchanimetagnet(keyword){
	//clean
	for(var i=0; i<=30; i++){
		$('#results'+i).html('');
	}

	q = keyword;
	
	$.get(
		'https://kitsu.io/api/edge/anime?filter[genres] = '+ q +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			var net = [];
			var counter = 0;
			
			console.log(data);
			
			$.each(data.data, function(r, result){
				var output = getOutputanimenet(result, counter);
				net.push(output);
				counter = counter + 1;
			});
			for(var i=0; i<=30; i++){
				$('#results'+i).append(net[i]);
			}
		}
		
	);
}