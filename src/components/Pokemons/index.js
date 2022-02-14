import {Container} from "./styles.js"
import  Api  from "../../api/api.js";
import { useState } from "react";
import ListPokemon from "../ListPokemon/index.js";
import Search from "../../sections/Search/index.js";

const Pokemons=()=>{
    const [searchPokemon,setSearchPokemon]=useState("")
    const [menageFunction,setMenageFunction]=useState(0)
    
    

    const FilterPokemon=(name)=>{
        setSearchPokemon(name)
    }


    
    
    const myapi=Api(); //funcao que veio da pasta api para poder ser utilizada


    const filter=myapi.filter((pokemon)=>pokemon.name.startsWith(searchPokemon)) // função que serve para filtrar os dados pelo nome
    const orderidMore=myapi.sort((pokemon)=>pokemon.id)// funcao que serve pra filtrar dados pelo id
    // 

     // funcao que gerencia as duas funcoes que  será alternada pelos inputs
    const Menager=(param)=>{
        if(param==0){
            return filter
        }
       if(param==1){
            return orderidMore
        }
       
    }

    
    
    return <Container>
        <div className=" content-Search ">
            {/* funcoes que são passado para as pros do search */}
        <Search filtrar={FilterPokemon} order={setMenageFunction}></Search>
        
        </div>
        <div className="contentList">
            
            {
            
            Menager(menageFunction).map((pokemon,index)=>
            // map que vai percorrer dos dados  do pokemon
            <ListPokemon
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            
            key={index}
            
            
            />

        )
         
        
        }
        </div>
       
        </Container>
}

export default Pokemons;