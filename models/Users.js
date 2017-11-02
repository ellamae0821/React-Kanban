module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },{
    timestamps: false
  });

  User.associate = function(models){
    User.hasMany(models.card, {
      as:'creator',
      foreignKey: 'created_by'
    }),
    User.hasMany(models.card, {
      as: 'assignee',
      foreignKey: 'assigned_to'
    })
  }
  return User;
}


