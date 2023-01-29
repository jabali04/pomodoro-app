import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useContext, useState, useRef} from 'react';
import { DataContext} from "./DataContext";

export const ProgressBarRen = () => {
    const {isTimeRunning, seconds, isLight, timeToRender, timeArray} = useContext(DataContext);
    const [filled, setFilled] = useState(0);
    const timerTracker = useRef();
    const blabla = useRef();


function goBackToZero () {
    if (seconds === 0) {
        timerTracker.current = 0
    }
}


    useEffect(()=>{
        if (timeToRender.counter === 0) {
            timerTracker.current = timeArray[2]
            goBackToZero ()
        }
        if (timeToRender.counter % 2 === 0 && timeToRender.counter !== 0) {
            timerTracker.current = timeArray[1]    
            goBackToZero()
        }
        if (timeToRender.counter %2 !== 0){
            timerTracker.current = timeArray[0]
            goBackToZero()
        } 
    });

    useEffect(()=>{
        if (isTimeRunning === true) {
            blabla.current = setInterval(()=>{
                setFilled(prev => prev + 1)
            }, 1000)
        } else {
            return
        }

    }, [isTimeRunning])


    useEffect(()=>{

        if (seconds === 0) {
            setFilled(0)
            clearInterval(blabla.current)
        }
        if (isTimeRunning === false) {
            clearInterval(blabla.current)
        }
        
    }, [seconds, isTimeRunning])    

    return (
        <div className='d-flex justify-content-center'>
        <ProgressBar className='mt-2 w-50'
        variant={isLight ? "warning" : "success"}
        min={0}
        now={filled} 
        max={timerTracker.current} 
        />
        </div>
    )
}

