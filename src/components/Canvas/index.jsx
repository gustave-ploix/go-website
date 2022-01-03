import { useEffect, useRef } from "react";

import roundClass from '../../services/roundClass';

import './canvas.scss';

export default function Canvas() {
    
    const canvas = useRef();
    const steps = 15;


    useEffect(() => {
        const context = canvas.current.getContext('2d');

        let index = 0;
        
        const firstStep = setInterval(() => {
            
            const roundWhite = new roundClass(canvas.current.width * 0.5, canvas.current.height * 0.5, index * 20);
            roundWhite.draw(context);
            roundWhite.strokeWhite(context, index);
            
            console.log(index + "first");
            index += 1;

            if (index == steps) {
                clearInterval(firstStep);

                let indexTwo = 0

                const secondStep = setInterval(() => {

                    const roundBlack = new roundClass(canvas.current.width * 0.5, canvas.current.height * 0.5, indexTwo * 20);
                    roundBlack.draw(context);
                    roundBlack.strokeBlack(context, indexTwo);

                    indexTwo += 1;
                    console.log(indexTwo + "second");

                    if(indexTwo == steps) {
                        clearInterval(secondStep);
                    }
                    //second loop
                }, 60)

            }
            //first loop
        }, 60)
            

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