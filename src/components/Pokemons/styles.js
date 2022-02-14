import styled from "styled-components";

export const Container=styled.div`
/* border:1px solid red; */
width:90%;
height:600px;

/* border: 1px solid green; */

.contentList{
    width: 100%;
    height: 500px;
   
    display: flex;
    flex-wrap:wrap;
    
    overflow: scroll;
    overflow-x: hidden;
}
.content-Search {
    
    margin-bottom:50px;
    display: flex;
    
}
`