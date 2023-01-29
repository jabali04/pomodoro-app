import React, {useContext} from "react"; 
import { DataContext} from "./DataContext";
import { CiApple} from "react-icons/ci";


export const Title = () => {
    const {isLight} = useContext(DataContext);

    return <div className={isLight ? "d-flex justify-content-center mb-3 mt-4 lightLine" : "d-flex justify-content-center mb-3 mt-4 darkLine"}>
        <h2 className={isLight ? "lightTitle" : "darkTitle"}>POMODOR
            <span className={isLight ? "lightGearIcon" : "darkGearIcon"}><CiApple className="mb-2"/></span>
        </h2>
    </div>
}

