import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVM } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVM;
  onDetail: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.gender}</Avatar>}
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.name} is {character.species} Species, from {character.origin} and currently living in {character.location}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onDetail(character.id)}> Detail
        </Button>
      </CardActions>
    </Card>
  );
};
