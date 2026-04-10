import { useEffect, useState } from "react";
import './styles.css';

interface Character {
  id: number;
  name: string;
  images: string[];
  jutsu: string[];
  natureType: string[];
  affiliation: string[];
}

export default function Original() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selected, setSelected] = useState<Character | null>(null);
  const [level, setLevel] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dattebayo-api.onrender.com/characters");
        const data = await res.json();
        setCharacters(data.characters);
      } catch (error) {
        console.log("Error fetching characters: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (character: Character) => {
    setSelected(character);
    setLevel(0);
    setLog([`Has elegido a ${character.name} para entrenar.`]);
  };

  const train = (type: string) => {
    if (!selected) return;
    const gain = 10;
    setLevel((prev) => prev + gain);
    setLog((prev) => [
      `+${gain} puntos de ${type} para ${selected.name}.`,
      ...prev,
    ]);
  };

  return (
  <div className="game-container">
    <h1>Entrenamientos Ninja</h1>

    {!selected && (
      <div>
        <h2>Elige tu ninja</h2>

        <div className="character-list">
          {characters.slice(0, 10).map((c) => (
            <button
              className="btn"
              key={c.id}
              onClick={() => handleSelect(c)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    )}

    {selected && (
      <div className="card">
        <h2>{selected.name}</h2>

        {selected.images?.[0] && (
          <img
            src={selected.images[0]}
            alt={selected.name}
          />
        )}

        <p>Aldea: {selected.affiliation?.[0] ?? "Desconocida"}</p>
        <p>Jutsu principal: {selected.jutsu?.[0] ?? "Desconocido"}</p>
        <p>Tipo de chakra: {selected.natureType?.[0] ?? "Desconocido"}</p>

        <h3 className="level">Nivel ninja: {level}</h3>

        <div>
          <button className="btn" onClick={() => train("Ninjutsu")}>
            Entrenar Ninjutsu
          </button>
          <button className="btn" onClick={() => train("Taijutsu")}>
            Entrenar Taijutsu
          </button>
          <button className="btn" onClick={() => train("Resistencia")}>
            Entrenar Resistencia
          </button>
        </div>

        <button className="btn" onClick={() => setSelected(null)}>
          Elegir otro ninja
        </button>
      </div>
    )}

    {log.length > 0 && (
      <div className="log">
        <h3>Registro de entrenamiento</h3>
        <ul>
          {log.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}
