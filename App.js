import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <p>This is main menu.</p>
        <Router>
            <div>
            <Link to="/">
                HOME
            </Link>
            </div>
            <div>
            <Link to="/Blog">
                BLOG
            </Link>
            </div>
            <div>
            <Link to="/Contact">
                CONTACT
            </Link>
            </div>
            <hr/>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/Blog">
                  <Blog/>
                </Route>
                <Route exact path="/Contact">
                  <Contact/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
