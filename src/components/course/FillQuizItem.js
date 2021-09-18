import React, { useState } from 'react';
import { Form, Checkbox, Segment } from 'semantic-ui-react';

export const FillQuizItem = ({ Quiz }) => {
  const [answerState, setAnswerState] = useState();
  const myChangeHandler = (event) => {
    Quiz.answer = event.target.value;
    setAnswerState(event.target.value);
  };
  return (
    <Segment>
      <Form.Field>{Quiz.question}</Form.Field>
      <Form.Field>
        <Form.Input
          placeholder='Answer'
          name={Quiz._id}
          onChange={myChangeHandler}
        />
      </Form.Field>
    </Segment>
  );
};
