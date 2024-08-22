import HeaderConteudo from "../Header/HeaderConteudo";
import { Menu } from "../Main/MainConteudo";
import GerenciarCrimes from '../Main/GerenciarCrime';
import { LayoutButtom } from '../components/ButtomDefault/LayoutButtom';
import { Link } from 'react-router-dom';

function ListagemCrimes() {
    return (
        <>
            <HeaderConteudo>
                <LayoutButtom as={Link} to="/">Menu Principal</LayoutButtom>
                <LayoutButtom as={Link} to="/">Logout</LayoutButtom>
            </HeaderConteudo>
            <Menu>
                <GerenciarCrimes />
            </Menu>
        </>
    );
}

export default ListagemCrimes;
