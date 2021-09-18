import React, { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Grid, Message, Header, Button } from 'semantic-ui-react';
import { CourseContext } from './Course';
export const CourseList = () => {
  const { courseState } = useContext(CourseContext);

  let { path, url } = useRouteMatch();
  return (
    <>
      <br />

      <Grid container>
        {courseState.map((course, i) => (
          <Grid.Row key={i}>
            <Grid.Column>
              <Message>
                <Header as='h1'>{course.name}</Header>
                <p>{course.description}</p>
                <Button color='blue' as={Link} to={`${url}/${course.name}`}>
                  Learn more &raquo;
                </Button>
              </Message>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </>
  );
};
