import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 p-5 shadow-md">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to MeroDookan</h1>
          <p className="mt-2 text-lg">Your one-stop shop for everything</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1: Products */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-blue-600 text-4xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Products</h2>
            <p className="text-center mb-4">Browse through our collection of amazing products.</p>
            <Link
              to="/addproduct"
              className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
            >
              Shop Now
            </Link>
          </div>

          {/* Card 2: Categories */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-green-600 text-4xl mb-4">
              <i className="fas fa-th-large"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Categories</h2>
            <p className="text-center mb-4">Explore various categories of products we offer.</p>
            <Link
              to="/addcategory"
              className="block bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
            >
              View Categories
            </Link>
          </div>

          {/* Card 3: Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-yellow-600 text-4xl mb-4">
              <i className="fas fa-box"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Orders</h2>
            <p className="text-center mb-4">Track and manage your orders with ease.</p>
            <Link
              to="/addorder"
              className="block bg-yellow-600 text-white text-center py-2 px-4 rounded-lg hover:bg-yellow-700 transition-all"
            >
              Manage Orders
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-5 text-center">
        <p>&copy; 2024 MeroDookan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
