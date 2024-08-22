import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutButtom } from './LayoutButtom';


interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

const ButtomConteudo: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Componente = to ? Link : as || 'button';
    const propsComponente = to ? { to } : href ? { href } : { onClick };

    return (
        <LayoutButtom as={Componente} {...propsComponente}>
            {label}
        </LayoutButtom>
    );
};

export { ButtomConteudo }; 
