import styled from "styled-components";


export const HeaderStyled = styled.header`
    width: 100vw; 
    height: 10vh; 
    background-color: ${(props) => props.theme.colors.primary}; // Usa a cor primária definida no tema.
    color: white; 
    display: flex; 
    justify-content: end; 
    text-align: center;
    align-items: center;
`;



