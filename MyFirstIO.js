var fs = require('fs')
var filename = process.argv[2]
var text = fs.readFileSync(filename)
text = text.toString()
//console.log(text)

var another_text = text.split('\n')
another_text = another_text.slice(0,-1)			

//console.log(another_text)
console.log(another_text.length)		