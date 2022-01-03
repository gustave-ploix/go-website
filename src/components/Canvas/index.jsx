import { useEffect, useRef, useState } from "react";

import roundClass from "../../services/roundClass";

import "./canvas.scss";

export default function Canvas() {
  const [animationIsDone, setAnimationIsDone] = useState(false);

  const canvas = useRef();
  const steps = 15;

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
        console.log("blabla");
      }, 60);
    }
  };

  const firstStep = (iterable, context) => {
    let firstIteration = iterable;

    if (firstIteration === steps) {
      // setTimeout(() => {
      secondStep(0, context);
      // }, 100);
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

  const handleMove = (e) => {
    console.log(canvas.current.style)


      canvas.current.style.transform = `rotate(${e.screenX / 10}deg)`
  }

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    firstStep(0, context);
  }, []);

  return (
    <section id='page' onMouseMove={handleMove}>
      <canvas
        id="canvas"
        className={animationIsDone ? "shadowed" : ""}
        ref={canvas}
        width={600}
        height={600}
      ></canvas>
      ;
      <h1 id="title" className={animationIsDone ? "visible" : ""}>
        GO
      </h1>
    </section>
  );
}
