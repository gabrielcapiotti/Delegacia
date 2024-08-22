import { ReactNode } from 'react';
import { LayoutButtom } from '../../components/ButtomDefault/LayoutButtom';
import Login from '../../pages/Login';

interface DefaultLayoutProps {
    children: ReactNode;
    config?: {
        navigation: boolean;
        footer: boolean;
    };
}

function DefaultLayout({ children, config }: DefaultLayoutProps) {
    return (
        <LayoutButtom>
            {config?.navigation !== false && <Login />}

            {children}

            {config?.footer !== false && <Login />}
        </LayoutButtom>
    );
}

export default DefaultLayout;
