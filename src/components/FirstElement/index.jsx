import { useState, useEffect } from 'react';

import './firstElement.scss';

export default function FirstElement({transitionIsDone}) {

 

  return (
    <div className='waveContainer'>
      <svg
      // ref={firstWave}
      // style={{left: mouseX / 150}}
      className="waves"
        width="1726"
        height="920"
        viewBox="0 0 1726 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512.5 383C317 214.5 457.5 234.5 0.5 485V919.5H1725.5V299C1659 322.5 1514 312.3 1466 83.5C1406 -202.5 1386.5 327.5 1253.5 469.5C1120.5 611.5 1129 274.5 1056 139C983 3.50009 841 283 827.5 354C814 425 708 551.5 512.5 383Z"
          fill="red"
        />
      </svg>

      <svg
      // ref={secondWave}
      // style={{right: mouseX / 150}}

      className="waves"
        width="1726"
        height="920"
        viewBox="0 0 1726 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512.5 383C317 214.5 457.5 234.5 0.5 485V919.5H1725.5V299C1659 322.5 1514 312.3 1466 83.5C1406 -202.5 1386.5 327.5 1253.5 469.5C1120.5 611.5 1129 274.5 1056 139C983 3.50009 841 283 827.5 354C814 425 708 551.5 512.5 383Z"
          fill="green"
        />
      </svg>

      <svg
      // ref={thirdWave}
      // style={{left: mouseX / 100}}

      className="waves"
        width="1726"
        height="920"
        viewBox="0 0 1726 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512.5 383C317 214.5 457.5 234.5 0.5 485V919.5H1725.5V299C1659 322.5 1514 312.3 1466 83.5C1406 -202.5 1386.5 327.5 1253.5 469.5C1120.5 611.5 1129 274.5 1056 139C983 3.50009 841 283 827.5 354C814 425 708 551.5 512.5 383Z"
          fill="blue"
        />
      </svg>

      <svg
      // ref={fourthWave}
      // style={{right: mouseX / 150}}

      className={transitionIsDone ? "waves open" : "waves"}
        width="1726"
        height="920"
        viewBox="0 0 1726 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512.5 383C317 214.5 457.5 234.5 0.5 485V919.5H1725.5V299C1659 322.5 1514 312.3 1466 83.5C1406 -202.5 1386.5 327.5 1253.5 469.5C1120.5 611.5 1129 274.5 1056 139C983 3.50009 841 283 827.5 354C814 425 708 551.5 512.5 383Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
