import Canvas from "../Canvas";
import TitleOnCanvas from "../TitleOnCanvas";


export default function Preloader({
    isClicked,
    setIsClicked,
    animationIsDone,
    setAnimationIsDone,
    setTransitionIsDone
}) {

    return (
        <>
            <Canvas
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                animationIsDone={animationIsDone}
                setAnimationIsDone={setAnimationIsDone}
            />
            <TitleOnCanvas 
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                animationIsDone={animationIsDone}
                setAnimationIsDone={setAnimationIsDone}
                setTransitionIsDone={setTransitionIsDone}
            />
        </>
    )
}