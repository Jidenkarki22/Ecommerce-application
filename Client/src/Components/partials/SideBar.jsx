import { Link } from "react-router-dom";
import { FaTachometerAlt, FaPlusCircle, FaBox, FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar w-64 h-screen bg-gradient-to-b from-green-400 to-green-600 text-white p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Admin Panel</h2>
      <ul className="space-y-6">
        <li className="flex items-center">
          <FaTachometerAlt className="text-xl mr-4" />
          <Link to="/dashboard" className="hover:text-green-300">Dashboard</Link>
        </li>
        <li className="flex items-center">
          <FaPlusCircle className="text-xl mr-4" />
          <Link to="/addcategory" className="hover:text-green-300">Add Category</Link>
        </li>
        <li className="flex items-center">
          <FaBox className="text-xl mr-4" />
          <Link to="/addproduct" className="hover:text-green-300">Add Product</Link>
        </li>
        <li className="flex items-center">
          <FaShoppingCart className="text-xl mr-4" />
          <Link to="/addorder" className="hover:text-green-300">Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
