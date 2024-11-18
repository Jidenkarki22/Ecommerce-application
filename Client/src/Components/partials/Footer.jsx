import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-full mt-auto">
      <div className="w-full max-w-screen-xl mx-auto py-6 px-4 md:py-8 md:px-10">
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-6" />

        <div className="text-center mb-6">
          <span className="block text-lg font-semibold">
            © 2024 <u><strong>MeroDookan</strong></u> All Rights Reserved.
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>

        {/* Bottom Links (Optional) */}
        <div className="text-center">
          <a href="/privacy-policy" className="text-sm text-gray-200 hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm text-gray-200 hover:text-gray-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
