/*module.exports = function (sequelize, DataTypes){
  var Status = sequelize.define('status', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
/*  Status.associate = function(models){
    Status.belongsTo(models.card, {foreignKey: 'status'})
  }
}*/
module.exports = function (sequelize, DataTypes) {
  var Status = sequelize.define('status', {
    name: {
      type: DataTypes.STRING,
      allowNull: false}
  }, {
    timestamps: false
  });
  return Status;
};
