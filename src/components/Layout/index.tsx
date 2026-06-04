import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34rem),#020617] text-white">
    <Header />
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-24 md:px-6">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
