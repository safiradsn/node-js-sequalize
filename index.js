// import express
import express from "express";
// import cors
import cors from "cors";
// import connection
import db from "./config/database.js";
// import router
import Router from "./routes/routes.js";

// init express
const app = express();
//use express json
app.use(express.json());
// use cors
app.use(cors());

// testing database connection
try {
    await db.authenticate();
    console.log('Connection has been established succesfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));