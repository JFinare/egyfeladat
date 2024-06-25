import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import RoomDetail from "./RoomDetail";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="homeButtonIcon">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/roomdetail/:id" element={<RoomDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
