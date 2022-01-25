import './mouseTracker.scss';

export default function MouseTracker({posX, posY}) {


    return (

        <div
        style={{transform: `matrix(1, 0, 0, 1, ${posX - 75}, ${posY - 140})`}}
        // style={{transform: "rotate(45deg)"}}
        className="mouseTracker">

        </div>

    )
}