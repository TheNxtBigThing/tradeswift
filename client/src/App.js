import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import News from "./components/News";
import Contact from "./components/Contact";
import NorthIcon from "@mui/icons-material/North";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Admin from './components/Admin';
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Authentication from "./pages/Authentication";
import Payment from "./pages/Payment";

function App() {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    AOS.init();
  }, []);

  window.addEventListener("scroll", function () {
    let backToTopButton = document.getElementById("backToTopBtn");
    if (window.scrollY > 40) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  return (
    <div className="dark:text-white dark:bg-dark transition transition-all ease-linear text-sm md:text-base">
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<NotFound />} />

          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/:parameter" element={<Authentication />} />
          <Route
            path="/payment"
            element={user ? <Payment /> : <Navigate to="/auth/login" />}
          />

          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
      <button
        id="backToTopBtn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <NorthIcon className="dark:text-white" />
      </button>
    </div>
  );
}

export default App;
