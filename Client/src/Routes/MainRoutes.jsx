
import { Route, Routes } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard/admin/Dashboard'
import AddCategory from '../Pages/category/AddCategory'
import AddUsers from '../Pages/users/AddUsers'
// import Orders from '../Pages/Order/Order'
import Products from '../Pages/Products/Products'
import CustomerDashboard from '../Pages/Customer/CustomerDashboard'
import Cart from '../Pages/addtoCart/Cart'
import Signup from '../Pages/SignUp/SignUp'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/customer-dashboard' element={<CustomerDashboard/>} />
        <Route path='/addcategory' element={<AddCategory/>} />
        <Route path='/adduser' element={<AddUsers/>} />
        {/* <Route path='/addorder' element={<Orders/>} /> */}
        <Route path='/addproduct' element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
    </Routes>

  )
}

export default MainRoutes