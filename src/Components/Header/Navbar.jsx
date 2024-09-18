import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../DarkModeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-400 bg-gray-700 flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center flex-shrink-0  mr-12">
        <img
          className="fill-current h-12 w-12 mr-2 rounded-lg"
          src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png"
          alt="coding-image"
          width="80"
          height="80"
        />
        <span className="text-blue-600 font-semibold text-3xl ml-4">REACT</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden ">
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Links for Desktop and Mobile */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full ml- block lg:flex lg:items-center lg:w-auto ml-auto`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-16 text-left font-bold">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-blue-600 hover:text-white mr-4"
          >
            HOME
          </Link>
          <Link
            to="/card"
            className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-blue-600 hover:text-white mr-4"
          >
            PROJECTS
          </Link>
          <Link
            to="/github"
            className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-blue-600 hover:text-white"
          >
            GITHUB
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-blue-600 hover:text-white"
          >
            ABOUT
          </Link>


          <DarkModeToggle/>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
