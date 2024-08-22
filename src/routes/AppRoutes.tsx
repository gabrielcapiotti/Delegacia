import 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ListagemCrimes from '../pages/ListagemCrimes';
import Login from '../pages/Login';
import RegistrarUsuario from '../pages/RegistrarUsuario';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/ListagemCrimes',
        element: <ListagemCrimes />
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/RegistrarUsuario',
        element: <RegistrarUsuario />
    },

]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
