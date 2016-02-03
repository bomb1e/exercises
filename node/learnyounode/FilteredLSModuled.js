var fl = require('./filterlist')
var dir = process.argv[2]
var ext = process.argv[3]
fl(dir, ext, printList) 

function printList(err, data){
    if(err) console.log(err)
    for(i in data) console.log(data[i])
}
