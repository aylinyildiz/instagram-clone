import React from "react";
import camera from "../assets/camera.png";
import instagram from "../assets/instagram.png";
import send from "../assets/send.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <button>
        <img className="camera" src={camera} alt="camera" width="15%" />
      </button>
      <button>
        <img className="insta" src={instagram} width="25%" />
      </button>
      <button>
        <img className="send" src={send} alt="dm" />
      </button>
    </div>
  );
};

export default Navbar;
