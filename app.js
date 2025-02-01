import bodyParser from 'body-parser'
import express from 'express'
import { showNumberIsPositive } from './satge1/task1-1.js'
import { showLength } from './satge1/task1-2.js'
import { showLastSymbol } from './satge1/task1-3.js'
import { showNumberIsEven } from './satge1/task1-4.js'
import { showEqualityFirstCharInWords } from './satge1/task1-5.js'
import { showLastCharExceptSoftSign } from './satge1/task1-6.js'
import { showFirstCharOfNumber } from './stage2/task2-1.js'
import { showLastCharOfNumber } from './stage2/task2-2.js'
import { showSumOfFirstAndLastCharOfNumber } from './stage2/task2-3.js'
import { showQuantityOfNumbers } from './stage2/task2-4.js'

const app = express()
const port = 3000
const { json } = bodyParser

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var x = {
  "name": "valera",
  "age": 30
}

let handleNumberIsPositive = (req, res) => {
  console.log("hi: ", req.query)
  let value = showNumberIsPositive(Number(req.query.number))
  res.send(value)
}

app.get('/chek-number-is-positive', handleNumberIsPositive)

let handleShowLength = (req, res) => {
  console.log("hi: ", req.query)
  let value = showLength(req.query.str)
  res.send('string length = ' + value)
}

app.get('/chek-string-length', handleShowLength)

let handleLastSymbol = (req, res) => {
  console.log("hi: ", req.query)
  let value = showLastSymbol(req.query.str)
  res.send('last symbol of the string is: ' + value)
}

app.get('/chek-last-symbol', handleLastSymbol)

let handleNumberIsEven = (req, res) => {
  console.log("hi: ", req.query)
  let value = showNumberIsEven(Number(req.query.number))
  res.send(value)
}

app.get('/chek-number-is-even', handleNumberIsEven)

let handelEqualityFirstCharInWords = (req, res) => {
  console.log("hi: ", req.query)
  let value = showEqualityFirstCharInWords(req.query.x, req.query.y, Number(req.query.index_to_check))
  res.send(value)
}

app.get('/chek-equality-first-char-in-words', handelEqualityFirstCharInWords)

let handleLastCharExceptSoftSign = (req, res) => {
  console.log("hi: ", req.query)
  let value = showLastCharExceptSoftSign(String(req.query.str))
  res.send(value)
}

app.get('/chek-last-char-expect-soft-sign', handleLastCharExceptSoftSign)

let handleFirstCharOfNumber = (req, res) => {
  console.log("hi: ", req.query)
  let value = showFirstCharOfNumber(req.query.num)
  res.send(value)
}

app.get('/chek-first-char-of-number', handleFirstCharOfNumber)

let handleLastCharOfNumber = (req, res) => {
  console.log("hi: ", req.query)
  let value = showLastCharOfNumber(req.query.num)
  res.send(value)
}

app.get('/chek-last-char-of-number', handleLastCharOfNumber)

let handleSumOfFirstAndLastCharOfNumber = (req, res) => {
  console.log("hi: ", req.query)
  let value = showSumOfFirstAndLastCharOfNumber(req.query.num)
  res.send(value)
}

app.get('/chek-sum-of-first-and-last-char-of-number', handleSumOfFirstAndLastCharOfNumber)

let handleQuantityOfNumbers = (req, res) => {
  console.log("hi: ", req.query)
  let value = showQuantityOfNumbers(req.query.num)
  res.send(value)
}

app.get('/chek-quantity-of-numbers', handleQuantityOfNumbers)


app.get('/kek', (req, res) => {
  res.send(JSON.stringify(x))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
