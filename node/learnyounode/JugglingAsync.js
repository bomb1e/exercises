var http = require('http')
var bl = require('bl')
var urls = [process.argv[2],process.argv[3],process.argv[4]]
var cbCount = 0;
var datas = []
http.get(urls[0], function(response){
    response.pipe(bl(function(error, data){
        if(error) console.log(error)
        datas[0] = data.toString()
        cbCount++
        if(cbCount === 3) {
            for(i in datas) console.log(datas[i])
        }
    }))
})

http.get(urls[1], function(response){
    response.pipe(bl(function(error, data){
        if(error) console.log(error)
        datas[1] = data.toString()
        cbCount++
        if(cbCount === 3) {
            for(i in datas) console.log(datas[i])
        }
    }))
})


http.get(urls[2], function(response){
    response.pipe(bl(function(error, data){
        if(error) console.log(error)
        datas[2] = data.toString()
        cbCount++
        if(cbCount === 3) {
            for(i in datas) console.log(datas[i])
        }
    }))
})
