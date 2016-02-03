var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function(request, response){
    if(request.method === 'POST'){
        request.pipe(map(function(body) {
            return body.toString().toUpperCase()
        })).pipe(response)
    }
    else {
        request.end("Send POST reuest")  
    }
})
server.listen(port)
