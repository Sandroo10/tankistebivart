import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "@/components/ContactUs";
import Char4 from "@/assets/ninja.png"; 
import Logo from "@/assets/EduLevelingLogo.png"

const Header: React.FC = () => {
  return (
    <header className="h-20 px-6 flex justify-between items-center w-full fixed top-0 left-0 z-50 bg-black">
      <Link to="/" className="h-full w-[130px] p-1 flex justify-center items-center">
        <img src={Logo}/>
      </Link>
      <nav>
        <ul className="flex space-x-6 mr-6">
          <li><Link to="/" className="text-white font-semibold hover:underline hover:cursor-pointer">Home</Link></li>
          <li><Link to="/products" className="text-white font-semibold hover:underline hover:cursor-pointer">Missions</Link></li>
          <li><ContactUs /></li>
          <li><Link to="/about" className="text-white font-semibold hover:underline hover:cursor-pointer">About us</Link></li>
        </ul>
      </nav>
      <Link to="/profile" className="text-white text-2xl mr-4 hover:opacity-80 flex items-center bg-white rounded-full">
        <img src={Char4} alt="Profile Avatar" className="w-8 h-8 rounded-full m-1" />
      </Link>
    </header>
  );
};

export default Header;
