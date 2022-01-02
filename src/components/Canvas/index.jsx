import { useEffect, useRef } from "react";

import './canvas.scss';

export default function Canvas() {
    
    const canvas = useRef();

    useEffect(() => {
        const context = canvas.current.getContext('2d');
    }, [])
    
    return (
        <canvas id="canvas" 
        ref={canvas}
        width={600}
        height={600}
        >

        </canvas>
    )
}