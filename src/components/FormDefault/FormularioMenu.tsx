import styled from "styled-components";

export const MenuForm = styled.form`
    width: 400px;
    height: 150px;
    background-color: ${(props) => props.theme.colors.primary};
    text-align: center;
    
    .form-control {
        display: flex;
        text-align:center;
        width: 90%; 
        padding: 10px;
        margin: 10px;
        border: 1px solid #fff; 
        border-radius: 5px; 
        background: #636363; 
        color: #FFFFFF; 
  }
`;



/*
input {
    background - color: #302e4d;  Cor de fundo dos campos de entrada 
    color: #fff; /* Cor do texto 
    border: 2px solid #443f5d; Borda para destacar os inputs 
    border - radius: 5px; /* Bordas arredondadas 
    padding: 10px 15px; /* Espaçamento interno para o texto não ficar muito grudado nas bordas 
    width: 100 %; /* Faz com que o input ocupe toda a largura disponível 
    margin - bottom: 10px; /* Espaço entre os campos de entrada 
}

.LayoutButtom {
    background - color: #6247aa; /* Cor de fundo dos botões 
    color: #fff; /* Cor do texto 
    border: none; /* Sem borda 
    padding: 10px 15px; /* Espaçamento interno 
    border - radius: 5px; /* Bordas arredondadas 
    width: 100 %; /* Faz com que o botão ocupe toda a largura do container 
    cursor: pointer; /* Cursor em forma de ponteiro para indicar que é clicável 
    margin - top: 10px; /* Espaço acima do botão 
}

.LayoutButtom:hover {
    background - color: #7c5bc8; /* Cor de fundo do botão quando o mouse está sobre ele 
}
    */
