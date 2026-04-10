import { useEffect, useState } from "react";

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

                console.log(data);

                setCharacters(data.characters); 

            }catch(error){
                console.log('Error searching data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Characters</h2>

            {characters.map((character) => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <p>{character.jutsu?.[0]}</p>
                    <p>{character.natureType?.[0]}</p>
                    <p>{character.affiliation?.[0]}</p>
                    <img src={character.images?.[0]} alt={character.name} width="150"/>
                </div>
            ))}
        </div>
    )
}
