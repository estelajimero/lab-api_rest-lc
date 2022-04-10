import { Character } from './character.api-model';
import Axios from 'axios';

const url = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const saveBestSentences = async (character: Character): Promise<boolean> => {
    await Axios.put(`${url}/${character.id}`, character);
    return true;
};
