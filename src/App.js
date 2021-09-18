import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import AuthContextProvider from './contexts/AuthContext';
import AuthRoute from './components/routing/AuthRoute';
import ProtectedRoute from './components/routing/ProtectedRoute';
import { CardList } from './components/card/CardList';
import { Course } from './components/course/Course';
import Account from './components/account/Account';
import MenuUI from './components/MenuUI';
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <MenuUI>
            <Switch>
              <ProtectedRoute path='/dashboard' component={Dashboard} />
              <ProtectedRoute exact path='/card' component={CardList} />
              <ProtectedRoute exact path='/account' component={Account} />
              <ProtectedRoute path='/course' component={Course} />
              <Route path='/home' component={Dashboard} />
            </Switch>
          </MenuUI>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
