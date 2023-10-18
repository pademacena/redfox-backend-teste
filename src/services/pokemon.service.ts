import { BaseService } from './base.service';
import { IPokemon } from '../@Types/pokemon.type';
import pokemonSchema from '../schemas/pokemon.schema';

export class PokemonService extends BaseService {
  protected readonly limitPage: number = Number(process.env.LIMIT_PAGE) ?? 5;

  public async listPokemon(page: number = 1) {
    this.logger.info(`PokemonService :: listPokemon :: start service`);

    try{
      const result = await pokemonSchema.paginate({}, {page, limit: this.limitPage, sort: {row: 1}});
      this.logger.info(`PokemonService :: listPokemon :: result consult ${JSON.stringify(result)}`);
      return result;
    } catch(err) {
      this.logger.error(`PokemonService :: listPokemon :: error result ${JSON.stringify(err)}`);
      throw new Error(`Error list Pokemon : ${err}`);
    }

  }

  public async genericFind(search: string, page: number = 1) {
    this.logger.info(`PokemonService :: genericFind :: start service`);

    try{
      const result = await pokemonSchema.paginate({$text: {$search: search}}, {page, limit: this.limitPage, sort: {row: 1}});
      this.logger.info(`PokemonService :: genericFind :: result consult ${JSON.stringify(result)}`);
      return result;
    } catch(err) {
      this.logger.error(`PokemonService :: genericFind :: error result ${JSON.stringify(err)}`);
      throw new Error(`Error find Pokemon : ${err}`);
    }
  }
}