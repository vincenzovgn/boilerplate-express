module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        require: true,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payload: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      createdAt: {
        allowNull: false,
        require: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
