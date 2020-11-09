'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario)
    }
  };
  Cita.init({
    id_cliente: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    observaciones: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    estado: DataTypes.ENUM('Pendiente', 'Finalizada')
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};