// <============================ app.ts =========================>

// importing the required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsOptions } from "./config/cors_config";
dotenv.config();

const app = express();

// enabling cors
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
