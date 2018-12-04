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
		'https://kitsu.io/api/edge/anime?filter[text] = '+ q +'page[limit]=5&page[offset]='+ animepage +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			totalpages = data.meta.count;
			//for each anime, get the data and call getOutput for a nice layout
			$.each(data.data, function(r, result){
				var output = getOutputanime(result);
				$('#tableresults').append(output);
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

function getOutputanime(result){
	//get elements from api array 
	var title = result.attributes.canonicalTitle;
	var description = result.attributes.synopsis;
	var poster = result.attributes.posterImage.medium;
	var videoDate = result.attributes.startDate;
	if(description.length > 495){
		description = description.substring(0,495)+"...";
	}

	if(poster == null){
		var output = '<li>' +
		'<div class = "list-left">' +
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
		'<div class = "list-left">' +
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
			
			console.log(data);
			
			$.each(data.data, function(r, result){
				var output = getOutputanime(result);
				$('#tableresults').append(output);
			});
		}
		
	);
}

function nextanimepage(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class = "button-container">'+'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "searchanime();">Next</button></div>';
		animepage = animepage + 10;
	}else{
		var btnoutput = '<div class = "button-container">'+
		'<button id = "next-button" data-token = "'+prevPageToken+'" data-query ="'+q+'" onclick = "prevPage();">Last Page </button></div>' +
		'<button id = "next-button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "nextPage();">Next Page </button></div>';
	}

	return btnoutput;
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
			
			console.log(data);
			var total_page = data.total_pages; 			
			$.each(data.results, function(r, result){
				var output = getOutputmovie(result);
				$('#tableresults').append(output);
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


function getOutputmovie(result){
	//get elements from api array 
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;
	if(description.length > 495){
		description = description.substring(0, 495)+"...";
	}

	
	if(poster == null){
		var output = '<li>' +
		'<div class = "list-left">' +
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
		'<div class = "list-left">' +
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
			
			console.log(data);	
			$.each(data.results, function(r, result){
				var output = getOutputmovie(result);
				$('#tableresults').append(output);
			});

		}
		
	);
}
// function for filp to next page
function nextpage(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class = "button-container">'+'<button id = "next-button" class = "button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "nextPage(), search();">Next</button></div>';
		p = p + 1;
	}else{
		var btnoutput = '<div class = "button-container">'+
		'<button id = "next-button" data-token = "'+prevPageToken+'" data-query ="'+q+'" onclick = "prevPage();">Last Page </button></div>' +
		'<button id = "next-button" data-token = "'+nextPageToken+'" data-query ="'+q+'" onclick = "nextPage();">Next Page </button></div>';
	}

	return btnoutput;
}


//implementation of search function in net view

function searchnet(){
	$('#results').html('');
	$('#results1').html('');
	$('#results2').html('');
	$('#results3').html('');
	$('#results4').html('');
	$('#results5').html('');
	$('#results6').html('');
	$('#results7').html('');
	$('#results8').html('');
	$('#results9').html('');
	$('#results10').html('');
	$('#results11').html('');
	$('#results12').html('');
	$('#results13').html('');
	$('#results14').html('');
	$('#buttons').html('');

	q = $('#query').val();
	
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
			$('#results').append(net[0]);
			$('#results1').append(net[1]);
			$('#results2').append(net[2]);
			$('#results3').append(net[3]);
			$('#results4').append(net[4]);
			$('#results5').append(net[5]);
			$('#results6').append(net[6]);
			$('#results7').append(net[7]);
			$('#results8').append(net[8]);
			$('#results9').append(net[9]);
			$('#results10').append(net[10]);
			$('#results11').append(net[11]);
			$('#results12').append(net[12]);
			$('#results13').append(net[13]);
			$('#results14').append(net[14]);
		}
		
	);
}

