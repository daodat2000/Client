import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Grid, Header, Button, Form, Modal } from 'semantic-ui-react';
import { MultipleQuizItem } from './MultipleQuizItem';
import { FillQuizItem } from './FillQuizItem';
import { ModalPoint } from './ModalPoint';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

export const QuizList = ({ Course }) => {
  const [quizState, setQuizState] = useState([]);
  const [pointState, setPointState] = useState();
  let { path, url } = useRouteMatch();
  const LoadQuizs = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_SERVER_URL}/course/${Course._id}`
      );
      let data = response.data.quizs;
      data.forEach(function (e) {
        if (typeof e === 'object') {
          e['answer'] = '';
        }
      });
      console.log(data);
      setQuizState(response.data.quizs);
    } catch (error) {
      if (error.response) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  useEffect(() => {
    LoadQuizs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const mySubmitHandler = async (event) => {
    event.preventDefault();
    quizState.map((quiz) => console.log('submit', quiz.answer));
  };
  const SubmitQuizs = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_SERVER_URL}/course/${Course._id}`,
        { answer: quizState }
      );
      console.log(response.data);
      setPointState(response.data);
      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  console.log(quizState);
  console.log(pointState);
  return (
    <Form onSubmit={SubmitQuizs}>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' dividing>
              {Course.name}
            </Header>
          </Grid.Column>
        </Grid.Row>
        {quizState.map((quiz, i) => (
          <Grid.Row key={i}>
            <Grid.Column>
              {(() => {
                switch (quiz.type) {
                  case 'MultipleQuestion':
                    return <MultipleQuizItem Quiz={quiz} />;
                  case 'FillQuestion':
                    return <FillQuizItem Quiz={quiz} />;
                  default:
                    return <div>You are a User.</div>;
                }
              })()}
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
      {pointState !== undefined ? (
        <ModalPoint Point={pointState} />
      ) : (
        <div className='button_center'>
          <Button content='Submit' primary type='submit' />
        </div>
      )}
    </Form>
  );
};
