import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './containers/Landing'
import Navigation from './containers/Navigation'
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends React.Component {

  state = {
    
  }

  componentDidMount(){
    //fetches go here
  }

  render(){
    return (
      <div className="App">
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={Landing}/>
        </Switch>
      </div>
    )
  }

}

export default withRouter(App)