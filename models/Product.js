// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// define schema
const Product = db.define('products', {
    // define attributes
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
},{
    // Freeze Table Name
    freezeTableName: true
});

// export model product
export default Product;