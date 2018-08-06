import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Feelings} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} /> 
          <Route path="/thankyou" component={ThankYou} /> 
          <Route path="/admin" component={Admin} /> 
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
