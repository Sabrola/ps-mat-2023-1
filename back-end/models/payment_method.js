'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
<<<<<<< HEAD
      type: DataTypes.STRING
    },
    operator_fee: {
      type: DataTypes.DECIMAL
=======
      type: DataTypes.STRING(30)
    },
    operator_fee: {
      type: DataTypes.DECIMAL(18, 2)
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
    },
  }, {
    sequelize,
    modelName: 'PaymentMethod',
    tableName: 'payment_methods'
  });
  return PaymentMethod;
};