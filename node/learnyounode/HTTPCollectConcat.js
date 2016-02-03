var http = require('http')
var cs = require('concat-stream')
var url = process.argv[2]
http.get(url, function(response){
    response.on('error', function(error){
         console.log(error)
    })
    response.pipe(cs(function(data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
