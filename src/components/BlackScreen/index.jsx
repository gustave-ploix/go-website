import { useState } from 'react';

import Title from '../Title';
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
             <Title isClicked={isClicked} 
            setIsClicked={setIsClicked} 
            animationIsDone={animationIsDone}
            setAnimationIsDone={setAnimationIsDone}/>
        </>

    )

}