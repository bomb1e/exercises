var fs = require('fs')
var p = require('path')
function filterList(dir, ext, callback){
    fs.readdir(dir, function filter(error, data){
    var list = []
    if(error) return callback(error)
    for(i in data) if((p.extname(data[i])) === ('.' + ext)) list.push(data[i])
	return callback(null, list)
	})
}

module.exports = filterList
