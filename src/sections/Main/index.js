import {Container} from "./styles.js"
import global from "../../styles/global.css"
import Filter from "../../components/Filter/index.js"
import Pokemons from "../../components/Pokemons/index.js"
import Api from "../../api/api.js"
import Search from "../Search/index.js"




const Main=()=>{
   

    
    return <Container className="container">


        <Pokemons></Pokemons>

    </Container>
}

export default Main;