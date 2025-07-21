import React from "react";
import logo from "../assets/Health-logo.png";
import Button from "./button";


const Navbar = () => {
  return (
  <>        
 
    <div  className="flex justify-around align-middle text-center gap-[20px] ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex ">
        <ol className="flex justify-center gap-[10px]">
          <li> Home</li>
          <li> Find Care </li>
          <li> Health Tips</li>
          <li> Supports</li>
        </ol>
      </div>
      <div className="flex " >
        <Button />
        <Button />
      </div>
    </div>
     </>
  );
};

export default Navbar;
