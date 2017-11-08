import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import OrderRoutes from "./routes/orderRoutes";
import AppRoutes from "./routes/appRoutes";

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
app.use(bodyParser.json());
app.use(cors());

OrderRoutes.create(app);
AppRoutes.create(app);


app.use(express.static('react-ui/build'));
app.set('view engine', 'html');

app.get('*', (request, response) => {
  response.render('react-ui/build');
});

export default app;
