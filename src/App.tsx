import { Routes, Route, NavLink } from "react-router-dom";
import Inicio from "./menu/Aldea";
import Ajustes from "./menu/Jutsus";
import Cocina from "./menu/Shinobis";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="naruto-navbar">
        <h2 className="naruto-logo">忍 Naruto App</h2>

        <div className="naruto-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "naruto-active" : "naruto-link"
            }
          >
            Aldea
          </NavLink>

          <NavLink
            to="/ajustes"
            className={({ isActive }) =>
              isActive ? "naruto-active" : "naruto-link"
            }
          >
            Jutsus
          </NavLink>

          <NavLink
            to="/cocina"
            className={({ isActive }) =>
              isActive ? "naruto-active" : "naruto-link"
            }
          >
            Shinobis
          </NavLink>
        </div>
      </nav>

      <main className="naruto-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/cocina" element={<Cocina />} />
        </Routes>
      </main>
    </>
  );
}