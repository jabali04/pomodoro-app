import React, {useContext, useEffect} from "react"; 
import { DataContext} from "./DataContext";
import Button from "./Button";

const buttonStatus = {
    pomodoroButton : false,
    breakButton: true,
    longBreakButton: true,
}


export const RenderUpButton = () => {
    const {seconds,  timeArray, isLight, timeToRender } = useContext(DataContext);

    
    useEffect (()=>{
        if (timeToRender.counter === 0) {
            buttonStatus.longBreakButton = false
            buttonStatus.breakButton  = true
            if (seconds === 0) {
                buttonStatus.longBreakButton = true
                buttonStatus.pomodoroButton = false
            } 
            return
        }
        if (timeToRender.counter % 2 === 0) {
            buttonStatus.breakButton = false;
            if (seconds === 0) {
                buttonStatus.breakButton = true
                buttonStatus.pomodoroButton = false
            } 
        }
        if (timeToRender.counter % 2 !== 0) {
            buttonStatus.pomodoroButton = false
            if (seconds === 0) {
                buttonStatus.pomodoroButton = true
                if (timeToRender.counter < 6) {
                    buttonStatus.breakButton = false
                } 
                if (timeToRender.counter > 6)
                    {buttonStatus.breakButton = true
                    buttonStatus.longBreakButton = false}
            } 
        }
    }) 

    return (
        <div className={isLight ? "d-flex justify-content-center mb-2 lightUpButtonsDiv" : "d-flex justify-content-center mb-2 darkUpButtonsDiv"}>
            <Button 
            outlineS ={isLight? true : false}
            outlineP={!isLight ? true : false}
            small
            upBut
            active
            disabled={buttonStatus.pomodoroButton}
            >POMODORO</Button>

            <Button 
            outlineS ={isLight? true : false}
            outlineP={!isLight ? true : false}
            small
            upBut
            active
            disabled={buttonStatus.breakButton}
            >BREAK</Button>

            <Button 
            outlineS ={isLight? true : false}
            outlineP={!isLight ? true : false}            
            small
            upBut
            active
            disabled={buttonStatus.longBreakButton}
            >LONG BREAK</Button>
        </div>
    )
}

