import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import Trendora from "../assets/Trendora.png";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="bg-transparent backdrop-blur-lg p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-zinc-700 text-3xl font-extrabold flex items-center space-x-2"
        >
          <img src={Trendora} alt="Trendora Logo" className="h-10 w-10" />
          <span>Trendora</span>
        </NavLink>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center items-center mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border-2 border-gray-400 rounded-full w-1/2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white shadow-md"
          />
          <button className="ml-2 text-zinc-700 hover:text-gray-400">
            <Search size={28} />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className="relative text-zinc-700 font-bold hover:text-gray-400 flex items-center"
          >
            <ShoppingCart size={22} className="mr-1" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 z-40">
          <NavLink
            to="/"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className="text-zinc-700 font-bold hover:text-gray-400"
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className="relative text-zinc-700 font-bold hover:text-gray-400 flex items-center"
          >
            <ShoppingCart size={20} className="mr-1" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  );
}
