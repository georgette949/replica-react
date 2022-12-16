import React from "react";
import imageOne from "../images/image1.png";




const soundWave = () => {
  return (
    <div className="ContainerHome">
      <img className="imagenOne" src={imageOne} />
      <div className="partRight">
        <h1>Feel The Music
        Stream over 20 thousand songs with one
        click</h1>
        <br/>
        <p></p>
        </div>
      <div className="boton">
        <button>Join Now</button>
      </div>
      </div>  
  );
  };
export default soundWave;
