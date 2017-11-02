/*module.exports = function (sequelize, DataTypes){
  var Priority = sequelize.define('priority', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Priority;
}*/

module.exports = function (sequelize, DataTypes) {
  var Priority = sequelize.define('priority', {
    name: {
      type: DataTypes.STRING,
      allowNull: false}
  }, {
    timestamps: false
  });
  return Priority;
};
