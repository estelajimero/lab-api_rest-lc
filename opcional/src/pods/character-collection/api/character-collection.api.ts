import Axios from 'axios';
import { graphqlClient } from 'core/api/graphql.client';
import { gql } from 'graphql-request';
import { CharacterEntityApi, GetCharacterCollectionResponse } from './character-collection.api-model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
      characters {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  `;

  const { characters } =
    await graphqlClient.request<GetCharacterCollectionResponse>(query);

    return characters;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
