var fs = require('fs')
var p = require('path')
var dir = process.argv[2]
var filter = process.argv[3]

fs.readdir(dir, processList)

function processList(err, list){
	if(err) throw err
	for(i = 0; i < list.length; i++)
		if((p.extname(list[i])) === ('.'+filter)) console.log(list[i])
 }
