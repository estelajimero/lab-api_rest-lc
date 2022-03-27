import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVM[];
  onCreateCharacter: () => void;
  onDetailCharacter: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onDetailCharacter } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetailCharacter} />
          </li>
        ))}
      </ul>
    </div>
  );
};