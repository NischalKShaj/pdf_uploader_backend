// <=================== file for app.js ================>

// importing the required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connection } from "./config/dbconnection.js";
import router from "./routes/routes.js";
dotenv.config();

// creating the app
const app = express();

// connecting the mongodb
connection();

// enabling the cookie parser for the application
app.use(cookieParser());

// Configure bodyParser for large files
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// Serve static files from uploads directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "uploads")));

// defining the port
const port = process.env.PORT;

// for passing the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting the routes
app.use("/", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// running the servers
app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
