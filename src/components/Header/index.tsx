import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ContactUs from "@/components/ContactUs";
import Char4 from "@/assets/wizard.png";
import Logo from "@/assets/EduLevelingLogo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/missions", label: "Missions" },
  { to: "/about", label: "About" }
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none ${
    isActive ? "bg-cyan-300 text-slate-950" : "text-slate-200 hover:bg-white/10"
  }`;

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label="Tankistebi home">
          <img src={Logo} alt="" className="h-12 w-auto" />
          <span className="hidden text-lg font-black text-white sm:block">Tankistebi</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/profile" className="hidden rounded-full border border-cyan-300/30 bg-white/10 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:block" aria-label="Open profile">
            <img src={Char4} alt="" className="size-9 rounded-full object-cover" />
          </Link>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[82%] border-white/10 bg-slate-950 text-white">
                <Link to="/" className="mb-8 flex items-center gap-3">
                  <img src={Logo} alt="" className="h-12 w-auto" />
                  <span className="font-black">Tankistebi</span>
                </Link>
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-3">
                    {navItems.map((item) => (
                      <li key={item.to}>
                        <SheetClose asChild>
                          <NavLink to={item.to} end={item.to === "/"} className={navClass}>
                            {item.label}
                          </NavLink>
                        </SheetClose>
                      </li>
                    ))}
                    <li>
                      <ContactUs />
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
