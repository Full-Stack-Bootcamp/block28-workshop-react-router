import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Red from "../pages/Red";
import Blue from "../pages/Blue";

export default function Body() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="red" element={<Red />} />
        <Route path="blue" element={<Blue />} />
      </Routes>
    </div>
  );
}
