'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity.init({
    activitiesNo: DataTypes.STRING,
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.ENUM("Unmarked","Canceled","Done")
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};