import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Product"
import ProductList from "./components/ProductList"
import WomenClothes from "./pages/WomenClothes"
import MenClothes from "./pages/MenClothes"
import ChildClothes from "./pages/ChildClothes"
import Contact from "./pages/Contact"
import User from "./pages/User"
import AdminDashboard from "./pages/adminDashboard"

const App = () => {
  return <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<ProductList/>} />
  <Route path="/products/womenClothes" element={<WomenClothes />} />
  <Route path="/products/menClothes" element={<MenClothes />} />
  <Route path="/products/childClothes" element={<ChildClothes />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/user" element={<User />} />
  <Route path="/adminDashboard" element={<AdminDashboard/>} />
  </Routes>
}
export default App