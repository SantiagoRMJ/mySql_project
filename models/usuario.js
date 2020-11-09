'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cita)
    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    covid: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};