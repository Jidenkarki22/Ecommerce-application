import { useState } from "react";
import Footer from "../../Components/partials/Footer";
import { register } from "../Authentication/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // State for input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const signupresponse = await register(formData);

      if (signupresponse.status === 201) {
        navigate("/");
      } else {
        toast.error("Error Notification!" + e, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Error Notification!" + error, { position: "bottom-left" });
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side: Image */}
        <div
          className="w-1/2 bg-cover bg-center bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-900"
          style={{ backgroundImage: "url('/images/logo1.png')" }}
        >
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-3xl font-extrabold text-white text-center">Join Us</h1>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-300">
          <form
            className="w-full max-w-sm bg-white shadow-lg p-6 rounded-lg border border-gray-300"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold mb-5 text-center text-indigo-600">Sign Up</h2>

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-base font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-base font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-base font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base"
                required
              />
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-base font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 text-base text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
