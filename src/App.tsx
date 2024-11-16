import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages";
import Hobby from "@/pages/Hobby";


function App() {
  return (
    <Router>
      <Routes>
        {/* Index */}
        <Route path="/" element={<Home />} />
        <Route path="/hobby" element={<Hobby />} />

        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
