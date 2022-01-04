import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import IntroPage from './features/MyImage.js/IntroPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/'>
          <div className='App'>
            <div>Hello!!!</div>
            <Counter />
          </div>
        </Route>
        <Route exact={true} path='/intro'>
          <IntroPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
