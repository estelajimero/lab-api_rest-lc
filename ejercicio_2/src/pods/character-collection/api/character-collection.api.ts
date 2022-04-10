import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(url);

  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
}
