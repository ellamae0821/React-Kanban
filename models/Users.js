module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
  },{
    timestamps: false
  });

  User.associate = function(models){
    User.hasMany(models.card,
      {foreignKey: 'created_by_id', as: 'cards'});
    User.hasMany(models.card,
      {foreignKey: 'assigned_to_id', as: 'tasks'});
  }
  return User;
}


