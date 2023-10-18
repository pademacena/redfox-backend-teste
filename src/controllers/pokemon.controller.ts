import {Request, Response} from 'express';
import { PokemonService } from '../services';

export default new class PokemonController {

  public async store(req: Request, res: Response) {
    const service = new PokemonService();

    const page = req?.headers?.paginate ?? 1;
    const result = await service.listPokemon(Number(page));
    return res.json(result);
  }

  public async genericSort(req: Request, res: Response) {
    const service = new PokemonService();

    const page = req?.headers?.paginate ?? 1;
    const search = String(req?.headers?.search) ?? '';
    const result = await service.genericFind(search, Number(page));
    return res.json(result);
  }
}