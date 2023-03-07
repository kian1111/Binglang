import styled from "styled-components";




export const StyledHeader = styled.header`

    width : 100%;
    height : 5rem; /* 1 rem = 16pixels*/
    font-size: 2rem;
    font-weight: 700;/* 700 = bold*/
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding : 0rem 2rem;
    background : #dddddd;

    .logout-button{
        background-color: blue;
        color : white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor : pointer;
    }
` 