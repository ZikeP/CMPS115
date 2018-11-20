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
			
			console.log(data);
			
			$.each(data.results, function(r, result){
				var output = getOutput(result);
				net.push(output);
			});
			$('#results').append(net[0]);
			$('#results1').append(net[1]);
			$('#results2').append(net[2]);
			$('#results3').append(net[3]);
			$('#results4').append(net[4]);
		}
		
	);
}

function getOutput(result){
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;

	
	var output =
	'<img src="https://image.tmdb.org/t/p/w500'+poster+'" width="100px" height="150px">'
	
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
