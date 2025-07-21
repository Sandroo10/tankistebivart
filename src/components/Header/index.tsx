import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import ContactUs from "@/components/ContactUs";
import Char4 from "@/assets/ninja.png";
import Logo from "@/assets/EduLevelingLogo.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="h-20 px-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 bg-black shadow-[0_4px_20px_rgba(0,123,255,0.6)]">
      
      <Link to="/" className="h-full w-[130px] p-1 flex justify-center items-center">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className="hidden lg:flex">
        <ul className="flex space-x-6 mr-6">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#00BFFF] hover:drop-shadow-[0_0_8px_#00BFFF] transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white font-semibold hover:text-[#00BFFF] hover:drop-shadow-[0_0_8px_#00BFFF] transition duration-200"
            >
              Missions
            </Link>
          </li>
          <li>
            <ContactUs />
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-semibold hover:text-[#00BFFF] hover:drop-shadow-[0_0_8px_#00BFFF] transition duration-200"
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>

      
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white w-[75%]">
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="Logo" className="w-28" />
            </div>
            <nav>
              <ul className="flex flex-col space-y-6 text-lg font-semibold ml-5">
                <SheetClose asChild>
                  <Link to="/">Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/products">Missions</Link>
                </SheetClose>
                <SheetClose asChild>
                  <ContactUs />
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/about">About us</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/profile">Profile</Link>
                </SheetClose>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <Link
        to="/profile"
        className="hidden sm:flex text-white text-2xl ml-4 hover:opacity-80 items-center bg-white rounded-full mr-1"
      >
        <img src={Char4} alt="Profile Avatar" className="w-8 h-8 rounded-full m-1" />
      </Link>
    </header>
  );
};

export default Header;
