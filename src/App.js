import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BodyType from './components/BodyType'
import Log from "./components/Log.js"
import Home from "./components/Home.js"
import Template from "./components/Template.js"
import NavBar from "./components/NavBar"

const client = new ApolloClient ({
  uri: 'localhost:4000'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
    <NavBar></NavBar>
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/BodyType" component={BodyType} />
          <Route path="/Logs" component={Log} />
          <Route path="/Template" component={Template} />
          </BrowserRouter>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
