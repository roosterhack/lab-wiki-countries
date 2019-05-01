import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'
import { Switch, Route, Link } from "react-router-dom";


class App extends Component {

  state = {
    countries
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                <CountryList countries={this.state.countries} />
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route path="/:cca3" component={CountryDetail} />
              </Switch>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App 
