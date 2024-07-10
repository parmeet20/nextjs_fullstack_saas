import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="root">
      <Sidebar />
      <div className="sm:hidden">
        <MobileNav />
      </div>
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </header>
  );
};

export default Layout;
