const encrypt = require(`${__HELPERS}/bcrypt`);
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Profile, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        require: true,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: true,
    },
  );

  User.addHook('beforeCreate', async dao => {
    dao.dataValues.password = await encrypt.crypto(dao.dataValues.password);
  });

  User.addHook('beforeBulkCreate', async dao => {
    for (const user of dao) {
      user.password = await encrypt.crypto(user.password);
    }
  });

  User.addHook('afterCreate', async dao => {
    dao.password = undefined;
  });

  User.addHook('afterBulkCreate', async dao => {
    for (const user of dao) {
      user.password = undefined;
    }
  });

  return User;
};
