// const encryption = require('./../src/repositories/crypt');

module.exports = (sequelize, DataTypes) => {
  const Exemplo = sequelize.define(
    'Exemplo',
    {
      name: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING,
      },
      document: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING,
      },
      nationality: {
        allowNull: false,
        require: true,
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      phone: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: null,
        comments: 'ddiddd999999999',
      },
      payload: {
        allowNull: true,
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      active: {
        allowNull: false,
        require: true,
        type: DataTypes.BOOLEAN,
        defaultValue: 2,
      },
    },
    {
      sequelize,
      modelName: 'Exemplo',
      tableName: 'Exemplos',
      timestamps: true,
      underscored: true,
    },
  );
  Exemplo.associate = models => {};

  // Exemplo.addHook('beforeCreate', async (dao) => {
  //   dao.dataValues.password = await encryption.crypto(dao.dataValues.password);
  // });

  return Exemplo;
};
