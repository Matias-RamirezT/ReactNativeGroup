import { Routes, Route, NavLink } from "react-router-dom";
import Inicio from "./menu/Inicio";
import Ajustes from "./menu/Ajustes";
import Cocina from "./menu/Cocina";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="bb-navbar">
        <h2 className="bb-logo">
          Br<span className="bb-logo-box">Ba</span> App
        </h2>

        <div className="bb-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bb-active" : "bb-link")}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/ajustes"
            className={({ isActive }) => (isActive ? "bb-active" : "bb-link")}
          >
            Ajustes
          </NavLink>

          <NavLink
            to="/cocina"
            className={({ isActive }) => (isActive ? "bb-active" : "bb-link")}
          >
            Cocina
          </NavLink>
        </div>
      </nav>

      <main className="bb-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/cocina" element={<Cocina />} />
        </Routes>
      </main>
    </>
  );
}
