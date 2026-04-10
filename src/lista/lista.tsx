import { useEffect, useState } from "react";
import "./styles.css";

interface CharactersOptions {
    id: number;
    name: string;
    images: string[];
    jutsu: string[];
    natureType: string[];
    affiliation: string[];
}

export default function Lista(){

    const [characters, setCharacters] = useState<CharactersOptions[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('https://dattebayo-api.onrender.com/characters');
                const data = await res.json();
                setCharacters(data.characters); 
            }catch(error){
                console.log('Error searching data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <h2 className="title">Naruto Characters</h2>

            <div className="grid">
                {characters.map((character) => (
                    <div className="card" key={character.id}>
                        <img 
                            src={character.images?.[0]} 
                            alt={character.name} 
                        />

                        <h3>{character.name}</h3>

                        <p><strong>Jutsu:</strong> {character.jutsu?.[0]}</p>
                        <p><strong>Chakra:</strong> {character.natureType?.[0]}</p>
                        <p><strong>Aldea:</strong> {character.affiliation?.[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}