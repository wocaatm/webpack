var express = require('express')

var history =  require('connect-history-api-fallback')

var path = require('path')

var app = express()

app.use(history({
	index: './dist/moduleA.html'
}))

app.use(express.static(path.join(__dirname, 'dist')))

// app.get('./dist/moduleA.html', function (req, res) {
// 	fs.readFile('moduleA.html', 'utf-8', (err, content) => {
// 		if (err) {
// 		  console.log('We cannot open "index.htm" file.')
// 		}
	
// 		res.writeHead(200, {
// 		  'Content-Type': 'text/html; charset=utf-8'
// 		})
	
// 		res.end(content)
// 	  })
// })

app.listen(8006, function () {
	console.log('server start at localhost:8004')
})