import styled from "styled-components"

export const InputSearch=styled.input`
width: 100%;
height: 35px;
border-radius: 20px;
background-color: ${props=> `${props.background}`};
::placeholder{
    padding:20px
}
`
export const SelectItens=styled.select`

height: 35px;
border: 1px solid red;
border-radius:20px;
text-align:center;
color:red;
`