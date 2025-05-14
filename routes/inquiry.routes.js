const express = require('express');
const router = express.Router();
const { createInquiry , startInquiry, completeInquiry, cancelInquiry, cancelAllInProgressInquiries, getInquiries } = require('../controllers/inquiry.controller');

router.post('/', createInquiry);
router.put('/:id/start', startInquiry);
router.put('/:id/complete', completeInquiry);
router.put('/:id/cancel', cancelInquiry);
router.put('/cancel-all/in-progress', cancelAllInProgressInquiries);
router.get('/', getInquiries);


module.exports = router;