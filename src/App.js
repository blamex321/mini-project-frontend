import Footer from "./components/FixedComponents/Footer";
import Navbar from "./components/FixedComponents/Navbar";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductsPage from "./pages/ProductsPage";
import DedicatedProduct from "./pages/DedicatedProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DedicatedProduct/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
