import { Request, Response } from 'express';
import { ImportPokemonService } from '../services';

export default new class ImportPokemonController {
  public async execute(req: Request, res: Response) {
    const importPokemon = new ImportPokemonService();
    const file = req.file;

    if(file){
      const result = await importPokemon.create(file);
      return res.json({message: 'succes'});
    } else{
      throw new Error ('Undefined File');
    }
  }
}