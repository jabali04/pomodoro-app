import React, {useContext} from "react"; 
import { DataContext} from "./DataContext";


export const RenderDiv = ({children}) => {
    const {isLight} = useContext(DataContext);

    return (
        <div className={isLight ? "centralDiv lightDiv" : "centralDiv darkDiv"}>{children}</div>
    )
}
