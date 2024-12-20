import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/media-fusion-portfolio" element={<AboutUs />} />
          <Route path="/media-fusion-portfolio/work" element={<OurWork />} />
          <Route
            path="/media-fusion-portfolio/work/:id"
            element={<MovieDetail />}
          />
          <Route
            path="/media-fusion-portfolio/contact"
            element={<ContactUs />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

// "homepage": "https://AhmedNadeemGondal.github.io/media-fusion-portfolio",
