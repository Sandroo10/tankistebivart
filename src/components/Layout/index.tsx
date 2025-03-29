import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <div className="m-0 lg:px-28 px-4 py-16 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
