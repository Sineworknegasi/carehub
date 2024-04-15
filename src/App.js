import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Statstics from "./components/Statstics/Statstics";
import Cause from "./components/Cause/Cause";
import Qoute from "./components/Qoute/Qoute";
import Voluteer from "./components/Voluteer/Voluteer";
import Testimonal from "./components/Testimonal/Testimonal";
import Children from "./components/Children/Children";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import About_page from "./Pages/About_page/About_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cause_Page from "./Pages/Cause_page/Cause_Page";
import BlogPage from "./Pages/Blog_page/BlogPage";
import Contact from "./Pages/Contact/Contact";


function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Statstics />
                <Cause />
                <Qoute />
                <Voluteer />
                <Testimonal />
                <Children />
                <Blog />
              </>
            }
          >
          </Route>
          <Route path="About" element={<About_page/>}/>
          <Route path="Causes" element={<Cause_Page/>}/>
          <Route path="Blog" element={<BlogPage/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
