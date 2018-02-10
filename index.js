const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createVisitor', (req, res) => {
  store
    .createVisitor({
      fullname: req.body.fullname,
      mobilenum: req.body.mobilenum,
      nricnum: req.body.nricnum
    })
    .then(() => res.sendStatus(200))
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})
