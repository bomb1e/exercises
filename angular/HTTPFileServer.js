var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var uri = process.argv[3]
var url = require('url')
var server = http.createServer(function(request, response){
    if(url.parse(request.url, true).pathname === '/api/people'){
     var stream = fs.createReadStream(uri)
     stream.pipe(response)              
    }
})
server.listen(port)
