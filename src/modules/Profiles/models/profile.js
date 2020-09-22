const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Profile.init(
    {
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      document_type: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
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
      modelName: 'Profile',
      tableName: 'Profiles',
      timestamps: true,
    },
  );
  return Profile;
};
