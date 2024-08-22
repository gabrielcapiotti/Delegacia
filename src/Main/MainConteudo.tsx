import { useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"; // Verifique o caminho
import { MainStyled } from "./MainStyled";


interface MenuProps {
    children?: ReactNode;
}

export function Menu({ children }: MenuProps) {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);


    function handleLogout() {
        if (userContext) {
            userContext.logout();
            localStorage.removeItem('userLogged');
            navigate('/');
        }
    }

    return (
        <MainStyled>
            {children}
        </MainStyled>
    );
}

export default Menu; 
