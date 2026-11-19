import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import GridBackground from "../components/ui/GridBackground";

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      <GridBackground />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;