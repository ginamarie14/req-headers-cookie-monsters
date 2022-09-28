const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IBSN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    library_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Books;
