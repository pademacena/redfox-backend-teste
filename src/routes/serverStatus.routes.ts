import {Router} from 'express';

import connectController from '../controllers/connect.controller';

const serverStatusRoutes = Router();

serverStatusRoutes.get('/api', connectController.handle);

export {serverStatusRoutes}