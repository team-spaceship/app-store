import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import OrderRoutes from "./routes/orderRoutes";
import AppRoutes from "./routes/appRoutes";
import CategoryRoutes from "./routes/categoryRoutes";
import DownloadRoutes from "./routes/downloadRoutes";

const MongoStore = connectMongo(session);

const app = express();

app.set('trust proxy');

app.use(logger("dev"));

app.use(session({
  secret: 'aisdfoyasudbv;aosdn',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

OrderRoutes.create(app);
AppRoutes.create(app);
CategoryRoutes.create(app);
DownloadRoutes.create(app);

app.use(express.static(__dirname + '/../react-ui/build'));
app.use(express.static(__dirname + '/../apps'));

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/../react-ui/build/index.html');
});

export default app;
