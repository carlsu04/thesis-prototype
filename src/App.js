import { BrowserRouter, Routes, Route } from "react-router-dom";

import Analysis from "./pages/analysis";
import History from "./pages/history";
import Reports from "./pages/reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/history" element={<History />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;