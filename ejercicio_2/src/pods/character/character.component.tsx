import React from 'react';
import { Formik, Form } from 'formik';
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
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="origin" label="Origin" />
          <TextFieldComponent name="location" label="Location" />
          <TextFieldComponent
            name="bestSentences"
            label="Best sentences"
            multiline={true}
            minRows={3}
            maxRows={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
