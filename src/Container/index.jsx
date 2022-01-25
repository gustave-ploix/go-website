import { useState } from "react";

import Preloader from "../components/Preloader";
import FullPage from "../components/FullPage";
import MouseTracker from "../services/MouseTracker";

import "./container.scss";

export default function BlackScreen() {

  const [isClicked, setIsClicked] = useState(false);
  const [animationIsDone, setAnimationIsDone] = useState(false);
  const [transitionIsDone, setTransitionIsDone] = useState(false);


  return (
    <div className="black">
      {transitionIsDone ? (
        <>
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
