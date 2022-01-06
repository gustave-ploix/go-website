import Navbar from '../Navbar';


export default function FullPage({ 
    isClicked,
    transitionIsDone
}) {


    return (
        <>
            <Navbar
                isClicked={isClicked}
                transitionIsDone={transitionIsDone}
            />
        </>
    )
}