import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100vw;
    height: 496px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    display: flex;
    justify-content: center; 
    align-items: center;
`;


export const FormStyled = styled.div`
    display: flex;
    text-align: center;
    background-color: #37237f; 
    padding: 10px; 
    border-radius: 15px;
    max-width: 400px; 
    color: #FFFFFF; 

  .form-group {
    margin-bottom: 15px; 
    
  }

  .form-label {
    display: flex;
    font-size: 15px; 
    margin-bottom: 10px;
  }

  .form-control {
    margin-top: 10px;
    width: 90%; 
    padding: 10px; 
    border: 1px solid #fff; 
    border-radius: 5px; 
    background: #636363; 
    color: #FFFFFF; 
    
  }

  .form-text {
    font-size: 12px; // Tamanho de fonte menor para textos secundários
    color: #D3D3D3; // Cinza claro para textos secundários
  }
`;


