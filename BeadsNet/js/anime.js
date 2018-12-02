//The api implementation of anime page 
//Using Kitsu api for database


$(function(){
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
})

function search(){
	$('#results').html('');
	$('#buttons').html('');

	q = $('#query').val();
	text = "text";

	$.get(
		//search anime from kitsu api database
		'https://kitsu.io/api/edge/anime?filter[text] = '+ q +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			//for each anime, get the data and call getOutput for a nice layout
			$.each(data.data, function(r, result){
				var output = getOutput(result);
				$('#results').append(output);
			});
		}
		
	);
}

function getOutput(result){
	//get elements from api array 
	var title = result.attributes.canonicalTitle;
	var description = result.attributes.synopsis;
	var poster = result.attributes.posterImage.medium;
	var videoDate = result.attributes.startDate;

	
	var output = '<li>' +
	'<div class = "list-left">' +
	'<img src="'+poster+'">' +
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


function searchanimetag(keyword){
	$('#results').html('');
	$('#buttons').html('');

	q = keyword;

	$.get(
		'https://kitsu.io/api/edge/anime?filter[genres] = '+ q +'',
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			console.log(data);
			
			$.each(data.data, function(r, result){
				var output = getOutput(result);
				$('#results').append(output);
			});
		}
		
	);
}
