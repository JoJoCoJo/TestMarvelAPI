var rootURL = 'http://gateway.marvel.com/v1/public/'
var apiKeyPublic = '26a81b54082b88e0e8e5baed14a0093f'
var apiKeyPrivate = '1e019543211f21b4421599360379f3e8376b1c91'
var ts = Date.now()

var hash = $.md5(ts + apiKeyPrivate + apiKeyPublic)

$(document).ready(function(){

	rootURL = rootURL+'characters?apikey='+apiKeyPublic+'&ts='+ts+'&hash='+hash
	console.log('urlMarvel >>>', rootURL)
	
	$.ajax({
		
		url: rootURL

	}).done(function(response){
		
		console.log(response)

	})
})
