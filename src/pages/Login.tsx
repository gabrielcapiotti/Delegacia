import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import HeaderConteudo from '../Header/HeaderConteudo';
import { MainStyled, FormStyled } from "../Main/MainStyled";
import { UserContext } from '../contexts/UserContext';
import { doPost, doGet } from '../services/api';
import { LayoutButtom } from '../components/ButtomDefault/LayoutButtom';

function Login() {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await doPost('/auth', { email, password });
            if (response.success) {
                userContext.setData({ user: email, token: response.data.token });

                const userInfo = await doGet('/userInfo', response.data.token);
                console.log(userInfo);

                navigate('/');
            } else {
                alert('Falha no login!');
            }
        } catch (error) {
            alert(`Falha no login: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userContext.data?.user) {
            navigate('/');
        }
    }, [userContext, navigate]);

    return (
        <>
            <HeaderConteudo />
            <MainStyled>
                <FormStyled>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <LayoutButtom variant="primary" type="submit" disabled={loading}>
                            {loading ? "Carregando..." : "Entrar"}
                        </LayoutButtom>
                        <LayoutButtom variant="link" onClick={() => navigate('/RegistrarUsuario')}>
                            Criar conta
                        </LayoutButtom>
                    </Form>
                </FormStyled>
            </MainStyled>
        </>
    );
}

export default Login;
