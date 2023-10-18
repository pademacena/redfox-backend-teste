import { Schema, model, Document } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

interface PokemonInterface extends Document {
  row: number;
  name: string;
  pokedexNumber: number;
  imgname: number;
  generation: number;
  evolutionStage: number;
  evolved: number;
  familyID: number;
  crossGen: number;
  type1: string;
  type2: string;
  weather1: string;
  weather2: string;
  statTotal: number;
  atk: number;
  def: number;
  sta: number;
  legendary: number;
  aquireable: number;
  spawns: number;
  regional: number;
  raidable: number;
  hatchable: number;
  shiny: number;
  nest: number;
  newP: number;
  notGettable: number;
  futureEvolve: number;
  cpQuarenta: number;
  cpTrintaENove: number;
}

const PokemonSchema = new Schema({
  row: {
      type: Number,
      required: true
    },
  name: {
      type: String,
      required: true
    },
  pokedexNumber: {
      type: Number,
      required: true
    },
  imgname: {
      type: Number,
      required: true
    },
  generation: {
      type: Number,
      required: true
    },
  evolutionStage: {
      type: Number,
      required: true
    },
  evolved: {
      type: Number,
      required: true
    },
  familyID: {
      type: Number,
      required: true
    },
  crossGen: {
      type: Number,
      required: true
    },
  type1: {
      type: String,
      required: true
    },
  type2: {
      type: String
    },
  weather1: {
      type: String,
      required: true
    },
  weather2: {
      type: String
    },
  statTotal: {
      type: Number,
      required: true
    },
  atk: {
      type: Number,
      required: true
    },
  def: {
      type: Number,
      required: true
    },
  sta: {
      type: Number,
      required: true
    },
  legendary: {
      type: Number,
      required: true
    },
  aquireable: {
      type: Number,
      required: true
    },
  spawns: {
      type: Number,
      required: true
    },
  regional: {
      type: Number,
      required: true
    },
  raidable: {
      type: Number,
      required: true
    },
  hatchable: {
      type: Number,
      required: true
    },
  shiny: {
      type: Number,
      required: true
    },
  nest: {
      type: Number,
      required: true
    },
  newP: {
      type: Number,
      required: true
    },
  notGettable: {
      type: Number,
      required: true
    },
  futureEvolve: {
      type: Number,
      required: true
    },
  cpQuarenta: {
      type: Number,
      required: true
    },
  cpTrintaENove: {
      type: Number,
      required: true
    },
});

PokemonSchema.index({ name: 'text', type1: 'text', type2: 'text', weather1: 'text', weather2: 'text'});

PokemonSchema.plugin(mongoosePaginate);

export default model<PokemonInterface>('Pokemon', PokemonSchema);