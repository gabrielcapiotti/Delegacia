import { ReactNode } from 'react';
import { HeaderStyled } from './HeaderStyled';


interface HeaderProps {
    children?: ReactNode;
}

function HeaderConteudo({ children }: HeaderProps) {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    );
}

export default HeaderConteudo;
