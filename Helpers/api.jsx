import axios from "axios"

  const  getPokemon = async (dif) =>{
   let url = `https://pokeapi.co/api/v2/pokemon/${dif}`  

    try {
    
        const res = await axios.get(url);
        const {name, sprites} = res.data //partes del JSON al cual accedemos
        return {name, sprite:sprites.front_default}//, mini: sprites.versions.generation-viii.icons.front_default}
        
    } catch (error) {
        console.log(error)
    }
}
export {getPokemon}
