import React from 'react';

const PlanetsList = props => {
  return(
  <div className="planets-list">
    {
      props.planets.map(planet => {
        const planetId = planet.url.split('/').slice(-2, -1).pop();
        return(
          <div key={planetId} className="planet-link">
            {planet.name}
          </div>
        );
      })
    }
  </div>
)};

export default PlanetsList

