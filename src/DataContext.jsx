import React, { createContext, useState, useRef} from "react";

const timeToRender = {
    initialValues: [3,2,3],
    counter: 0,
}


export const DataContext = createContext();
export const DataProvider = ({children}) => {

    const [seconds, setSeconds] = useState(0);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [timeArray, setTimeArray] = useState([60,30,45]); 
    const [isLight, setIsLight] = useState(true)
    const timerId = useRef();


    if (isLight===true) {
        document.body.style = 'background: #FAFAFA ;';
    } else{
        document.body.style = 'background: #161d20	 ;';
    }
    

    
    return (
        <DataContext.Provider 
            value={{
                seconds, 
                setSeconds, 
                isTimeRunning, 
                setIsTimeRunning,
                timerId,
                timeArray,
                setTimeArray,
                isLight,
                setIsLight,
                timeToRender
                }}>
            {children}
        </DataContext.Provider>
    )
}
