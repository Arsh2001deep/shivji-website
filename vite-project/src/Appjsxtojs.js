import moun from './bgi.png';
import m2 from './mountain2.png';
import m4 from './newmt.png';
import cloud from './cloud1.png';
import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function App() {
    return /*#__PURE__*/ _jsx("div", {
        className: "arsh",
        children: /*#__PURE__*/ _jsxs(Parallax, {
            pages: 6,
            children: [ /*#__PURE__*/ _jsx(ParallaxLayer, {
                offset: 0.35,
                speed: 0.5,
                factor: 0.868,
                style: {
                    backgroundImage: `url(${moun})`,
                    backgroundSize: 'cover'
                },
                children: /*#__PURE__*/ _jsx("h1", {
                    children: "hello"
                })
            }), /*#__PURE__*/ _jsx(ParallaxLayer, {
                offset: 0,
                speed: 0.8,
                factor: 2,
                style: {
                    backgroundImage: `url(${m4})`,
                    backgroundSize: 'contain'
                }
            }), /*#__PURE__*/ _jsx(ParallaxLayer, {
                offset: 0.58,
                speed: 1.05,
                factor: 2.9,
                style: {
                    backgroundImage: `url(${m2})`,
                    backgroundSize: 'contain'
                }
            })]
        })
    });
}
export default App;