import { Container, ChampionshipContainer, ChampionshipButton } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ChampionshipMenu() {
    const [campeonatos, setCampeonatos] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        async function fetchCampeonatos() {
            try {
                setLoading(true); 
                const response = await api.get('/campeonato/campeonatos'); 
                setCampeonatos(response.data); 
            } catch (error) {
                console.error('Erro ao buscar campeonatos:', error);
                setError('Não foi possível carregar os campeonatos.'); 
            } finally {
                setLoading(false); 
            }
        }
        fetchCampeonatos();
    }, []);

    if (loading) {
        return <p>Carregando campeonatos...</p>; 
    }

    if (error) {
        return <p>{error}</p>; 
    }

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