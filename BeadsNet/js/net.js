//Themoviedatabase api implementation
//For search movies 
//api_key: edd37bcd78573bd6c7db2376590199f9


$(function(){
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
})

function search(){
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
				var output = getOutput(result, counter);
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

function getOutput(result, counter){
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;
	
	if(counter == 0){
		var output =
		'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="200px" height="350px">'
	}else if(counter > 0 && counter <= 2 ){
		var output =
		'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="170px" height="250px">'
	}else if(counter > 2 && counter <= 8 ){
		var output =
		'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="150px" height="200px">'
	}else if(counter > 8 && counter <= 14 ){
		var output =
		'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="115px" height="150px">'
	}
	
	return output;
}

function searchtag(keyword){
	$('#results').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: 'edd37bcd78573bd6c7db2376590199f9',
		query: q},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			$.each(data.results, function(r, result){
				var output = getOutput(result);
				$('#results').append(output);
			});
		}
		
	);
}

function searchanimetag(keyword){
	$('#results').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		"https://api.themoviedb.org/3/search/movie?",{
		api_key: 'edd37bcd78573bd6c7db2376590199f9',
		query: q},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			$.each(data.results, function(r, result){
				var output = getOutput(result);
				$('#results').append(output);
			});
		}
		
	);
}

/*
var output = '<li>' +
	'<div class = "list-left">' +
	'<img src="https://image.tmdb.org/t/p/w500'+poster+'">' +
	'<button>'+ '<i class="fa fa-heart">'+'</i>'+'</button>' +
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
*/
