import { useEffect, useRef } from "react";

import roundClass from "../../services/roundClass";

import "./canvas.scss";

const getWindowDimentions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width, height
  };
};

export default function Canvas({
  isClicked,
  setIsClicked,
  animationIsDone,
  setAnimationIsDone,
}) {


  const canvas = useRef();
  const steps = 15;

  const firstStep = (iterable, context) => {
    let firstIteration = iterable;

    if (firstIteration === steps) {
      secondStep(0, context);
      return true;
    } else {
      setTimeout(() => {
        const roundWhite = new roundClass(
          canvas.current.width * 0.5,
          canvas.current.height * 0.5,
          firstIteration * 20
        );
        roundWhite.draw(context);
        roundWhite.strokeWhite(context, firstIteration);

        firstStep(iterable + 1, context);
      }, 60);
    }
  };

  const secondStep = (iterable, context) => {
    let secondIteration = iterable;

    if (secondIteration === steps) {
      setAnimationIsDone(!animationIsDone);
      return true;
    } else {
      setTimeout(() => {
        const roundBlack = new roundClass(
          canvas.current.width * 0.5,
          canvas.current.height * 0.5,
          secondIteration * 20
        );

        roundBlack.draw(context);
        roundBlack.strokeBlack(context, secondIteration);

        secondStep(iterable + 1, context);
      }, 60);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    
    // console.log(getWindowDimentions().);

    const context = canvas.current.getContext("2d");
    firstStep(0, context);
  }, []);

  return (
    <section id="page">
      <canvas
        onClick={handleClick}
        id={isClicked ? "transition" : ""}
        className={animationIsDone ? "canvas shadowed" : "canvas"}
        ref={canvas}
        width={600}
        height={600}
      ></canvas>
    </section>
  );
}
