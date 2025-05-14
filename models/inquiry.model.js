module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Inquiry', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('new', 'in_progress', 'completed', 'cancelled'),
      defaultValue: 'new',
    },
    solutionText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cancelReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};