// <======================== server for the application =========================>

// importing the required modules
import app from "../../app";
import dotenv from "dotenv";
import { connectDB } from "../database/connectDB";
import router from "../routes/routes";
dotenv.config();

// defining the port
const port = process.env.PORT;

// establishing the connection
connectDB();

// setting up the routes
app.use("/", router);

// starting the server
app.listen(port, () => {
  console.log(`server started at: http://localhost:${port}`);
});
