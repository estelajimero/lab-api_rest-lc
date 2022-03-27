import React from 'react';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';

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
          <Form className={classes.root}>
          <Avatar
            alt={character.name}
            src={character.image}
            className={classes.avatar}
          />
            <TextFieldComponent name="name" label="Name"  >
              Name: {character.name}
            </TextFieldComponent>
            <TextFieldComponent name="status" label="Status"  >
              Status: {character.status}
            </TextFieldComponent>
            <TextFieldComponent name="species" label="Species"  >
              Species: {character.species}
            </TextFieldComponent>
            <TextFieldComponent name="origin" label="Origin"  >
              Origin: {character.origin}
            </TextFieldComponent>
            <TextFieldComponent name="location" label="Location"  >
              Location: {character.location}
            </TextFieldComponent>
            <TextFieldComponent
              name="bestSentences"
              label="Best sentences"
              multiline={true}
              rows={4}
              rowsMax={8}
            />
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
            >
              Save sentence
            </Button>
          </Form>
      )}
    </Formik>
  );
};
