// Generator.js

import * as React from 'react';
import { useState } from 'react';

export default function Generator() {
    const [color1, setColor1] = useState('red');
    const [color2, setColor2] = useState('blue');

    const switchColors = () => {
        setColor1(color2);
        setColor2(color1);
    };

    return (
        <div>
            <div style={{ backgroundColor: color1, width: '100px', height: '100px' }}></div>
            <div style={{ backgroundColor: color2, width: '100px', height: '100px' }}></div>
            <button onClick={switchColors}>Switch Colors</button>
        </div>
    );
}
