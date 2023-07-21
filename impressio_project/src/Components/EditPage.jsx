import React, { useRef,useState } from "react";
import { Buttons } from "../Assets/Buttons";
import { CloseBtn } from "../Assets/CloseBtn";
import "./EditPage.css";
import {PassportScreen} from  './Homepage'
import Webcam from 'react-webcam';

export const EditPage = () => {
  const webcamRef = useRef(null);
  const [click, setClick]=useState(false)
  const [name, setName]=useState("")
  const [capturedImage, setCapturedImage] = useState(null);
  const [dashboard, setDashboard] = useState(false)

  
  const captureImage = () => {
    setClick(true)
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    
  };
  const retake = () => {
    setClick(false)
    setCapturedImage(null);
  };

  const dataSave = () =>{
    const image=imgToBase64(capturedImage)
    setTimeout(()=>{
      localStorage.setItem("capturedImage", JSON.stringify(image))
      localStorage.setItem("name", JSON.stringify(name))
    },500)
  }
  function imgToBase64(obj) {
    const jsonString = JSON.stringify(obj);
    const base64String = btoa(jsonString);
    return base64String;
  }

  const handleNameChange = (event) => {
    const nameInput = event.target.value;
    if (!/^[A-Za-z]+$/.test(nameInput) || nameInput.length > 30) {
      return;
    }
    setName(nameInput);
  };

  
  if(dashboard){
    return (
      <PassportScreen />
    )
  }
  return (
    <div className="edit-page">
      <div className="div">
        <div className="overlap">
        {click && <img src={capturedImage} alt="Captured" />}
        {!click &&
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 320,
              height:  371,
              facingMode: 'user',
            }}
          />
}
          {!click && <div className="shutter-button" onClick={captureImage}>
            <div className="overlap-group-2">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/cf5a48e5e02d06c10bc01cea4556488e/img/vector.svg"
              />
              <img
                className="img"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/cf5a48e5e02d06c10bc01cea4556488e/img/vector-1.svg"
              />
            </div>
          </div> }
          {click && <div className="shutter-button" onClick={retake}>
           
              <img
              className="retake-button-instance"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/a428796627410c8985456bab63ebba3a/img/retake-button-1.svg"
              />
          
          </div> }
          <button onClick={() => setDashboard(true)}>
          <CloseBtn
          className="close-btn-instance"
           frame="https://generation-sessions.s3.amazonaws.com/cf5a48e5e02d06c10bc01cea4556488e/img/frame-27-1.svg"
        />
          </button>
         
        </div>
        <input className="div-wrapper"  placeholder='Enter your first name' onChange={handleNameChange} />
        <button onClick={dataSave}>
        <Buttons className="buttons-instance" property1="primary-btn" text="Save" />
        </button>
      
      </div>
    </div>
  );
};
