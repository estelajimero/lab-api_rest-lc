export interface Character {
  id: string,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  url: string,
  created: string,
  bestSentences: string
}

export interface CharacterEdit {
  id: string;
  name: string;
  status: string,
  species: string,
  origin: {
    name: string,
    url: string
  },
}
