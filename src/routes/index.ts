import {Router} from 'express';
import { serverStatusRoutes } from './serverStatus.routes';
import { pokemonRoutes } from './pokemon.routes';

const routes = Router();

routes.use('/status', serverStatusRoutes);
routes.use('/pokemon', pokemonRoutes);

export {routes}