const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => res.send('Hello World! update 123'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port} !`))