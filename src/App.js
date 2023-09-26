import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Shop from "./pages/Shop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
