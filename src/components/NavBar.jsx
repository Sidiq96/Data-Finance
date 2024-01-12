import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    
  return (
    <div className="flex items-center justify-between h-24 text-white max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20}/>
      </div>
      <div className="fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
        <ul className="pt-4 uppercase">
        <li className="p-4 border border-gray-600 border-bottom">Home</li>
        <li className="p-4 border border-gray-600 border-bottom">Company</li>
        <li className="p-4 border border-gray-600 border-bottom">Resources</li>
        <li className="p-4 border border-gray-600 border-bottom">About</li>
        <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
