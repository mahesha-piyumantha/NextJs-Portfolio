import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {

  //init 
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
 

  return (
    <div>Particles Container</div>
  )
};

export default ParticlesContainer;
