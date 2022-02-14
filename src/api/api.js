 import { useEffect,useState } from "react"
 
 
 const Api=()=>{
   // criando os states para poder armazenar as informacoes como o link da api
    const [allPokemons,setAllPokemons]=useState([])
    const [loadMore,setLoadMore]=useState("http://pokeapi.co/api/v2/pokemon?limite=20")
     

    
    const getAllPokemons=async()=>{
      const res=await fetch(loadMore)
      const data= await res.json()
      // pegando os dados  que vão vir  e depois  deixando em json
      setLoadMore(data.next)
      function createPokemonObject(result){
        // fazendo um forEach e  acessando as informacoes dinamicamente atraves do nome do pokemon
        result.forEach(async(pokemon)=>{
          const res=await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data=await res.json()
          setAllPokemons(currentList=>[...currentList,data])
          allPokemons.push(data)

         
        })
        
      }
      //passando os dados que veio para a api  para a funcao
      createPokemonObject(data.results)
      

    }

    useEffect(()=>{
        getAllPokemons()
        // atraves do effect pegar a lista de todos os pokemons
    },[])
    return allPokemons;


 }

 // exportando para poder utilizar no componente Pokemons
export default Api