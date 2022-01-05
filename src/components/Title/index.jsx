import { useEffect } from "react";

import "./title.scss";

export default function Title({
  isClicked,
  setTransitionIsDone,
  transitionIsDone,
}) {
  useEffect(() => {
    if (isClicked == true) {
      setTimeout(() => {
        setTransitionIsDone(!transitionIsDone);
        console.log(transitionIsDone + " transition");
      }, 2500);
    }
  }, [isClicked]);

  return (
    <div className={isClicked ? "titleBox visible" : "titleBox"}>
      <div className={isClicked ? "line deployed" : "line"}></div>
      <h1 className="titleInHeader">GO</h1>
      <div className={isClicked ? "line deployed" : "line"}></div>
    </div>
  );
}
