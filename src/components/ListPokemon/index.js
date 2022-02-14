import React from "react";
import global from "../../styles/global.css"
import {Container} from "./styles.js"
import theme, { colors } from "../../styles/theme"
import TypeColors from "../TypeColors";


const ColorButton=TypeColors;

const ListPokemon=({id,name,image,type})=>{

    // aqui temos  o componente que vai ser percorrido no componente Pokemon
    return <Container>
        <div className="content-image" style={{backgroundColor:colors.lightGray}}>
            <img src={image} className="image"></img>
        </div>
        <div className="desc">
            <small style={{color:colors.darkGray,fontSize:"10px",letterSpacing:"2px"}}
            > Nº{id}</small>
            <h3>{name}</h3>
            
            <button className="buttonType" style={{backgroundColor:ColorButton(type)}}><p>{type}</p></button>
        </div>
        </Container>
    }

    export default ListPokemon;