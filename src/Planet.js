import React, { Component } from 'react';

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    console.log('componentsWillMount')
    const planetId = 0;
    if(planetId) {
      return fetch(`https://swapi.co/api/planets/${planetId}`)
        .then(response => {
          return response.json();
        })
        .then(planet => {
          console.log('planet', planet)
          this.setState({...planet});
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    console.log('render', this.state)
    const {
      climate,
      diameter,
      gravity,
      name,
      orbital_period,
      population,
      rotation_period,
      surface_water,
      terrain,
      url,
    } = this.state;
    return(
      <div className="planet">
        <h1>{name}</h1>
        <ul>
          { climate && <li>Climate: {climate}</li> }
          { diameter && <li>Diameter: {diameter}</li> }
          { gravity && <li>Gravity: {gravity}</li> }
          { orbital_period && <li>Orbit: {orbital_period}</li> }
          { population && <li>Population: {population}</li> }
          { rotation_period && <li>Rotation: {rotation_period}</li> }
          { surface_water && <li>Water %: {surface_water}</li> }
          { terrain && <li>Terrain: {terrain}</li> }
        </ul>
        { url && <p>Source: {url}</p> }
      </div>
    );
  }
}

export default Planet

