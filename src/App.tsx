import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages";
import Hobby from "@/pages/Hobby";
import ReviewNime from "@/pages/Projects/ReviewNime";
import EPkk from "@/pages/Projects/EPkk";
import DepoMayarJaya from "@/pages/Projects/DepoMayarJaya";
import ReLive from "@/pages/Projects/ReLive";
import Medmart from "@/pages/Projects/Medmart";
import EduVerse from "@/pages/Projects/EduVerse.";

function App() {
  return (
    <Router>
      <Routes>

        {/* Index */}
        <Route path="/" element={<Home />} />
        <Route path="/reviewnime" element={<ReviewNime />} />
        <Route path="/epkk" element={<EPkk />} />
        <Route path="/depomayarjaya" element={<DepoMayarJaya />} />
        <Route path="/relive" element={<ReLive />} />
        <Route path="/medmart" element={<Medmart />} />
        <Route path="/eduverse" element={<EduVerse />} />
        <Route path="/hobby" element={<Hobby />} />
        
        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
