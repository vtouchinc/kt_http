const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	console.log( "get " + Date.now()  + req.connection.remoteAddress);
	setTimeout( ()=>{
  res.send('Hello World!')
	},1000);
})

app.post('/', (req, res) => {
	//console.log( "post " + Date.now()  + req.connection.remoteAddress);
  //res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
