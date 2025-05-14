const db = require('../models');
const Inquiry = db.Inquiry;

db.sequelize.sync();

exports.createInquiry = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newInquiry = await Inquiry.create({ title, description });
    res.status(201).json(newInquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.startInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByPk(id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    if (inquiry.status !== 'new') {
      return res.status(400).json({ message: 'Only inquiries with status "new" can be started' });
    }

    inquiry.status = 'in_progress';
    await inquiry.save();

    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.completeInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { solutionText } = req.body;

    const inquiry = await Inquiry.findByPk(id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    if (inquiry.status !== 'in_progress') {
      return res.status(400).json({ message: 'Only in-progress inquiries can be completed' });
    }

    inquiry.status = 'completed';
    inquiry.solutionText = solutionText;
    await inquiry.save();

    res.status(200).json(inquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.cancelInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { cancelReason } = req.body;

    const inquiry = await Inquiry.findByPk(id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    if (inquiry.status === 'completed' || inquiry.status === 'cancelled') {
      return res.status(400).json({ message: 'Cannot cancel a completed or already cancelled inquiry' });
    }

    inquiry.status = 'cancelled';
    inquiry.cancelReason = cancelReason;
    await inquiry.save();

    res.status(200).json(inquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.cancelAllInProgressInquiries = async (req, res) => {
  try {
    const { reason } = req.body;

    const [updatedCount] = await Inquiry.update(
      {
        status: 'cancelled',
        cancelReason: reason || 'Cancelled automatically'
      },
      {
        where: { status: 'in_progress' }
      }
    );

    res.status(200).json({
      message: `${updatedCount} inquiries were cancelled.`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};