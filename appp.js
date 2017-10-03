var express = require('express'),
    app = express();

app.use(express.static('public'));

// app.listen(3000);
// console.log('Server running on port 3000..');


 const hostname = '127.0.0.1';
 const port = 3000;

// app.use(express.static('../public'));


 app.listen(port,hostname,() =>{
	console.log(`Server running at http://${hostname}:${port}/`);
 });
// fs.readFile('index.html',(err,html) =>{
// 	if(err){
// 		throw err;
// 	}
// 	const server = http.createServer((req, res) => {
// 		res.statusCode = 200;
// 		res.setHeader('Content-Type', 'text/html');
// 		res.write(html);
// 		res.end();
// 	});

// 	server.listen(port, hostname, () => {
// 		console.log(`Server running at http://${hostname}:${port}/`);
// 	});
// });