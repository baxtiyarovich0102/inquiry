const express = require('express');
const router = express.Router();

const {
  createInquiry,
  startInquiry,
  completeInquiry,
  cancelInquiry,
  cancelAllInProgressInquiries,
  getInquiries
} = require('../controllers/inquiry.controller');

const {
  createInquiryValidator,
  completeInquiryValidator,
  cancelInquiryValidator,
  handleValidationErrors
} = require('../validators/inquiry.validator');


router.post('/', createInquiryValidator, handleValidationErrors, createInquiry);

router.put('/:id/start', startInquiry);

router.put('/:id/complete', completeInquiryValidator, handleValidationErrors, completeInquiry);

router.put('/:id/cancel', cancelInquiryValidator, handleValidationErrors, cancelInquiry);

router.put('/cancel-all/in-progress', cancelAllInProgressInquiries);

router.get('/', getInquiries);

module.exports = router;
