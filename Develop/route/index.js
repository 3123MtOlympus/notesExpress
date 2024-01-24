const router = require('express').Router();

// Import our modular routers for /tips and /feedback
// const indexRouter = require('./');
const notesRouter = require('./notes');


// router.use('/index', indexRouter);
router.use('/notes', notesRouter);


module.exports = router;
