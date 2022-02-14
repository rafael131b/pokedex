import styled from "styled-components"



export const Container=styled.div`

    height:80px;
    width:100%;
    background: ${props=> `${props.background}`};

    .painel{
        color:#fff;
        /* border: 1px solid white; */
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
        flex-wrap:wrap;
    }
    .icons{
        display: flex;
    }
    .icons h1{
        padding:15px
    }
    
    

`
