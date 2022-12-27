import React from "react";
import Circulo from "../components/circulo";
/*import imageOne from "../images/image1.png";*/
import fondo from "../images/fondo.png";



const soundWave = () => {
  return (
    <div className="ContainerHome">
      <Circulo/>
      <img className="fondo" src={fondo} />
      <Circulo/>
      <div className="partRight">
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one
        click</p>
        <br/>
        </div>
      <div className="boton">
        <button>Join Now</button>
      </div>
      </div>  
  );
  };
export default soundWave;
