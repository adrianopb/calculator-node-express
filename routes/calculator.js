var express = require('express')
var calculator = require('../calculator')
var router = express.Router()

router.get('/sum', async function(req, res, next) {
  try {
      result = await calculator.sum(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Soma',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '+',
        result: result,
      }

      res.render('calculator', renderJSON)
  }
  catch(e) {
    res.render('error', e)
  }
})

router.get('/sub', async function(req, res, next) {
  try {
      result = await calculator.sub(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Subtração',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '-',
        result: result,
      }

      res.render('calculator', renderJSON)
  }
  catch(e) {
    res.render('error', e)
  }
})

router.get('/div', async function(req, res, next) {
  try {
      result = await calculator.div(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Divisão',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '/',
        result: result,
      }

      res.render('calculator', renderJSON)
  }
  catch(e) {
    res.render('error', e)
  }
})

router.get('/mult', async function(req, res, next) {
  try {
      result = await calculator.mult(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Multiplicação',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '*',
        result: result,
      }

      res.render('calculator', renderJSON)
  }
  catch(e) {
    res.render('error', e)
  }
})

module.exports = router
