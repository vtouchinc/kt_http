const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
	console.log( "get " + Date.now() );
  res.send('Hello World!')
})

app.post('/', (req, res) => {
	console.log( "post " + Date.now() );
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
