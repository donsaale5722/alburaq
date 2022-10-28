
import './App.css';
import './assets/css/style.css';
import './assets/lib/animate/animate.min.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import Header from './component/header';
import Home from './component/home';
import Product from './component/product';
import Checkout from './component/checkout';
import Cart from './component/cart';
// import Blog from './component/blog';
// import About from './component/about';
import Contact from './component/contact';
import Footer from './component/footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    
    <Header/>
    <Routes>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/product" element={<Product/>}>
            
          </Route>
          <Route path="/checkout" element={<Checkout/>}>
            
          </Route>
          <Route path="/cart" element={<Cart/>}>
            
          </Route>
          <Route path="/contact" element={<Contact/>}>
            
          </Route>
          </Routes>
      <Footer/>     
    </Router>
    
    
    </>
  );
}

export default App;
