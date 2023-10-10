import { BaseService } from '.';
import xlsx from 'xlsx';
import pokemonSchema from '../schemas/pokemon.schema';

export class ImportPokemonService extends BaseService {
  public async create(file: Express.Multer.File) {

    try {
      const pokemons = await this.generateWorkbook(file);

      for(const pokemon of pokemons) {
        const alreadyexist = await this.consultPokemon(pokemon);
        if(!alreadyexist) {
          const pokeImport = await pokemonSchema.create({
            row: pokemon.Row,
            name: pokemon.Name,
            pokedexNumber: pokemon['Pokedex Number'],
            imgname: pokemon['Img name'],
            generation: pokemon.Generation,
            evolutionStage: pokemon['Evolution Stage'],
            evolved: pokemon.Evolved,
            familyID: pokemon.FamilyID,
            crossGen: pokemon['Cross Gen'],
            type1: pokemon['Type 1'],
            type2: pokemon['Type 2'],
            weather1: pokemon['Weather 1'],
            weather2: pokemon['Weather 2'],
            statTotal: pokemon['STAT TOTAL'],
            atk: pokemon.ATK,
            def: pokemon.DEF,
            sta: pokemon.STA,
            legendary: pokemon.Legendary,
            aquireable: pokemon.Aquireable,
            spawns: pokemon.Spawns,
            regional: pokemon.Regional,
            raidable: pokemon.Raidable,
            hatchable: pokemon.Hatchable,
            shiny: pokemon.Shiny,
            nest: pokemon.Nest,
            newP: pokemon.New,
            notGettable: pokemon['Not-Gettable'],
            futureEvolve: pokemon['Future Evolve'],
            cpQuarenta: pokemon['100% CP @ 40'],
            cpTrintaENove: pokemon['100% CP @ 39'],
          });
          this.logger.info(`ImportPokemonService :: create :: import pokemon ${pokemon.Name}`);
        } else {
          this.logger.info(`ImportPokemonService :: create :: jump pokemon ${pokemon.Name}`);
        }
      }

      return {message: 'Import Complete'}
    } catch(err) {
      this.logger.error(`ImportPokemonService :: create :: error for import ${err}`);
    }
  }

  private async consultPokemon(pokemon: any): Promise<Boolean> {
    const consult = await pokemonSchema.findOne({row: pokemon.Row});
    return consult ? true : false;

  }

  private async generateWorkbook(file: any) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer'});
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const pokemons: any[] = xlsx.utils.sheet_to_json(worksheet);
    return pokemons;
  }
}