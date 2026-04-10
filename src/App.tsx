import { Routes, Route, NavLink } from "react-router-dom";
import Inicio from "./menu/Aldea";
import Ajustes from "./menu/Jutsus";
import Cocina from "./menu/Shinobis";
import Original from "./original/Original";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="naruto-navbar">
      <div className="naruto-links">
       <NavLink to="/" className="naruto-link">
      Aldea
    </NavLink>

    <NavLink to="/ajustes" className="naruto-link">
      Jutsus
    </NavLink>

    <NavLink to="/cocina" className="naruto-link">
      Shinobis
    </NavLink>

        <NavLink to="/original" className="naruto-link">
      Original
    </NavLink>
  </div>
</nav>

      <main className="naruto-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/cocina" element={<Cocina />} />
          <Route path="/original" element={<Original />} />
        </Routes>
      </main>
    </>
  );
}