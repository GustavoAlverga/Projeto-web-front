import { Container, Title, ActionList, ActionButton } from "./styles";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Jogador() {
  const campeonatoId = Number(useParams().id);
  const [acao, setAcao] = useState(null);
  const [campeonato, setCampeonato] = useState(null);
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [jogadorId, setJogadorId] = useState('');

  const resetForm = () => {
    setNome('');
    setNovoNome('');
    setJogadorId('');
  };

  const handleClick = (tipo) => {
    setAcao(tipo);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (acao === 'adicionar') {
        console.log("Retornando id:", campeonatoId + " e nome:", nome);
        await api.post(`/campeonato/campeonatos/${campeonatoId}/jogadores`, {
          nome,
          campeonatoId: campeonatoId
        });
        alert("Jogador adicionado com sucesso!");

      } else if (acao === 'alterar') {
        await api.put(`/campeonato/campeonatos/${campeonatoId}/jogadores/${jogadorId}`, {
          nome: novoNome
        });
        alert("Jogador alterado com sucesso!");

      } else if (acao === 'deletar') {
        await api.delete(`/campeonato/campeonatos/${campeonatoId}/jogadores/${jogadorId}`);
        alert("Jogador deletado com sucesso!");
      }

    } catch (error) {
      console.error(`Erro ao ${acao} jogador:`, error?.response?.data || error.message);
      alert(`Erro ao ${acao} jogador.`);
    }
  };

  const renderFormulario = () => {
    switch (acao) {
      case 'adicionar':
        return (
          <form onSubmit={handleSubmit}>
            <h3>Adicionar Jogador</h3>
            <input
              type="text"
              placeholder="Nome do jogador"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <button type="submit">Adicionar</button>
          </form>
        );

      case 'alterar':
        return (
          <form onSubmit={handleSubmit}>
            <h3>Alterar Jogador</h3>
            <input
              type="text"
              placeholder="ID do jogador"
              value={jogadorId}
              onChange={(e) => setJogadorId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Novo nome"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              required
            />
            <button type="submit">Alterar</button>
          </form>
        );

      case 'deletar':
        return (
          <form onSubmit={handleSubmit}>
            <h3>Deletar Jogador</h3>
            <input
              type="text"
              placeholder="ID do jogador"
              value={jogadorId}
              onChange={(e) => setJogadorId(e.target.value)}
              required
            />
            <button type="submit">Deletar</button>
          </form>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchCampeonato = async () => {
      try {
        const response = await api.get(`/campeonato/campeonatos/${campeonatoId}`);
        setCampeonato(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do campeonato:', error);
      }
    };

    fetchCampeonato();
  }, [campeonatoId]);
  

  return (
    <Container>
      <div id="content">
        <Title>{campeonato?.nome ?? 'Campeonato não encontrado'}</Title>

        <ActionList>
          <ActionButton onClick={() => handleClick('adicionar')}>Adicionar Jogador</ActionButton>
          <ActionButton onClick={() => handleClick('alterar')}>Alterar Jogador</ActionButton>
          <ActionButton onClick={() => handleClick('deletar')}>Deletar Jogador</ActionButton>
        </ActionList>
      </div>

      <div id="formulario">
        {renderFormulario()}
      </div>
    </Container>
  );
}
