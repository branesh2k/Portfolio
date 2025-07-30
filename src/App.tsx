import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import "./index.css";
import ScrollToTop from "./components/Utility/ScrollToTop";
import NotFound from "./components/Utility/NotFound";
import Thanks from "./components/Utility/Thanks";

const App = () => {
  return (
    <div className="app-layout">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />

          {/* <MyWork /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
