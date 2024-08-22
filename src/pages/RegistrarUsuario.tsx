import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import HeaderConteudo from '../Header/HeaderConteudo';
import { FormStyled, MainStyled } from "../Main/MainStyled";
import { doPost } from '../services/api';
import { LayoutButtom } from '../components/ButtomDefault/LayoutButtom';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function RegistrarUsuario() {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleRegister(event) {
        event.preventDefault();
        if (!name || !email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            const token = userContext?.data?.token || ''; // Acesso seguro ao token
            const response = await doPost('/RegistrarUsuario', { name, email, password }, token);
            if (response.success) {
                userContext?.setData({ user: email, token: response.data.token });
                alert('Registro bem-sucedido!');
                navigate('/');
            } else {
                throw new Error(response.message || 'Ocorreu um erro desconhecido.');
            }
        } catch (error) {
            alert(`Falha no registro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <HeaderConteudo>
                <LayoutButtom as={Link} to="/">Menu Principal</LayoutButtom>
                <LayoutButtom as={Link} to="/ListagemCrimes">Lista de Crimes</LayoutButtom>
            </HeaderConteudo>
            <MainStyled>
                <FormStyled>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome completo"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite o email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Digite a senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <LayoutButtom variant="primary" type="submit" disabled={loading}>
                            {loading ? "Carregando..." : "Registre-se!"}
                        </LayoutButtom>
                        <LayoutButtom variant="link" onClick={() => navigate('/Login')}>
                            Já tem conta? Entre aqui!
                        </LayoutButtom>
                    </Form>
                </FormStyled>
            </MainStyled>
        </>
    );
}

export default RegistrarUsuario;
