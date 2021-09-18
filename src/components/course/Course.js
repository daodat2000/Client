import React, { useState, useEffect, createContext } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Grid, Message, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import { CourseList } from './CourseList';
import { QuizList } from './QuizList';
export const CourseContext = createContext();
const { REACT_APP_SERVER_URL } = process.env;
export const Course = () => {
  const [courseState, setCourseState] = useState([]);
  let { path, url } = useRouteMatch();
  const LoadCourses = async () => {
    console.log('get Course');
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/course`);
      setCourseState(response.data.courses);
    } catch (error) {
      if (error.response) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  useEffect(() => {
    LoadCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const CourseContextData = { courseState };
  return (
    <CourseContext.Provider value={CourseContextData}>
      <Switch>
        <Route exact path={path}>
          <CourseList />
        </Route>
        {courseState.map((course, i) => (
          <Route path={`${path}/${course.name}`} key={i}>
            <QuizList Course={course} />
          </Route>
        ))}
      </Switch>
    </CourseContext.Provider>
  );
};
