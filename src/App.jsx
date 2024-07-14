import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import LoginPresentation from './Pages/Auth/LoginPresentation.jsx'
import ProductDetails from './Pages/Products/ProductDetails.jsx'
import CartDetails from './Pages/Cart/CartDetails.jsx'
import Order from './Pages/Order/Order.jsx'
import OrderSuccess from './Pages/Order/OrderSuccess.jsx'
import RequireAuth from './Components/Auth/RequireAuth.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<LoginPresentation />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        
        <Route path='/denied' element={<Denied />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<NotFound />} />

        <Route element={<RequireAuth />}>
          <Route path='/order' element={<Order />} />
          <Route path='/order/success' element={<OrderSuccess />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
