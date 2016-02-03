var http = require('http')
var url = process.argv[2]
var output = []
http.get(url, function(response){
    response.on("error", console.log(error))
    response.on("data", function (data){
        output.push(data.toString())
    })
    response.on("end", function(){
        console.log(output.join('').length)
        console.log(output.join(''))
    })
})

