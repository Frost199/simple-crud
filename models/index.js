const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(process.env.SIMPLE_CRUD_DB_NAME,
  process.env.SIMPLE_CRUD_DB_USER,
  process.env.SIMPLE_CRUD_DB_PASSWORD,
  {
    host: process.env.SIMPLE_CRUD_DB_HOST,
    dialect: process.env.SIMPLE_CRUD_DB_DIALECT,
    logging: false,
  });

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;