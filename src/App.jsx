import React from "react"; 
import {DataProvider} from './DataContext';
import { RenderTime } from "./RenderTime";
import { RenderButton } from "./RenderDownButton";
import { RenderUpButton } from "./UpButtons";
import {ProgressBarRen} from "./ProgressBar";
import { Title } from "./Title";
import { Settings } from "./Settings";
import { RenderDiv } from "./CentralDiv";

function App () {


    return (
        <DataProvider>
        <Title></Title>
        <Settings></Settings>
        <RenderDiv>
        <RenderUpButton></RenderUpButton>
        <ProgressBarRen></ProgressBarRen>
        <RenderTime></RenderTime>
        <RenderButton></RenderButton>
        </RenderDiv>

        </DataProvider>  
    )
}

export default App;