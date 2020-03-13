import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './shared/header/Header';
import Home from './components/Home';
import Character from './components/characters/Character';
import Episode from './components/episodes/Episode';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="container" > 
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/personaje/:id" component={Character} />
          <Route exact path="/episodio/:id" component={Episode} />
          <Route exact path="/search/:word" component={Search} />
        </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
