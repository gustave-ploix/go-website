import { useEffect, useRef } from "react";

import roundClass from "../../services/roundClass";

import "./canvas.scss";

export default function Canvas() {
  const canvas = useRef();
  const steps = 15;

  const secondStep = (iterable, context) => {
    let secondIteration = iterable;

    if (secondIteration === steps) {
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

        setTimeout(() => {
            secondStep(0, context);
        }, 200);
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

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    firstStep(0, context);
  }, []);

  return (
    <canvas id="canvas" ref={canvas} width={600} height={600}></canvas>
  );
}
