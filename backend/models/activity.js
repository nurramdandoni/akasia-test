"use strict";
const { Model } = require("sequelize");
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
  Activity.init(
    {
      activitiesNo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      subject: DataTypes.STRING,
      description: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM("Unmarked", "Canceled", "Done"),
        defaultValue: "Unmarked",
      },
    },
    {
      sequelize,
      modelName: "Activity",
      hooks: {
        beforeCreate: async (activity, options) => {
          const lastActivity = await Activity.findOne({
            order: [["id", "DESC"]],
          });

          let nextNumber = 1; // Default jika tidak ada catatan sebelumnya
          if (lastActivity) {
            const lastNumber = parseInt(
              lastActivity.activitiesNo.split("-")[1]
            );
            nextNumber = lastNumber + 1;
          }

          activity.activitiesNo = `AC-${String(nextNumber).padStart(4, "0")}`;

          // Log untuk memastikan activitiesNo di-generate
          console.log(`Generated activitiesNo: ${activity.activitiesNo}`);
        },
      },
    }
  );
  return Activity;
};
