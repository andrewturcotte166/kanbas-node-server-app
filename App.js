import express from 'express';
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from "./Kanbas/Modules/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors()
);
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)