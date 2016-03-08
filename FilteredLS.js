var fs = require('fs')
fs.readdir(process.argv[2],function(err,data){
	if(err) {
		throw err
	}
	for(var i = 0; i < data.length; i++) {
		//console.log(data[i])
		if(data[i].indexOf("." + process.argv[3]) != -1) {
			console.log(data[i])
		}
	}
});

