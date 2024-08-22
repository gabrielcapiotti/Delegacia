import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { CrimeType } from '../types/CrimeType';
import Menu from './MainConteudo';
import { LayoutButtom } from '../components/ButtomDefault/LayoutButtom';
import { MenuForm } from '../components/FormDefault/FormularioMenu';

function GerenciarCrimes() {
    const [tituloCrime, setTituloCrime] = useState<string>('');
    const [descricaoCrime, setDescricaoCrime] = useState<string>('');
    const [crimes, setCrimes] = useState<CrimeType[]>([]);
    const [idEdicao, setIdEdicao] = useState<string | null>(null);
    const apiUrl = "http://localhost:5000/crimes";

    useEffect(() => {
        buscarCrimes();
    }, []);

    const buscarCrimes = async () => {
        try {
            const resposta = await axios.get<CrimeType[]>(apiUrl);
            setCrimes(resposta.data);
        } catch (error) {
            console.error("Falha ao buscar crimes", error);
        }
    };

    const CriarCrime = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!tituloCrime || !descricaoCrime) return;

        const dadosCrime = { title: tituloCrime, description: descricaoCrime };
        const metodo = idEdicao ? 'put' : 'post';
        const url = idEdicao ? `${apiUrl}/${idEdicao}` : apiUrl;

        try {
            const response = await axios[metodo](url, dadosCrime);
            const crimesAtualizados = idEdicao ? crimes.map(crime => crime.id === idEdicao ? response.data : crime) : [...crimes, response.data];
            setCrimes(crimesAtualizados);
            limparCampos();
        } catch (error) {
            console.error("Falha ao salvar crime", error);
            alert("Falha ao salvar o crime!");
        }
    };

    const limparCampos = () => {
        setTituloCrime('');
        setDescricaoCrime('');
        setIdEdicao(null);
    };

    const editarCrime = (id: string) => {
        const crime = crimes.find(c => c.id === id);
        if (crime) {
            setTituloCrime(crime.title);
            setDescricaoCrime(crime.description);
            setIdEdicao(id);
        }
    };

    const deletarCrime = async (id: string) => {
        try {
            await axios.delete(`${apiUrl}/${id}`);
            const crimesAtualizados = crimes.filter(crime => crime.id !== id);
            setCrimes(crimesAtualizados);
        } catch (error) {
            console.error("Falha ao deletar crime", error);
            alert("Falha ao deletar o crime!");
        }
    };

    return (
        <>
            <Menu>
                <MenuForm onSubmit={CriarCrime}>
                    <Form.Group controlId="crimeTitle">
                        <Form.Control
                            type="text"
                            placeholder="Título do Crime"
                            value={tituloCrime}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTituloCrime(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="crimeDescription">
                        <Form.Control
                            type="text"
                            placeholder="Descrição do Crime"
                            value={descricaoCrime}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescricaoCrime(e.target.value)}
                        />
                    </Form.Group>
                    <LayoutButtom type="submit">{idEdicao ? 'Atualizar' : 'Adicionar'}</LayoutButtom>
                    {idEdicao && (
                        <LayoutButtom onClick={limparCampos}>Cancelar</LayoutButtom>
                    )}
                </MenuForm>
                {crimes.map(crime => (
                    <Form.Group key={crime.id}>
                        <Button variant="warning" onClick={() => editarCrime(crime.id)}>Editar</Button>
                        <Button variant="danger" onClick={() => deletarCrime(crime.id)}>Deletar</Button>
                    </Form.Group>
                ))}
            </Menu>
        </>
    );
}

export default GerenciarCrimes;
