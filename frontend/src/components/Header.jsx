import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({searchItem}) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 sm:py-0 fixed top-0 left-0 w-full bg-cyan-500 font-serif shadow-md z-50">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-cyan-200 ">
          <span className="text-black -ml-5">💎Kafia</span>
        </h1>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <i
            onClick={() => setOpen(!open)}
            className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-3xl cursor-pointer absolute right-0 top-4`}
          ></i>
        </div>

        {/* Navigation */}
        <ul
          className={`absolute left-0 w-full bg-cyan-500 text-center p-4 shadow-lg transition-transform duration-300 ${
            open ? "top-14 opacity-100" : "-top-96 opacity-0"
          } sm:static sm:flex sm:gap-6 sm:bg-transparent sm:w-auto sm:shadow-none sm:opacity-100 sm:top-0`}
        >
          <NavLink to="/" className="block py-2 sm:inline hover:text-white"><li>Home</li></NavLink>
          <NavLink to="/about" className="block py-2 sm:inline hover:text-white"><li>About</li></NavLink>

          <li className="relative mt-2">
                    <button 
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 hover:text-gray-300"
                    >
                        Products <i className="fa-solid fa-caret-down"></i>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-cyan-500 text-black shadow-lg rounded-md">
                            <li>
                                <NavLink to="/products/womenClothes" className="block px-4 py-2 hover:bg-gray-200">Women Clothes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/menClothes" className="block px-4 py-2 hover:bg-gray-200">Men Clothes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/childClothes" className="block px-4 py-2 hover:bg-gray-200">Child Clothes</NavLink>
                            </li>
                        </ul>
                    )}
                </li>

          <NavLink to="/contact" className="block py-2 sm:inline hover:text-white"><li>Contact</li></NavLink>
        </ul>

        {/* Search & Cart */}
        <div className="flex items-center space-x-3">

        <form>
            <input onChange={searchItem} className="w-[500px] h-[40px] bg-white text-black p-1 rounded-lg" type="text" placeholder="Enter What You Want!" />
        </form>
          
          <div className="flex items-center space-x-3 relative">
            <i className="fa-solid fa-cart-shopping text-2xl sm:ml-2 ml-3"></i>
            <span className="bg-red-500 w-5 h-5 text-sm flex justify-center items-center rounded-full absolute -top-3 right-8">0</span>
            <i className="fa-regular fa-circle-user text-3xl -mt-1"></i>
          </div>
        </div>
      </div>
      {/* Spacer si header-ku uusan u daboolin bogga */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Header;
