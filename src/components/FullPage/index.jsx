import { useState } from 'react';

import Navbar from '../Navbar';
import FirstElement from '../FirstElement';


export default function FullPage({ 
    isClicked,
    transitionIsDone
}) {

    const [mouseX, setMouseX] = useState(0);


    const handleMove = (e) => {
        setMouseX(e.screenX);
        console.log(mouseX);
    }

    return (
        <div
        onMouseMove={handleMove}
        >
            <Navbar
                isClicked={isClicked}
                transitionIsDone={transitionIsDone}
            />
            <FirstElement transitionIsDone={transitionIsDone}/>
        </div>
    )
}