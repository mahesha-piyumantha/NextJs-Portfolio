import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {

  //init 
  const particesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
 

  const particlesLoaded  = useCallback(async () => {} , []);

  return(
    <Particles id='tsparticles' init={particesInit} loaded={particlesLoaded} options={
      {
        
      }
    }>

    </Particles>
  )
  

  

};

export default ParticlesContainer;
