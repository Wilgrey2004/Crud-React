import {Sequelize} from 'sequelize';

const db = new Sequelize('mi_app_react_db','root','1234',{
  host:'localhost',
  dialect:'mysql'
})

export default db;