// This uses node.js and client side HTML5 integrations (Client JS included)
// The router is default Express routing with basic get requests.
// I am not too into node.js so I will use plain MySQL with this application instead of NoSQL, etc. which may be more suitable.
// If you are looking to make an adaptation please make some pull requests or fork the repo and build onto it on your own
// DreamingCoders


const express = require('express')
const app = express()
const port = 3000

var tradeId = "255"; // make this work through the user in db schema

app.get('/transaction/' + tradeId '', (req, res) => {
  res.send('Foobar')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
