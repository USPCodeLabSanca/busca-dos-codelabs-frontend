import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Start from "./screens/Start";
import Join from "./screens/Join";
import Tutorial from "./screens/Tutorial";
import Game from "./screens/Game";
import Qr from "./screens/Qr";
import Ranking from "./screens/Ranking";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="/join" element={<Join />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/game" element={<Game />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
