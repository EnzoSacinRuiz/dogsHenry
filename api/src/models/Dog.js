const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Define the model
  const Dog = sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });

  return Dog;
};
