import { logout } from "../../Pages/Authentication/services";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md text-white">
            {/* Sidebar Toggle */}
            <div className="flex items-center">
                <button 
                    onClick={toggleSidebar} 
                    className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md shadow-md focus:outline-none">
                    &#9776;
                </button>
            </div>

            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/dashboard" className="flex items-center">
                    <img 
                        src="images/navLogo.png" 
                        alt="logo" 
                        className="hidden sm:block w-10 h-10 rounded-full border-2 border-white"
                    />
                </Link>

                <nav className="hidden sm:flex space-x-6">
                    <Link 
                        to="/dashboard" 
                        className="hover:text-yellow-300 transition duration-300 font-semibold">
                        Dashboard
                    </Link>
                    <Link 
                        to="/addproduct" 
                        className="hover:text-yellow-300 transition duration-300 font-semibold">
                        Product
                    </Link>
                    <Link 
                        to="/addcategory" 
                        className="hover:text-yellow-300 transition duration-300 font-semibold">
                        Category
                    </Link>
                    <Link 
                        to="/addorder" 
                        className="hover:text-yellow-300 transition duration-300 font-semibold">
                        Order
                    </Link>
                </nav>
            </div>

            {/* Logout Button */}
            <div>
                <button 
                    onClick={logout} 
                    className="bg-white text-indigo-700 hover:bg-red-600 hover:text-white transition duration-300 px-4 py-2 rounded-md font-bold shadow-md focus:outline-none">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;
