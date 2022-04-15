export interface GetResults {
  results: CharacterEntityApi[]
}

export interface CharacterEntityApi {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
}

export interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];
}
