import { Link } from 'react-router-dom';
import { LayoutButtom } from '../components/ButtomDefault/LayoutButtom'; // Supondo que você tenha um componente de botão estilizado

export function HeaderButtom() {
    return (
        <>
            <LayoutButtom as={Link} to="/">Menu Principal</LayoutButtom>
            <LayoutButtom as={Link} to="/ListagemCrimes">Lista de Crimes</LayoutButtom>
            <LayoutButtom as={Link} to="/RegistrarUsuario">Registrar</LayoutButtom>
            <LayoutButtom as={Link} to="/Login">Login</LayoutButtom>
            <LayoutButtom as={Link} to="/">Logout</LayoutButtom>
        </>

    )

}