import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import passport from './middleware/passport';

import AppRoutes from "./routes/appRoutes";
import CategoryRoutes from "./routes/categoryRoutes";
import DownloadRoutes from "./routes/downloadRoutes";
import UserRoutes from "./routes/userRoutes";
import UploadRoutes from "./routes/uploadRoutes";
import AdminRoutes from "./routes/adminRoutes";

const MongoStore = connectMongo(session);

const app = express();

app.set('trust proxy');

app.use(logger("dev"));

app.use(session({
  secret: 'aisdfoyasudbv;aosdn',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const whitelist = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://raspberrypi.local:3002',
  'projector-app-store.herokuapp.com',
  'http://projector-app-store.herokuapp.com',
  'https://projector-app-store.herokuapp.com',
];

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    console.log('Request origin:', origin);
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// enable cors
app.use(cors(corsOptions));
app.options('*', cors());

app.use(passport);

AppRoutes.create(app);
CategoryRoutes.create(app);
DownloadRoutes.create(app);
UserRoutes.create(app);
UploadRoutes.create(app);
AdminRoutes.create(app);


app.use(express.static(path.join(__dirname, '/../react-ui/build')));
app.use(express.static(path.join(__dirname, '/../apps')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '/../react-ui/build/index.html'));
});

export default app;
