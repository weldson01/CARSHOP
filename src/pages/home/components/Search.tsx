import { MagnifyingGlass } from "@phosphor-icons/react"


export const Search = ()=>{


    function handleInput(){
        // Todo
    }

    return <form className="flex justify-center items-center m-16 gap-4">
     <input type="text" placeholder="Encontrar o meu carro!" className="min-w-96  h-16 rounded-3xl pl-2 border-2 text-lg first-letter:capitalize"/>
     <button  onClick={handleInput} className="bg-primary hover:bg-second w-16 h-16 rounded-full flex items-center justify-center">
        <MagnifyingGlass size={32} color="#fff"/>
     </button>
    </form>
}