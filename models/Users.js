module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    //tableName: 'users'
  });

  User.associate = function(models){
    User.hasMany(models.card, {
      foreignKey: 'creator_to'
    }),
    User.hasMany(models.card, {
      foreignKey: 'assigned_to'
    })
  }
  return User;
}




  //card has one status
  //status belongto many cards