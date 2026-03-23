import { useState, useEffect } from 'react';
import type { Character } from '../types/character';

export const useCharacter = () => {

    const [character, setCharacter] = useState<Character []>([]);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const fetchCharacter = async () => {

            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                if(!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setCharacter(data.results);

            }
            catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to fetch character');
            }finally{
                setLoading(false);
            }

            }
        }       
    ,[]);

    return { character, loading, error };
}
