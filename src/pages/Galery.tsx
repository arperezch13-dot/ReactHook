import CharacterCard from "../components/CharacterCard/CharacterCard";
import { useCharacter } from "../hooks/useCharacter"


const Galery = () =>{
    const {character, loading, error} = useCharacter();
  return (
    <div className="min-h-screen bg-slate-900 p-8 font-sans">
        <h1 className="text-4xl font-black text-center text-cyan-400 mb-10 tracking-widest">Rick and Morty Wiki</h1>

    {/* MIENTRAS CARGA */}
        {loading &&
        (<div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400"></div>
        </div>)
        }

    {/* SI HAY ERRORES */}
    {error && (
        <div className="text-center text-red-500 bg-red-900/30 p-4 rounded-lg max-w-md mx-auto">
            El error es: {error}
        </div>
    )}

    {/* El camino feliz */}
    {!error && !loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {character.map((char)=>(
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    )}

    </div>
  )
}

export default Galery