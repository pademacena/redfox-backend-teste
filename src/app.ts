import express from 'express';
import cors from 'cors';
import { MongodbConnect } from './database';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import 'express-async-errors';
import {routes} from './routes';
import { errorHandling } from './middleware/error.middleware';

class App {
  public express: express.Application;
  public mongodb = new MongodbConnect;

  public constructor() {
    this.express = express();

    this.primaryConfig();
    this.mongodb.connect();

  }

  public primaryConfig(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(errorHandling);
    this.express.use(bodyParser.json());
  }

}

export default new App().express;