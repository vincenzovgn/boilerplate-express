module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Exemplos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        unique: true,
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
    await queryInterface.dropTable('Exemplos');
  },
};
