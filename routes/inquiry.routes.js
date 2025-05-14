const express = require('express');
const router = express.Router();
const { createInquiry , startInquiry, completeInquiry, cancelInquiry, cancelAllInProgressInquiries } = require('../controllers/inquiry.controller');

router.post('/', createInquiry);
router.put('/:id/start', startInquiry);
router.put('/:id/complete', completeInquiry);
router.put('/:id/cancel', cancelInquiry);
router.put('/cancel-all/in-progress', cancelAllInProgressInquiries);


module.exports = router;