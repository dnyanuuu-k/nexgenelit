import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StartYourProjectForm from "./components/StartYourProject/StartYourProjectForm";
import PAP from "./components/PrivacyAndPolicy/PAP";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <main className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PAP />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/start-your-project"
            element={<StartYourProjectForm />}
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
