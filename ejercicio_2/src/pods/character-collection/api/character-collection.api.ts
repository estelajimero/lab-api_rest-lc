import Axios from 'axios';
import { CharacterEntityApi, GetResults } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<GetResults>(url);

  return data.results;
};
