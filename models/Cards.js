module.exports = function(sequelize, DataTypes){
  var Card = sequelize.define('card', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    timestamps: false
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
    Card.belongsTo(models.user, {
      foreignKey: {
        as: 'creator',
        name: 'created_by',
        allowNull: false
      },
      targetKey: 'name'}),
    Card.belongsTo(models.user, {
      foreignKey: {
        as: 'assignee',
        name: 'assigned_to',
        allowNull: false
      },
      targetKey: 'name'}),
    Card.belongsTo(models.status, {foreignKey: {
      name: 'status_id',
      allowNull: false}}),
    Card.belongsTo(models.priority, {foreignKey: {
      name:'priority_id',
      allowNull: false}})
  }
  return Card;
}


