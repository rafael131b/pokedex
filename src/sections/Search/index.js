
import { InputSearch,SelectItens} from "../../components/Inputs";
import theme, { colors } from "../../styles/theme"
import {Container} from "./styles"
import { useState } from "react";

const Search=(props)=>{
    const filtrar=props.filtrar
    const order=props.order

        

        const [busca,setBusca]=useState("")
        const[id,setId]=useState(0)
        
    
    return <Container>
        <InputSearch placeholder="pesquise por nome ou numero" background={colors.lightGray} 
        onChange={
            (evt)=>setBusca(filtrar(evt.target.value))
        }
        value={busca}
        
        >
        </InputSearch>
       <div className="containerSelectItems">
           <label>Order Por</label>
        <SelectItens onChange={(e)=>{
            setId(order(e.target.value))
        }}>
            <option value="0">Buscar</option>
            <option value="1">Maior ID</option>
          
           
        </SelectItens>
       </div>
    </Container>
}
export default Search;