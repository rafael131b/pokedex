import global from "../../styles/global.css"
import styles, {Container} from "./styles.js"
import themes,{colors} from "../../styles/theme"
const Header=()=>{
    //componente header que tem o  menu ;)
    return <Container
            background={colors.red}>
                    <div className="painel container">
                        <div className="icons">
                            <img src="./assets/img/pokeball.svg"></img>
                            <h1>Pokedéx</h1>
                        </div>
                        <div className="icons-out">
                        <img src="./assets/img/synvia.svg"></img>
                        </div>
                    </div>
    </Container>
}

export default Header