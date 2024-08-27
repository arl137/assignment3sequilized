const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Todo = sequelize.define('Todo', {
    task: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Todo;
};
