import { useState, useEffect } from 'react';
import Navbar from '../../Components/customer/Navbar';
import Sidebar from '../../Components/customer/Sidebar';
import BannerSlider from '../../Components/customer/Banner';
import Card from '../../Components/Customer/Card';
import Footer from '../../Components/partials/Footer';
import { product } from './services';
import { FaStore } from 'react-icons/fa'; // Importing e-commerce-related icon for the logo

const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]); // State for storing fetched products

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const fetchProducts = async () => {
    try {
      const response = await product();
      console.log("Response Data:", response);
      setProducts(response.data?.allProduct || []); // Use optional chaining to avoid errors
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`p-4 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <BannerSlider />

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                image={product.photo || 'https://via.placeholder.com/150'} // Update if `photo` field is available
                productName={product.name}
                description={product.description}
                price={`$${product.price}`}
                quantity={product.quantity}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CustomerDashboard;

