import { useState } from "react";

import Preloader from "../components/Preloader";
import FullPage from "../components/FullPage";
import MouseTracker from "../services/MouseTracker";

import "./container.scss";

export default function BlackScreen() {
  const [isClicked, setIsClicked] = useState(false);
  const [animationIsDone, setAnimationIsDone] = useState(false);
  const [transitionIsDone, setTransitionIsDone] = useState(false);

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);


  const handleMove = (e) => {
    setPosX(e.screenX);
    setPosY(e.screenY);
  }

  return (
    <div className="black"
      onMouseMove={handleMove}
    >
      {transitionIsDone ? (
        <>
          <MouseTracker
            posX={posX}
            posY={posY}
          />
          <FullPage isClicked={isClicked} transitionIsDone={transitionIsDone} />
        </>
      ) : (
        <Preloader
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          animationIsDone={animationIsDone}
          setAnimationIsDone={setAnimationIsDone}
          setTransitionIsDone={setTransitionIsDone}
        />
      )}
    </div>
  );
}
