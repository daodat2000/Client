import React, { useState } from 'react';
import { Form, Checkbox, Segment } from 'semantic-ui-react';

export const MultipleQuizItem = ({ Quiz }) => {
  const [answerState, setAnswerState] = useState(Quiz.answer);
  const myChangeHandler = (event, { value }) => {
    Quiz.answer = value;
    setAnswerState(value);
  };
  return (
    <Segment>
      <Form.Field>{Quiz.question}</Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label={Quiz.answer1}
          name='checkboxRadioGroup'
          value='1'
          checked={answerState === '1'}
          onChange={myChangeHandler}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label={Quiz.answer2}
          name='checkboxRadioGroup'
          value='2'
          checked={answerState === '2'}
          onChange={myChangeHandler}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label={Quiz.answer3}
          name='checkboxRadioGroup'
          value='3'
          checked={answerState === '3'}
          onChange={myChangeHandler}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label={Quiz.answer4}
          name='checkboxRadioGroup'
          value='4'
          checked={answerState === '4'}
          onChange={myChangeHandler}
        />
      </Form.Field>
    </Segment>
  );
};
