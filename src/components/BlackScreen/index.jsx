import { useState } from 'react';

import Canvas from '../Canvas';

import './BlackScreen.scss';

export default function BlackScreen() {

  const [isClicked, setIsClicked] = useState(false);
  const [animationIsDone, setAnimationIsDone] = useState(false);



    return (

        <>
            <Canvas isClicked={isClicked} 
            setIsClicked={setIsClicked} 
            animationIsDone={animationIsDone}
            setAnimationIsDone={setAnimationIsDone}/>
        <h1
        id={isClicked ? "transitionTitle" : ""}
        className={animationIsDone ? "title visible" : "title"}>GO</h1>
        </>

    )

}