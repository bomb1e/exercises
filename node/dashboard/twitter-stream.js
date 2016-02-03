var Twitter = require('twitter')
var http = require('http')
var port = process.argv[2]
var map = require('through2-map')
var client = new Twitter({
  consumer_key: 'maSQX19hLkIWQR2DaQ2hKyK88',
  consumer_secret: '3LUuLaBb9usTz7jnui9kU4s0yjG4ckmATXUKgcoLubTNYdrkWL', 
  access_token_key: '30835049-xUF1YMeL3k0Li6mJ7g7jZcpFKdC2gsbkWcuKlyZ4m',
  access_token_secret: 'kpOlpiUZ9HBJ4R6TXsIPY815GWUY99YX9DMo8UP1JqaLs'
});
var Readable = require('stream').Readable;

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'application/json'})
    client.stream('statuses/filter', {track: 'eritrea'},  function(stream){
        stream.on('data', function(tweet) {    
            console.log(tweet.text);
            response.json({"tweet": tweet.text})
            response.end()
        })

        stream.on('error', function(error) {
            response.end();
            console.log(error);
        });
    });
});


server.listen(port);
