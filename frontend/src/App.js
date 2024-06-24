import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/Themes/MUITheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="center-container">
          <div className="sticky-navbar">
            <Navbar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/mens" element={<ShopCategory category="men" />} />
              <Route
                path="/womens"
                element={<ShopCategory category="women" />}
              />
              <Route path="/kids" element={<ShopCategory category="kid" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
