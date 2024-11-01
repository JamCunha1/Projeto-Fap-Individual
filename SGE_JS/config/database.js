const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize('sge', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
// });
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sge_js.sqlite'
});

module.exports = sequelize;