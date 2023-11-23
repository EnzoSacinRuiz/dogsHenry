const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Define the model
  const Temperament = sequelize.define('Temperament', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Temperament;
};
