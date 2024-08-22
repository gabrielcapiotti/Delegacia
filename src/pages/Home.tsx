import { Link } from "react-router-dom";
import { LayoutButtom } from "../components/ButtomDefault/LayoutButtom";
import HeaderConteudo from "../Header/HeaderConteudo";
import { Menu } from "../Main/MainConteudo";


function Home() {


    return (
        <>
            <HeaderConteudo>
                <LayoutButtom as={Link} to="/">Menu Principal</LayoutButtom>
                <LayoutButtom as={Link} to="/ListagemCrimes">Lista de Crimes</LayoutButtom>
                <LayoutButtom as={Link} to="/RegistrarUsuario">Registrar</LayoutButtom>
                <LayoutButtom as={Link} to="/">Logout</LayoutButtom>
            </HeaderConteudo>
            <Menu />
        </>
    )
}
export default Home;




