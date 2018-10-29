const express = require('express');
const router = express.Router();
const collectionRouter = require('./collections');
const discRouter = require('./discs');

router.use('/collections', collectionRouter);
router.use('/discs', discRouter);

module.exports = router
