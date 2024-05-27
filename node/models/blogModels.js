// import de la base de datos---
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const blogModel =db.define('blog',{
    title: {type : DataTypes.STRING},
    contenido: {type : DataTypes.STRING}
})

export default blogModel;