function getOutputnet(result, counter){
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;
	if(counter <= 2){
		if(description.length >= 315){
			description = description.substring(0,315)+"...";
		}
	}else if(counter > 2 && counter <= 8){
		if(description.length >= 250){
			description = description.substring(0,250)+"...";
		}
	}else if(counter > 8 && counter <= 14){
		if(description.length >= 100){
			description = description.substring(0,100)+"...";
		}
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
		
	}
	
	if(counter == 0){
		if(poster == null){
			var output =
			'<img src="net.png" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 0 && counter <= 2 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 2 && counter <= 8 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 8 && counter <= 14 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}
	
	return output;
}

function searchtagnet(keyword){

	$('#results').html('');
	$('#results1').html('');
	$('#results2').html('');
	$('#results3').html('');
	$('#results4').html('');
	$('#results5').html('');
	$('#results6').html('');
	$('#results7').html('');
	$('#results8').html('');
	$('#results9').html('');
	$('#results10').html('');
	$('#results11').html('');
	$('#results12').html('');
	$('#results13').html('');
	$('#results14').html('');
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
			$('#results').append(net[0]);
			$('#results1').append(net[1]);
			$('#results2').append(net[2]);
			$('#results3').append(net[3]);
			$('#results4').append(net[4]);
			$('#results5').append(net[5]);
			$('#results6').append(net[6]);
			$('#results7').append(net[7]);
			$('#results8').append(net[8]);
			$('#results9').append(net[9]);
			$('#results10').append(net[10]);
			$('#results11').append(net[11]);
			$('#results12').append(net[12]);
			$('#results13').append(net[13]);
			$('#results14').append(net[14]);
		}
		
	);
}

//search anime function in net view
function searchanimenet(){
	$('#results').html('');
	$('#results1').html('');
	$('#results2').html('');
	$('#results3').html('');
	$('#results4').html('');
	$('#results5').html('');
	$('#results6').html('');
	$('#results7').html('');
	$('#results8').html('');
	$('#results9').html('');
	$('#results10').html('');
	$('#results11').html('');
	$('#results12').html('');
	$('#results13').html('');
	$('#results14').html('');
	$('#buttons').html('');

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
			$('#results').append(net[0]);
			$('#results1').append(net[1]);
			$('#results2').append(net[2]);
			$('#results3').append(net[3]);
			$('#results4').append(net[4]);
			$('#results5').append(net[5]);
			$('#results6').append(net[6]);
			$('#results7').append(net[7]);
			$('#results8').append(net[8]);
			$('#results9').append(net[9]);
			$('#results10').append(net[10]);
			$('#results11').append(net[11]);
			$('#results12').append(net[12]);
			$('#results13').append(net[13]);
			$('#results14').append(net[14]);
		}
		
	);
}

function getOutputanimenet(result, counter){
	var title = result.attributes.canonicalTitle;
	var description = result.attributes.synopsis;
	var poster = result.attributes.posterImage.medium;
	var videoDate = result.attributes.startDate;

	if(counter <= 2){
		if(description.length >= 315){
			description = description.substring(0,315)+"...";
		}
	}else if(counter > 2 && counter <= 8){
		if(description.length >= 250){
			description = description.substring(0,250)+"...";
		}
	}else if(counter > 8 && counter <= 14){
		if(description.length >= 100){
			description = description.substring(0,100)+"...";
		}
		if(title.length >= 25){
			title = title.substring(0,25)+"...";
		}
		
	}
	
	if(counter == 0){
		if(poster == null){
			var output =
			'<img src="net.png" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img src="'+poster+'" width="200px" height="350px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 0 && counter <= 2 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}else{
			var output =
			'<img src="'+poster+'" width="170px" height="250px">'
			+'<h2>'+title+'</h2>' +
			'<h4>Released On '+videoDate+'</h4>' +
			'<h3>'+description+'</h3>'
		}
	}else if(counter > 2 && counter <= 8 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img src="'+poster+'" width="150px" height="200px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}else if(counter > 8 && counter <= 14 ){
		if(poster == null){
			var output =
			'<img src="net.png" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}else{
			var output =
			'<img src="'+poster+'" width="115px" height="150px">'
			+'<h5>'+title+'</h5>' +
			'<h7>Released On '+videoDate+'</h7>' +
			'<h6>'+description+'</h6>'
		}
	}
	
	return output;
}

function searchanimetagnet(keyword){

	$('#results').html('');
	$('#results1').html('');
	$('#results2').html('');
	$('#results3').html('');
	$('#results4').html('');
	$('#results5').html('');
	$('#results6').html('');
	$('#results7').html('');
	$('#results8').html('');
	$('#results9').html('');
	$('#results10').html('');
	$('#results11').html('');
	$('#results12').html('');
	$('#results13').html('');
	$('#results14').html('');
	$('#buttons').html('');

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
			$('#results').append(net[0]);
			$('#results1').append(net[1]);
			$('#results2').append(net[2]);
			$('#results3').append(net[3]);
			$('#results4').append(net[4]);
			$('#results5').append(net[5]);
			$('#results6').append(net[6]);
			$('#results7').append(net[7]);
			$('#results8').append(net[8]);
			$('#results9').append(net[9]);
			$('#results10').append(net[10]);
			$('#results11').append(net[11]);
			$('#results12').append(net[12]);
			$('#results13').append(net[13]);
			$('#results14').append(net[14]);
		}
		
	);
}