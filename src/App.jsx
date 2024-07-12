import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
// import Login from './Pages/Auth/LoginPresentation.jsx'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import LoginPresentation from './Pages/Auth/LoginPresentation.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<LoginPresentation />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />


        <Route path='/denied' element={<Denied />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
