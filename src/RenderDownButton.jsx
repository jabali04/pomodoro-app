import React, {useContext} from "react"; 
import { DataContext} from "./DataContext";
import Button from "./Button";

export const RenderButton = () => {

    const {setSeconds, setIsTimeRunning, isTimeRunning, timerId, isLight} = useContext(DataContext);

    function handleStart() {
        setIsTimeRunning(true);
        timerId.current = setInterval(()=>{
            setSeconds(prev => prev - 1)
        }, 1000)
    }

    function handleStop() {
        setIsTimeRunning(false) 
        clearInterval(timerId.current) 
    }

    return (
        <div className="d-flex justify-content-center">
        {isTimeRunning ? <Button 
        downButton
        lightButtonStop={isLight? true : false}
        darkButtonStop={!isLight ? true : false}
        onClick={handleStop}>STOP</Button> : 
        <Button 
        downButton
        lightButtonStart={isLight? true : false}
        darkButtonStart={!isLight ? true : false}
        onClick={handleStart}>START</Button>}
        </div>
        )
}

// outlineS ={isLight? true : false}