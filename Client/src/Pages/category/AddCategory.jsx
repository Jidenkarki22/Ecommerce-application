import { useState } from "react";
import CategoryTable from "../../Components/common/table/CategoryTable";
import { axiosInstance } from "../../utils/config/apiConfig";
import Sidebar from "../../Components/partials/SideBar";
import Navbar from "../../Components/partials/Navbar";
import Footer from "../../Components/partials/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [refreshTrigger, setRefreshTrigger] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const addCategory = async () => {
        try {
            const response = await axiosInstance.post('/category/create', { name: newCategoryName });
            if (response.data.success) {
                setNewCategoryName('');
                toast.success("Category added successfully!");
                setRefreshTrigger((prev) => !prev); 
            } else {
                toast.error("Failed to add category.");
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error("An error occurred while adding the category.");
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
                {isSidebarVisible && <Sidebar />}
                <div className="flex-grow flex flex-col">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <div className="flex-grow p-6">
                        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
                            <h1 className="text-2xl font-bold text-center mb-4">Add Category</h1>
                            <div className="flex flex-col gap-4">
                                <input 
                                    type="text"
                                    placeholder="Enter category name"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    className="w-full h-10 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button 
                                    onClick={addCategory}
                                    className="w-full h-10 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                                    Add Category
                                </button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <CategoryTable refreshTrigger={refreshTrigger} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddCategory;
