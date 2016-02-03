var net = require('net')
var port = process.argv[2]

net.createServer(function(socket){
    var date = new Date()
    data = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n"
    socket.end(data)
}).listen(port)
