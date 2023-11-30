const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DogTemperament = sequelize.define('DogTemperament', {
   
    DogId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    TemperamentId: {
        type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },

   
  },
  { freezeTableName: true}
  );

  return DogTemperament;
};
