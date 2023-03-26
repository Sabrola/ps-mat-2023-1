'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.TEXT
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  is_whatsapp: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  city_id: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};