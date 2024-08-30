// <=================== file for app.js ================>

// importing the required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./config/dbconnection.js";
import { corsOptions } from "./config/corsOption.js";
import router from "./routes/routes.js";
dotenv.config();

// creating the app
const app = express();

// connecting the mongodb
connection();

// enabling the cors policy
app.use(cors(corsOptions));

// defining the port
const port = process.env.PORT;

// for passing the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting the routes
app.use("/", router);

// running the servers
app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
