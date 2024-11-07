import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages";


function App() {
  return (
    <Router>
      <Routes>
        {/* Index */}
        <Route path="/" element={<Home />} />

        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
