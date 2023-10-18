import { ObjectId } from "mongoose";

export interface IPokemonResponse {
  docs?: IPokemon[],
  totalDocs?: number,
  limit?: number,
  totalPages?: number,
  page?: number,
  pagingCounter?: number,
  hasPrevPage?: boolean,
  hasNextPage?: boolean,
  prevPage?: number,
  nextPage?: number
}

export interface IPokemon {
  _id?: ObjectId,
  row?: number;
  name?: string;
  pokedexNumber?: number;
  imgname?: number;
  generation?: number;
  evolutionStage?: number;
  evolved?: number;
  familyID?: number;
  crossGen?: number;
  type1?: string;
  type2?: string;
  weather1?: string;
  weather2?: string;
  statTotal?: number;
  atk?: number;
  def?: number;
  sta?: number;
  legendary?: number;
  aquireable?: number;
  spawns?: number;
  regional?: number;
  raidable?: number;
  hatchable?: number;
  shiny?: number;
  nest?: number;
  newP?: number;
  notGettable?: number;
  futureEvolve?: number;
  cpQuarenta?: number;
  cpTrintaENove?: number;
}