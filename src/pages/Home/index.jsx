// filepath: c:\Users\andre\Downloads\Projeto-web-front-main\Projeto-web-front-main\src\pages\Home\index.jsx
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, ChampionshipContainer, ChampionshipButton } from './styles';

export default function ChampionshipMenu() {
    const [campeonatos, setCampeonatos] = useState([]);

    useEffect(() => {
        async function fetchCampeonatos() {
            try {
                const response = await api.get('/campeonato/campeonatos');
                setCampeonatos(response.data);
            } catch (error) {
                console.error('Erro ao buscar campeonatos:', error);
            }
        }
        fetchCampeonatos();
    }, []);

    return (
        <Container>
            <ChampionshipContainer>
                <h1>Campeonatos</h1>
                {campeonatos.map((campeonato) => (
                    <ChampionshipButton key={campeonato.id}>
                        {campeonato.nome}
                    </ChampionshipButton>
                ))}
            </ChampionshipContainer>
        </Container>
    );
}