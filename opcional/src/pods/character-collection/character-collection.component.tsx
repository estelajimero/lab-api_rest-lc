import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVM[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>


      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
