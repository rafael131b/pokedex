import styled from "styled-components"

export const Container=styled.div`
width: 180px;
height:200px;
margin-bottom:20px;

display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
.content-image{
    width: 150px;
    height: 150px;
    
    background: ${props=> `${props.background}`}
    
}
.image{
    width: 100px;
    height: 130px;
}
.desc{
    /* border:1px solid red; */
    width: 80%;
    text-align:start;
.buttonType{
    height: 30px;
    font-size:10px;
    width: 30%;
    border-radius:5px;
    margin-top:5px;
}}
`