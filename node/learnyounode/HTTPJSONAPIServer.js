var http = require('http')
var url = require('url')
var port = process.argv[2]
var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'})
    if(request.method !== 'GET') request.end('Send GET')
    if((url.parse(request.url, true).pathname) === '/api/parsetime') {
        var date = new Date(url.parse(request.url, true).query.iso.toString())
        response.write(JSON.stringify({ "hour":date.getHours(),"minute":date.getMinutes(),"second": date.getSeconds()}))
        response.end()
    }
    else if((url.parse(request.url, true).pathname) === '/api/unixtime'){
        var date = (new Date(url.parse(request.url,true).query.iso.toString())).getTime()
        response.write(JSON.stringify({ "unixtime": date}))
        response.end()
    }
})
server.listen(port)
