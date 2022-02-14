import theme, { colors } from "../../styles/theme"


//funcao que pega as cores do tema e retorna  a cor de acordo com o tipo do pokemon

const TypeColors=(type)=>{
    switch(type){
        case "fire":
            return colors.fire
        case "normal":
            return colors.normal
        case "water":
            return colors.whater
        case "grass":
            return colors.grass
        case "ice":
            return colors.ice
        case "poison":
            return colors.poison
        case "ground":
            return colors.ground
        case "flying":
            return colors.flying
        case "bug":
            return colors.bug
        case "rock":
            return colors.rock
        case "ghost":
            return colors.ghost
        case "dragon":
            return colors.dragon
        case "dark":
            return colors.dark
        case "steel":
            return colors.steel
        case "fairy":
            return colors.fairy
        case "psychic":
            return colors.psychic
        case "eletric":
            return colors.eletric
        case "fighting":
            return colors.fighting
            default:
                return null;

    }
}

export default TypeColors;