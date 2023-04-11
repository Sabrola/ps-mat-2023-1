'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      external_code: {
        type: Sequelize.STRING
      },
      theme: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      remarks: {
        type: Sequelize.TEXT
      },
      pic_url: {
        type: Sequelize.STRING
      },
      custom_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      custom_age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      event_date: {
        type: Sequelize.DATE
      },
      artwork_date: {
        type: Sequelize.DATE
      },
      shipment: {
        allowNull: false,
        type: Sequelize.DATE
      },
      total_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      channel_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      carrier_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shipent_priority_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      payment_method_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};