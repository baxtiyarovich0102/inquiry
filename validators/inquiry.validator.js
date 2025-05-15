const { body } = require('express-validator');

const createInquiryValidator = [
  body('title')
    .notEmpty()
    .withMessage('Title is required'),
  body('description')
    .notEmpty()
    .withMessage('Description is required'),
];

const completeInquiryValidator = [
  body('solutionText')
    .notEmpty()
    .withMessage('Solution text is required'),
];

const cancelInquiryValidator = [
  body('cancelReason')
    .notEmpty()
    .withMessage('Cancellation reason is required'),
];

const handleValidationErrors = (req, res, next) => {
  const { validationResult } = require('express-validator');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  createInquiryValidator,
  completeInquiryValidator,
  cancelInquiryValidator,
  handleValidationErrors,
};
