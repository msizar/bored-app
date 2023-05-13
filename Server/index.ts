import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './src/routes/activity.route';

var mongoose = require('mongoose');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const db: string = process.env.DATABASE_URL || "";

if(db) {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase the server selection timeout (adjust as needed)
    socketTimeoutMS: 45000, // Increase the socket timeout (adjust as needed)
  });

} else {
  console.log('No database found');
}

app.use('/activities', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
