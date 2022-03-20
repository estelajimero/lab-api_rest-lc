import React from 'react';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <div className={classes.root}>
          <Avatar alt={character.name} src={character.image} className={classes.avatar} />
          <Form className={classes.details}>
            <Typography variant="h6" gutterBottom component="div">
              Name: {character.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Status: {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Species: {character.species}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Origin: {character.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Status: {character.status}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Location: {character.location}
            </Typography>
          </Form>
        </div>
      )}
    </Formik>
  );
};
