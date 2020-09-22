module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      document_type: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
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
    await queryInterface.dropTable('Profiles');
  },
};
