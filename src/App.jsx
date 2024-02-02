import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { languages, currencies } from "./data";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import SingleTour from "./pages/tour/SingleTour";
import { useEffect } from "react";

function App() {
  // scroll to top when changing route
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/:id" element={<SingleTour />} />
      </Routes>
      <Footer languages={languages} currencies={currencies} />
    </BrowserRouter>
  );
}

export default App;
