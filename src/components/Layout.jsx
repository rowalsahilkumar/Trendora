import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header - Always Visible */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
        <Toaster position="top-right" reverseOrder={false} />
      </header>

      {/* Main Content Section - Dynamically Adjusts */}
      <main className="pt-[75px]">
        <Outlet />
      </main>

      {/* Footer Sticks to Bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;


