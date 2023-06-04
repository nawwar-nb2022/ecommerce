import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
// import SC from "./components/ShoppingCard/SC";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Single from "./pages/single/Single";
const LazyCart = lazy(()=>import("./components/ShoppingCard/SC"))
const LazyBuy = lazy(()=>import("./pages/buy/Buy"))
function App() {
    return (
    <div className="App">
        <BrowserRouter>
              <NavBar/>
          <Routes>
              <Route path="/">
                <Route index element={<Product/>}/>
                <Route path="/:id" element={<Single/>} />
                <Route path="shopping" element={
                <Suspense fallback="loading"><LazyCart/></Suspense>} />
                <Route path="about" element={<AboutUs/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="payment" element={<LazyBuy/>} />
              </Route>
          </Routes>
              <Footer/> 
        </BrowserRouter> 
    </div>
  );
}

export default App;
