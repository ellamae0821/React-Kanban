module.exports = function(sequelize, DataTypes){
  var Card = sequelize.define('card', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
/*    priority_type:{
      type: DataTypes.STRING,
      references:{
        model: "priority",
        key: "id",
        allowNull: false
      }
    },

    status_type:{
      type: DataTypes.STRING,
      references:{
        model: "status",
        key: "id",
        allowNull: false
      }
    },

    created_by: {
      type:DataTypes.STRING,
      references: {
        model: "users",
        key: "name",
        allowNull: false
      }
    },

    assigned_to: {
      type:DataTypes.STRING,
      references: {
        model: "users",
        key: "name",
        allowNull: false
      }
    }
    //tableName: 'cards'
  })*/

  Card.associate = function(models){
    Card.belongsTo(models.user, {foreignKey: 'created_by', constraints: false}),
    Card.belongsTo(models.user, {foreignKey: 'assigned_to', constraints: false}),
    Card.hasOne(models.status, {foreignKey: 'status_id', constraints: false}),
    Card.hasOne(models.priority, {foreignKey: 'priority_id', constraints: false})
  }
  return Card;
}


