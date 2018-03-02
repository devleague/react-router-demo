import React, { Component } from 'react';

import PlanetsList from './PlanetsList';
import Planet from './Planet';

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    return fetch('https://swapi.co/api/planets')
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.results
      })
      .then(planets => {
        this.setState({ planets: planets});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <PlanetsList planets={this.state.planets} />
    );
  }
}

export default Planets