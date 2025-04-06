import { Container, ButtonNav } from './styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Campeonato() {
  const { id } = useParams();
  const [campeonato, setCampeonato] = useState(null);
  const [tabelas, setTabelas] = useState([]);
  const [jogadores, setJogadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [campeonatoResponse, tabelasResponse, jogadoresResponse] = await Promise.all([
          api.get(`/campeonato/campeonatos/${id}`),
          api.get(`/campeonato/campeonatos/${id}/tabelas`),
          api.get(`/campeonato/campeonatos/${id}/jogadores`)
        ]);

        setCampeonato(campeonatoResponse.data);
        setTabelas(tabelasResponse.data);
        setJogadores(jogadoresResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados do campeonato ou tabelas:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <Container><p>Carregando...</p></Container>;
  }

  const getNomeJogador = (jogadorId) => {
    const jogador = jogadores.find(j => j.id === jogadorId);
    return jogador ? jogador.nome : 'Desconhecido';
  };

  return (
    <Container>
      <h1>{campeonato?.nome ?? 'Campeonato não encontrado'}</h1>

      {tabelas.length > 0 ? (
        <ul>
          <li><h2>Tabela do Campeonato</h2> | Pontuação</li>
          {tabelas.map((tabela) => (
            <li key={tabela.id}>
              <span><strong>{getNomeJogador(tabela.jogadorId)}</strong></span>
              <span style={{ float: 'right' }}>{tabela.pontuacao ?? 0}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tabela encontrada para este campeonato.</p>
      )}
      <ButtonNav to={`/campeonato/${id}/rodada`}>Gerenciar Rodadas</ButtonNav>
      <ButtonNav to={`/campeonato/${id}/jogadores`}>Gerenciar Jogadores</ButtonNav>
    </Container>
  );
}
