const express = require('express');
const router = express.Router();
const { createInquiry , startInquiry } = require('../controllers/inquiry.controller');

router.post('/', createInquiry);
router.put('/:id/start', startInquiry);


module.exports = router;