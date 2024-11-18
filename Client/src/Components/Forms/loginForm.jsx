import { Link } from "react-router-dom";
import Footer from "../partials/Footer";

const LoginForm = ({ loginInfo, setLoginInfo, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* Best Quote Section */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4">
              "The best way to predict the future is to create it."
            </h1>
            <p className="text-lg text-gray-600">Start your journey today by logging in!</p>
          </div>

          <div className="flex justify-center mb-6">
            <img src="images/logo1.png" alt="logo" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Sign In
          </h2>
          <form id="form" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Forgot Password and Sign Up */}
            <div className="flex justify-between items-center mb-6">
              <a
                href="#!"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
              <Link to="/signup">
                <button type="button" className="text-sm text-blue-600 underline">
                  Sign up
                </button>
              </Link>
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
