// Normal Routes


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
import Loader from "./components/Loader/Loader";

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




// // Loader till all assets get loaded

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import StartYourProjectForm from "./components/StartYourProject/StartYourProjectForm";
// import PAP from "./components/PrivacyAndPolicy/PAP";
// import About from "./components/About/About";
// import Work from "./components/Work/Work";
// import ScrollToTop from "./components/ScrollToTop";
// import Loader from "./components/Loader/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleLoading = () => {
//       setLoading(false);
//     };

//     // Wait for all images/videos to load
//     window.addEventListener("load", handleLoading);

//     return () => {
//       window.removeEventListener("load", handleLoading);
//     };
//   }, []);

//   return (
//     <main className="App">
//       {loading && <Loader />}
//       <Router>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/privacy-policy" element={<PAP />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/work" element={<Work />} />
//           <Route path="/start-your-project" element={<StartYourProjectForm />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </main>
//   );
// }

// export default App;






// // // Loader of 4 sec only 

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import StartYourProjectForm from "./components/StartYourProject/StartYourProjectForm";
// import PAP from "./components/PrivacyAndPolicy/PAP";
// import About from "./components/About/About";
// import Work from "./components/Work/Work";
// import ScrollToTop from "./components/ScrollToTop";
// import Loader from "./components/Loader/Loader";

// function App() {
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     // Hide the loader after 4 seconds
//     const timeout = setTimeout(() => {
//       setShowLoader(false);
//     }, 4000);

//     // Clear timeout when component unmounts
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <main className="App">
//       {/* Show loader if showLoader is true */}
//       {showLoader && <Loader />}
//       <Router>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/privacy-policy" element={<PAP />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/work" element={<Work />} />
//           <Route
//             path="/start-your-project"
//             element={<StartYourProjectForm />}
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </main>
//   );
// }

// export default App;
