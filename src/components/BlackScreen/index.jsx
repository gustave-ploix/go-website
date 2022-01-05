import { useState } from "react";

import Title from "../Title";
import Canvas from "../Canvas";

import "./BlackScreen.scss";

export default function BlackScreen() {
  const [isClicked, setIsClicked] = useState(false);
  const [animationIsDone, setAnimationIsDone] = useState(false);
  const [transitionIsDone, setTransitionIsDone] = useState(false);

  return (
    <>
          <Canvas
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            animationIsDone={animationIsDone}
            setAnimationIsDone={setAnimationIsDone}
          />
          <Title
            isClicked={isClicked}
            setTransitionIsDone={setTransitionIsDone}
            transitionIsDone={transitionIsDone}
          />

          <h1
            id={isClicked ? "transitionTitle" : ""}
            className={animationIsDone ? "title visible" : "title"}
          >
            GO
          </h1>
    </>
  );
}
