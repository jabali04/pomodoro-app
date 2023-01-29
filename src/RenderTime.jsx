import React, {useContext, useEffect} from "react"; 
import { DataContext} from "./DataContext";

const formatingTime = (time) => {  
    let minutes = Math.floor(time/60);  
    let seconds = Math.floor(time-minutes*60);  
    if (minutes <= 9) minutes = '0' + minutes;  
    if (seconds <= 9) seconds = '0' + seconds;  
    return minutes + ':' + seconds  
};  

export const RenderTime = () => {
    const {seconds, setIsTimeRunning, timerId, timeArray, setSeconds, isLight, timeToRender} = useContext(DataContext); 

    useEffect(()=>{
        if (seconds <= 0) {
            clearInterval(timerId.current);
            setIsTimeRunning(false);

            if (timeToRender.counter === 7) {
                timeToRender.counter = 0
                setSeconds(timeArray[2])
                return
            }
            if (timeToRender.counter % 2 === 0) {
                timeToRender.counter++;
                setSeconds(timeArray[0])
                return
            }
            if (timeToRender.counter %2 !== 0){
                timeToRender.counter++;
                setSeconds(timeArray[1])
                return
            } 
            
        }
    }) 

    return (
        <>
        {isLight ? <h1 className="lightRenderedTime">{formatingTime(seconds)}</h1> : <h1 className="darkRenderedTime">{formatingTime(seconds)}</h1>}
        </>
    )

}
