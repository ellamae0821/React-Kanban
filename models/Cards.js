module.exports = function(sequelize, DataTypes){
  var Card = sequelize.define('card', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by_id: DataTypes.INTEGER,
    assigned_to_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    priority_id: DataTypes.INTEGER
  },{
    timestamps: false
  })


  Card.associate = function(models){
    Card.belongsTo(models.user,
      {foreignKey: 'created_by_id', as: 'creator'}),
    Card.belongsTo(models.user,
      {foreignKey: 'assigned_to_id', as: 'assignee'}),
    Card.belongsTo(models.status,
      {foreignKey: 'status_id', as: 'status'}),
    Card.belongsTo(models.priority,
      {foreignKey: 'priority_id', as: 'priority'})
  }
  return Card;
}


