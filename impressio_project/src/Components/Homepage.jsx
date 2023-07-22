import React, { useEffect, useState, useRef } from "react";
import domtoimage from "dom-to-image";
import { HomeIcon } from "../Assets/HomeIcon";
import { MilkybarLogo } from "../Assets/MilkybarLogo";
import "./Homepage.css";
import { EditPage } from "./EditPage";

export const PassportScreen = () => {
  const entireScreenRef = useRef(null);
const [camera, setCamera] = useState(false)
const [name, setName] = useState('NAME')

useEffect(()=>{
  if (localStorage.getItem('name')) {
    setName(localStorage.getItem('name'))
  }  

},[])
const data = JSON.parse(localStorage.getItem('capturedImage')) ;
const obj = base64ToImg(data);

function base64ToImg(base64Str) {
  try {
    const jsonString = atob(base64Str);
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    return null;
  }
}

const handleDownload = (format) => {
  if (!entireScreenRef.current) return;

  domtoimage.toBlob(entireScreenRef.current).then((blob) => {
    const screenshotUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = screenshotUrl;
    downloadLink.download = `passport_ready.${format}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(screenshotUrl); 
  });
};


if(camera){
    return(
        <EditPage/>
    )
}
  return (
    <div className="passport-screen" ref={entireScreenRef}>
   <div className="div-2">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="background"
              alt="Background"
              src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/background.png"
            />
            <MilkybarLogo className="milkybar-logo-01-1" />
            <div className="passport">
              <div className="overlap-2">
                <img
                  className="my-passport"
                  alt="My passport"
                  src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/my-passport@2x.png"
                />
                <div className="rectangle-2" />
                <div className="details-passport">
                  <div className="overlap-3" onClick={() => setCamera(true)}>
                    <p className="i-m-ready-to">I’M READY TO DISCOVER THE WORLD !</p>
                    <div className="profile-photo">
                      {
                        obj && <img  className="captured_photo" 
                        src={obj}
                      />
                      }
                  
                      <div className="fallback-img">
                        <div className="group-wrapper">
                          <div className="group">
                            <div className="overlap-group-2">
                              <div className="ellipse" />
                              <img
                                className="ellipse-2"
                                alt="Ellipse"
                                src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/ellipse-7.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="overlap-4">
                        <div className="rectangle-3" />
                        <img
                          className="group-2"
                          alt="Group"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/group@2x.png"
                        />
                      </div>
                      <h1 className="h-1">{name}</h1>
                      <div className="text-wrapper-2">Name</div>
                    </div>
                    <div className="page-gradient" />
                  </div>
                </div>
                <div className="passport-bottom">
                  <div className="overlap-5">
                    <div className="rectangle-4" />
                    <div className="map-details-inside">
                      <div className="overlap-group-3">
                        <img
                          className="solid-color-world"
                          alt="Solid color world"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/solid-color-world-map-2.svg"
                        />
                        <div className="page-gradient-2" />
                        <div className="text-wrapper-3 conti">Continents Explored</div>
                        <img
                          className="lock-img"
                          alt="Lock img"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/lock-img-1@2x.png"
                        />
                        <img
                          className="lock-img-2"
                          alt="Lock img"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/lock-img-2@2x.png"
                        />
                        <img
                          className="lock-img-3"
                          alt="Lock img"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/lock-img-3@2x.png"
                        />
                        <img
                          className="check-mark"
                          alt="Check mark"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/check-mark-1.svg"
                        />
                        <img
                          className="check-mark-2"
                          alt="Check mark"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/check-mark-2.svg"
                        />
                        <img
                          className="check-mark-3"
                          alt="Check mark"
                          src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/check-mark-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => handleDownload("jpeg")}>
            <img
              className="group-3"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/group-18-1@2x.png"
            />
            </button>
         
          </div>
          <HomeIcon
            className="home-icon-instance"
            homeIcon="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/home-icon.svg"
          />
          <div className="sourvenirs">
            <div className="treasure-chest-wrapper">
              <img
                className="treasure-chest"
                alt="Treasure chest"
                src="https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/treasure-chest---1-1.svg"
              />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};
