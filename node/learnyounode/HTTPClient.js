var http = require('http')
var url = process.argv[2]

http.get(url, function(response){
    response.setEncoding('utf8')
    response.on("error", handleError)
    response.on("data", handleData)
})

function handleError(error){
    console.log(error)
}

function handleData(data){
 console.log(data)
}   
