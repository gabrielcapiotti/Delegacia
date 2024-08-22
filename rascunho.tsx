function RegistrarUsuario() {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name || !email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            const response = await doPost('/register', { name, email, password }, '');
            if (response.success) {
                userContext.setData({ user: email, token: response.data.token });
                alert('Registro bem-sucedido!');

                // Envio de dados adicionais pode ocorrer aqui, se necessário
                navigate('/home');
            } else {
                throw new Error(response.message || 'Ocorreu um erro desconhecido.');
            }
        } catch (error) {
            alert(`Falha no registro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }