
// import moun from './bgi.png';
// import m2 from './mountain2.png';
// import m4 from './newmt.png';
// import cloud from './cloud1.png';


// import React, { useEffect } from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';


// function App() {
  
//   return (
//     <div className="arsh">
//       <Parallax pages={6}>

//       <ParallaxLayer
//           offset={0}
//           speed={0.5}
//           factor={0.868}
//           style={{
//             backgroundImage: `url(${cloud})`,
//             backgroundSize: 'contain',
//           }}
//         >
//           <h1>hello</h1>
//         </ParallaxLayer>
       
    


    

//         <ParallaxLayer
//           offset={0.35}
//           speed={0.5}
//           factor={0.868}
//           style={{
//             backgroundImage: `url(${moun})`,
//             backgroundSize: 'cover',
//           }}
//         >
//           <h1>hello</h1>
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={0}
//           speed={0.8}
//           factor={2}
//           style={{
//             backgroundImage: `url(${m4})`,
//             backgroundSize: 'contain',
//           }}
//         />

//         <ParallaxLayer
//           offset={0.58}
//           speed={1.05}
//           factor={2.9}
//           style={{
//             backgroundImage: `url(${m2})`,
//             backgroundSize: 'contain',
//           }}
//         />
//       </Parallax>
    
//     </div>
//   );
// }

// export default App;



import React from 'react';


import { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  console.log("object");

  useEffect(()=>{
     window.addEventListener('scroll', function() {

    console.log("sdgcvkjsdb");
    var image = document.getElementById('moving-image');
    var scrollY = window.scrollY;
    image.style.transform = 'translateX(' + scrollY + 'px)';

});
  })
  return (
    <div>
      <Parallax pages={2} scrolling="true">
        <ParallaxLayer offset={0} speed={0}>
          <div className="container">
            <img id="moving-image" src="./src/cloud1.png" alt="Moving Image" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
