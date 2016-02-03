var fs = require('fs')
var file = process.argv[2]
fs.readFile(file, processData)

function processData(error, data){
	if(error) console.log(error)
	console.log(data.toString().split('\n').length - 1)
}

