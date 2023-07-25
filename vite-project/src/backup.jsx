
import moun from './bgi.png';
import m2 from './mountain2.png';
import m4 from './newmt.png';
import cloud from './cloud1.png';
import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {
  return (
    <div className="arsh">
      <Parallax pages={6}>
        <ParallaxLayer
          offset={0.35}
          speed={0.5}
          factor={0.868}
          style={{
            backgroundImage: `url(${moun})`,
            backgroundSize: 'cover',
          }}
        >
          <h1>hello</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${m4})`,
            backgroundSize: 'contain',
          }}
        />

        <ParallaxLayer
          offset={0.58}
          speed={1.05}
          factor={2.9}
          style={{
            backgroundImage: `url(${m2})`,
            backgroundSize: 'contain',
          }}
        />
      </Parallax>
    
    </div>
  );
}

export default App;
