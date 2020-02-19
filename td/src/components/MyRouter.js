import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Configuration from './Configuration';
import About from './About';

class MyRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  setName = (name) => {
   
    this.setState({
      ...this.state,
      name: name
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Accueil pseudo={this.state.name}/>
          </Route>
          <Route path="/Configuration/">
            <Configuration pseudo={this.setName} />
          </Route>
          <Route path="/About/" >
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MyRouter;
