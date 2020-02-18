const { Sequelize, QueryTypes } = require('sequelize');
const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, '../config/dev.env') });

class SequelizeHandler {
  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        dialect: process.env.DB_TYPE
      }
    );
  }

  checkConnection() {
    return this.sequelize
      .authenticate()
      .then(() => {
        console.log('Successfully connected to database');
      })
      .catch(error => {
        console.error('Unable to connect to database ' + error);
      });
  }

  async executeQuery(query) {
    const result = await this.sequelize.query(query, {
      type: QueryTypes.SELECT
    });
    console.log(result);
  }
}

let sequelizeHandler = new SequelizeHandler();
sequelizeHandler.executeQuery('select * from employee');
