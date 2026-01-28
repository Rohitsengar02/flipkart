import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
// (node:15846) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. (Use `node --trace-deprecation ...` to show where the warning was created)
// Mongoose configuration (Deprecated options removed for Mongoose 6+)


import Connection from './database/db.js';
import Routes from './routes/route.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

// Middleware - MUST be registered BEFORE app.listen()
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

// Start server - MUST be at the end
app.listen(PORT, () => console.log(`✅ Server is running successfully on PORT ${PORT}`));

