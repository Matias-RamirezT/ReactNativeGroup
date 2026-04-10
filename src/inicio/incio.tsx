import { useEffect, useState } from "react";
import "./styles.css";

interface NarutoCharacter {
  id: number;
  name: string;
  images: string[];
}

export default function Inicio() {

  const [naruto, setNaruto] = useState<NarutoCharacter | null>(null);

  useEffect(() => {
    const fetchNaruto = async () => {
      try {
        const res = await fetch("https://dattebayo-api.onrender.com/characters");
        const data = await res.json();

        // 🔥 Buscar a Naruto
        const narutoChar = data.characters.find(
          (c: NarutoCharacter) => c.name.toLowerCase().includes("naruto")
        );

        setNaruto(narutoChar);

      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchNaruto();
  }, []);

  return (
    <div className="home">

      <div className="hero">

        <div className="hero-text">
          <h1>🥷 Naruto API</h1>
          <p>
            Explora personajes del universo Naruto, sus habilidades, jutsus y afiliaciones.
            Esta app consume una API pública para mostrar información en tiempo real.
          </p>
        </div>

        <div className="hero-img">
          {naruto ? (
            <img src={naruto.images?.[0]} alt={naruto.name} />
          ) : (
            <p>Cargando...</p>
          )}
        </div>

      </div>

    </div>
  );
}