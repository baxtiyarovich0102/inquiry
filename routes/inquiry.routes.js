const express = require('express');
const router = express.Router();
const { createInquiry , startInquiry, completeInquiry } = require('../controllers/inquiry.controller');

router.post('/', createInquiry);
router.put('/:id/start', startInquiry);
router.put('/:id/complete', completeInquiry);


module.exports = router;