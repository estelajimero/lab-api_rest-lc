import { Character } from './models';

export const createDefaultCharacter = (): Character => ({
    id: '0',
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    image: '',
    url: '',
    created: '',
    bestSentences: ''
});

export const mockCharacters: Character[] = [
  {
    id:	'1',
    name:	"Rick Sanchez",
    status:	"Alive",
    species:	"Human",
    type:	"",
    gender:	"Male",
    origin: {
      name: "Earth (C-137)",
      url: 	"https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: 	"https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
    bestSentences: '',
  },
  {
    id:	'16',
    name:	"Amish Cyborg",
    status:	"Dead",
    species:	"Alien",
    type:	"Parasite",
    gender:	"Male",
    origin: {
      name: "unknown",
      url: 	"",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    url: 	"https://rickandmortyapi.com/api/character/16",
    created: 	"2017-11-04T21:12:45.235Z",
    bestSentences: '',
  }
];
