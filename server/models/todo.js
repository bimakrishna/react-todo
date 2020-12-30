'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.User)
      // define association here
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'title can not be empty'
        }
      }
    },
    description: {
     type: DataTypes.STRING,
     validate: {
       notEmpty: {
         args: true,
         msg: 'description can not be empty'
       }
     }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'status can not be empty'
        }
      }
    },
    due_date: {
     type: DataTypes.STRING,
     validate: {
       notEmpty: {
         args: true,
         msg: 'due_date can not be empty'
       }
     }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};