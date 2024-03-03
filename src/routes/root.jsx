import { Outlet, Link } from "react-router-dom";
// <Outlet /> is where the content will show
import { useLayoutEffect, useState, useRef } from "react";

import './root.css';

import WaveOne from './waves/waveOne';
import WaveTwo from './waves/waveTwo';
import WaveThree from './waves/waveThree';


export default function Root() {
    const headerElem = useRef(null);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);

    useLayoutEffect(() => setHeight(headerElem.current.offsetHeight));
    useLayoutEffect(() => setWidth(headerElem.current.offsetWidth));

    const viewBoxValue = "0 0 " + width + " " + height;

    return (
        <>
        <header ref={headerElem}>
            <WaveOne width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveTwo width={width} height={height} viewBoxValue={viewBoxValue} />
            <WaveThree width={width} height={height} viewBoxValue={viewBoxValue} />
            <div className="header-text">
                <h1>Monica Björk</h1>
                <p>underrubrik</p>
            </div>
            <div className="borderShadow"> </div>
        </header>
        
        <main>
            <nav>
                <ul>
                    <li><Link to={`/`}>Hem</Link></li>
                    <li><Link to={`/cv`}>CV</Link></li>
                    <li><Link to={`/projects`}>Projekt</Link></li>
                    <li><Link to={`/connect`}>Kontakt</Link></li>
                </ul>
            </nav>
            <Outlet />
        </main>
      </>
    );
  }