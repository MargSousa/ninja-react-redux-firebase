import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

class App extends React.Component  {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Navbar} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

