import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold">Trendora</h2>
          <p className="text-gray-400 mt-3">Your one-stop destination for premium shopping.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><NavLink to="/" className="text-gray-400 hover:text-gray-200">Home</NavLink></li>
            <li><NavLink to="/products" className="text-gray-400 hover:text-gray-200">Products</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-400 hover:text-gray-200">Contact US</NavLink></li>
            <li><NavLink to="/about" className="text-gray-400 hover:text-gray-200">About</NavLink></li>
            <li><NavLink to="/cart" className="text-gray-400 hover:text-gray-200">Cart</NavLink></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <p className="text-gray-400 mt-3">Stay updated with our latest products and offers.</p>
          <div className="flex mt-4">
            <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-l-lg text-black" />
            <button className="bg-blue-600 p-2 rounded-r-lg hover:bg-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-gray-200">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-gray-200">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-gray-200">
              <Twitter size={24} />
            </a>
            <a href="mailto:support@myshop.com" className="text-gray-400 hover:text-gray-200">
              <Mail size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
