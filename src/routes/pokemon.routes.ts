import {Router} from 'express';

import multer from 'multer';

import importPokemonController from '../controllers/imporPokemon.controller';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const pokemonRoutes = Router();

pokemonRoutes.post('/import', upload.single('xlsxFile'), importPokemonController.execute);

export {pokemonRoutes}