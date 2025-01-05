const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	  res.send('Hello World!')
	res.send('This is my first Demo app Deployment")
	res.send("for further update Please stay tuned to this page")
})

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})
