import { Routes, Route, NavLink } from "react-router-dom";
import Inicio from "./inicio/incio";
import Original from "./original/Original";
import "./App.css";
import Lista from "./lista/lista";

export default function App() {
  return (
    <>
      <nav className="naruto-navbar">
      <div className="naruto-links">
       <NavLink to="/" className="naruto-link">
      Inicio
    </NavLink>

    <NavLink to="/lista" className="naruto-link">
      Lista
    </NavLink>

        <NavLink to="/original" className="naruto-link">
      Original
    </NavLink>
  </div>
</nav>

      <main className="naruto-content">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/original" element={<Original />} />
        </Routes>
      </main>
    </>
  );
}