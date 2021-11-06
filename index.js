const express = require('express')
const app = express()
const port = 8080

let lock = false;

app.get('/', (req, res) => {

	console.log( "get " + Date.now()  + req.connection.remoteAddress);
	
	let xt = 1;
	for( let i = 1; i < 10000000000 ; i ++){
		xt = xt * i;
	}
  res.send('Hello World!')
})

//app.post('/', (req, res) => {
	//console.log( "post " + Date.now()  + req.connection.remoteAddress);
  //res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
