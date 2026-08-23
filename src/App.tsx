
import { Routes , Route} from 'react-router-dom'
import './App.css'
// import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import MainLayouts from './layouts/mainLayouts/MainLayouts'
import ProductPage from './pages/productPage/ProductPage'
import CartPage from './pages/cart/CartPage'
import { ShopingCartProvider } from './context/ShopingCartContext'
import Dashboard from './pages/dashboard/Dashboard'
import AuthenticatedRoute from './pages/Authentication/AuthenticatedRoute'
import { AuthContextProvider } from './context/AuthContext'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A222C]">
    <AuthContextProvider>
    <ShopingCartProvider>
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route element={<MainLayouts />} >
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route element={<AuthenticatedRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />    
      </Route>
      </Route>      
    </Routes>
    
    </ShopingCartProvider>
    </AuthContextProvider>
    </div>
  )
}

export default App
