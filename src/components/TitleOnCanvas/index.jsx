import { useEffect } from 'react';

import './titleOnCanvas.scss';


export default function TitleOnCanvas({ isClicked, animationIsDone, transitionIsDone, setTransitionIsDone}) {

  useEffect(() => {
    if (isClicked == true) {
      setTimeout(() => {
        setTransitionIsDone(!transitionIsDone);
      }, 2500);
    }
  }, [isClicked]);

  return (
    <h1
      id={isClicked ? "transitionTitle" : ""}
      className={animationIsDone ? "title visible" : "title"}
    >
      GO
    </h1>
  );
}
