import { Outlet } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
