import bodyParser from 'body-parser'
import express from 'express'
import {showNumberIsPositive} from './satge1/task1-1.js'
const app = express()
const port = 3000
const {json}=bodyParser

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var x = {
  "name": "valera",
  "age": 30
}
let handler = (req, res) => {
  console.log("hi: ", req.query)
  let value = showNumberIsPositive(Number(req.query.number))
  res.send(value)
}
app.get('/chek-number-is-positive', handler)

app.get('/kek', (req, res) => {
  res.send(JSON.stringify(x))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
