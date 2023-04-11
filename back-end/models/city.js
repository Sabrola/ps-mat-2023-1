'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      // define association here
=======
      this.hasMany(models.Customer, {
        foreignKey: 'city_id',    // Campo da tabela estrangeira
        sourceKey: 'id',          // Campo da tabela local
        as: 'customers'           // Nome do campo de associação (plural)
      })
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
    }
  }
  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
<<<<<<< HEAD
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.CHAR
    }
=======
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'cities'
  });
  return City;
};