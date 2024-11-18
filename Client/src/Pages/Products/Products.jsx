import { useState } from "react";
import Navbar from "../../Components/partials/Navbar";
import ProductTable from "../../Components/common/table/ProductTable";
import Footer from "../../Components/partials/Footer";
import Sidebar from "../../Components/partials/SideBar";

const Products = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productQuantity: "",
  });

  const [products, setProducts] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: products.length + 1, // Just an example ID, this can be adjusted
    };

    setProducts([...products, newProduct]);
    setFormData({
      category: "",
      productName: "",
      productDescription: "",
      productPrice: "",
      productQuantity: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white shadow-xl flex-shrink-0">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Content Section */}
        <div className="p-8 bg-white bg-opacity-90 text-gray-800 flex-1">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Add Product</h1>

          {/* Form */}
          <div className="flex justify-center items-center">
            <form
              className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Category Name */}
              <div className="flex flex-col">
                <label htmlFor="category" className="text-lg font-semibold text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter category name"
                  required
                />
              </div>

              {/* Product Name */}
              <div className="flex flex-col">
                <label htmlFor="productName" className="text-lg font-semibold text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Product Description */}
              <div className="flex flex-col">
                <label htmlFor="productDescription" className="text-lg font-semibold text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  id="productDescription"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter product description"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Product Price */}
              <div className="flex flex-col">
                <label htmlFor="productPrice" className="text-lg font-semibold text-gray-700 mb-2">
                  Product Price
                </label>
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter product price"
                  required
                />
              </div>

              {/* Product Quantity */}
              <div className="flex flex-col">
                <label htmlFor="productQuantity" className="text-lg font-semibold text-gray-700 mb-2">
                  Product Quantity
                </label>
                <input
                  type="number"
                  id="productQuantity"
                  name="productQuantity"
                  value={formData.productQuantity}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter product quantity"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Add Product
              </button>
            </form>
          </div>

          {/* Product Table */}
          <div className="mt-10">
            <ProductTable products={products} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Products;
