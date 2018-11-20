//api_key: edd37bcd78573bd6c7db2376590199f9


$(function(){
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
})

function search(){
	$('#results').html('');
	$('#buttons').html('');

	q = $('#query').val();
	
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

function getOutput(result){
	var title = result.title;
	var description = result.overview;
	var poster = result.poster_path;
	var videoDate = result.release_date;

	
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
	
	return output;
}



function searchtag(keyword){
	$('#results').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type: 'video',
			maxResults: 5,
		key: 'AIzaSyACKXDzqV-oux04qeZLl2APoutqjWVRmU0'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			$.each(data.items, function(i, item){
				var output = getOutput(item);
				
				$('#results').append(output);
			});
		}
		
	);
}
