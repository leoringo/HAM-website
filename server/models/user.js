'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {foreignKey: 'authorId'})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email must be unique'},
      validate: {
        notNull: {msg: 'Email cannot be empty!'},
        notEmpty: {msg: 'Email cannot be empty!'},
        isEmail: {msg: 'Check your email format!'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Password cannot be empty!'},
        notEmpty: {msg: 'Password cannot be empty!'},
        min: {
          args: 5,
          msg: 'Password minimal 5 characters!'
        }
      }
    },
    role: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (i) => {
        i.password = require('bcryptjs').hashSync(i.password, 5)
        i.role = 'admin'
      },
    }
  });
  return User;
};