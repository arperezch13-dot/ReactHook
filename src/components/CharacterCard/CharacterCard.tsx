import type { Character } from '../../types/character'

interface CharacterCardProps {

    character: Character;


}
const CharacterCard = ({ character }: CharacterCardProps) =>  {

    //Diccionario para los colores del status
    
    const StatusColors = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-500',
    }
  return (
       <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-slate-700">
        <img src={character.image} alt={`Foto de ${character.name}`} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold text-white truncate mb-2">{character.name}</h2>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
                {/* Renderizado condicional del color usando el diccionario */}
                <div className={`w-3 h-3 rounded-full ${StatusColors[character.status]}`}></div>
                <span className="capitalize">{character.status} - {character.species}</span>
            </div>
        </div>
    </div>
  )
}

export default CharacterCard