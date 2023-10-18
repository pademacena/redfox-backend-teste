import {Router} from 'express';

import multer from 'multer';

import importPokemonController from '../controllers/imporPokemon.controller';
import pokemonController from '../controllers/pokemon.controller';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const pokemonRoutes = Router();

pokemonRoutes.post('/import', upload.single('xlsxFile'), importPokemonController.execute);
pokemonRoutes.get('/list', pokemonController.store);
pokemonRoutes.get('/genericSort', pokemonController.genericSort);

export {pokemonRoutes}