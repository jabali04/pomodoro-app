import React, {useContext, useState, useRef, useEffect} from "react"; 
import { DataContext} from "./DataContext";
import { VscSettingsGear} from "react-icons/vsc";
import Modal from 'react-bootstrap/Modal';
import Button from "./Button";


export const Settings = () => {
    const {isLight, setSeconds, setIsLight, timeArray, setTimeArray, timeToRender} = useContext(DataContext);
    const [show, setShow] = useState(false);
    const [timeChange, setTimeChange] = useState(false)
    const checkbox = useRef('radio1');
    const time = useRef(timeArray)

useEffect(()=>{
  if (timeChange === true) {
    timeToRender.counter = 0
    setSeconds(0)
    handleTimeChange()
  } 
}, [timeChange])


function handleTheme(theme) {
  if (theme === 'radio1') {
    setIsLight(true)
  }
  if (theme === 'radio2') {
    setIsLight(false)
  }
}

const handleClose = () => {setShow(false) };
const handleShow = () => {setShow(true); setTimeChange(false)} ;

function handleTimeChange() {
  setTimeArray[0] = time.current[0]
  setTimeArray[1] = time.current[1]  
  setTimeArray[2] = time.current[2]
}

function handleSaveChanges() {
  handleClose();
  handleTheme(checkbox.current)
  setTimeChange(true)
}


return (
        <div className="d-flex justify-content-center mb-3">
          <Button lightSettings={isLight? true : false} darkSettings={!isLight ? true : false} onClick={handleShow} settingsButton><VscSettingsGear/></Button>


      <Modal show={show} onHide={handleClose} className={isLight ? "modal modalLight" : "modal modalDark"}>

        <Modal.Header className={isLight ? "lightBody" : "darkBody"}>
          <Modal.Title>Pomodoro Settings</Modal.Title>
        </Modal.Header>


        <Modal.Body  className={isLight ? "lightBody" : "darkBody"}>
            <h5>Color Theme</h5>
            <div>
                <div className="form-check">
                  <input className={isLight ? "form-check-input" : "form-check-input form-check-input-dark"} type="radio" name="colorSettings" id="radio1" defaultValue="option1" defaultChecked={checkbox.current === "radio1" ? true : false} onChange={(e)=>{checkbox.current = e.target.id}}/>
                  <label className="form-check-label" htmlFor="radio1">Light Mode</label>
                </div>
                <div className="form-check">
                  <input className={isLight ? "form-check-input" : "form-check-input form-check-input-dark"} type="radio" name="colorSettings" id="radio2" defaultValue="option2" defaultChecked={checkbox.current === "radio2" ? true : false} onChange={(e)=>{checkbox.current = e.target.id}}/>
                  <label className="form-check-label" htmlFor="radio2">Dark Mode</label>
              </div>
            </div>
                <h5 className="mt-4">Time (Minutes)</h5>
                <div className="input-group input-group-sm mb-2">
                  <span className={isLight ? "input-group-text customSpanLight" : "input-group-text customSpanDark"} id="inputGroup-sizing-sm">Minutes</span>
                  <input type="number" className={isLight ? "form-control smt" : "form-control form-control-dark"}  placeholder={Math.floor(timeArray[0]/60)} onChange={(e)=>{time.current[0] = e.target.value * 60}}/>
                </div>
            <div className="input-group input-group-sm mb-2">
                <span className={isLight ? "input-group-text customSpanLight" : "input-group-text customSpanDark"} id="inputGroup-sizing-sm">Short Break</span>
                <input type="number" className={isLight ? "form-control smt" : "form-control form-control-dark"}  placeholder={Math.floor(timeArray[1]/60)} onChange={(e)=>{time.current[1] = e.target.value * 60}} /> 
            </div>
            <div className="input-group input-group-sm mb-2">
                <span className={isLight ? "input-group-text customSpanLight" : "input-group-text customSpanDark"} id="inputGroup-sizing-sm">Long Break</span>
                <input type="number" className={isLight ? "form-control smt" : "form-control form-control-dark"}  placeholder={Math.floor(timeArray[2]/60)}onChange={(e)=>{time.current[2] = e.target.value * 60}}/>
            </div> 

        </Modal.Body>

        <Modal.Footer className={isLight ? "lightBody" : "darkBody"}>
          <Button className={isLight ? "lightDownButton" : "darkDownButton"} onClick={handleClose}>Close</Button>
          <Button className={isLight ? "lightDownButton" : "darkDownButton"} onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

