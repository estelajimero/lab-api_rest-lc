import { CharacterEntityApi } from './character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id:	1,
    name:	"Rick Sanchez",
    status:	"Alive",
    species:	"Human",
    type:	"",
    gender:	"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id:	16,
    name:	"Amish Cyborg",
    status:	"Dead",
    species:	"Alien",
    type:	"Parasite",
    gender:	"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  }
];

