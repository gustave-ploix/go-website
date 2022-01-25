import { useState } from "react";

import Preloader from "../components/Preloader";
import FullPage from "../components/FullPage";
import MouseTracker from "../services/MouseTracker";

import "./container.scss";

export default function BlackScreen() {

  const [isClicked, setIsClicked] = useState(false);
  const [animationIsDone, setAnimationIsDone] = useState(false);
  const [transitionIsDone, setTransitionIsDone] = useState(false);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMove = (e) => {
    setMouseX(e.screenX);
    setMouseY(e.screenY);
  }

  return (
    <div className="black"
      onMouseMove={handleMove}
    >
      {transitionIsDone ? (
        <>
          {/* <MouseTracker
            mouseX={mouseX}
            mouseY={mouseY}
          /> */}
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
