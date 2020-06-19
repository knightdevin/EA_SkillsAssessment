const router = require('express').Router()
module.exports = router

// router.use('/users', require('./users'))

// schools mounted on api/schools
router.use('/schools', require('./schools'))

// // pdf mounted on api/pdf
// router.use('/pdf', require('./pdf'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
