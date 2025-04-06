import { Container, Title, ActionList, ActionButton } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Rodada() {
  const { id } = useParams();
  const campeonatoId = Number(id);
  const [campeonato, setCampeonato] = useState(null);
  const [acao, setAcao] = useState(null);
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [rodadaId, setRodadaId] = useState('');

  const resetForm = () => {
    setNome('');
    setNovoNome('');
    setRodadaId('');
  };

  const handleClick = (tipo) => {
    setAcao(tipo);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (acao === 'adicionar') {
        await api.post(`/campeonato/campeonatos/${campeonatoId}/rodadas`, {
          nome,
          campeonatoId
        });
        alert("Rodada adicionada com sucesso!");

      } else if (acao === 'alterar') {
        await api.put(`/campeonato/rodadas/${rodadaId}`, {
          nome: novoNome,
          campeonatoId
        });
        alert("Rodada alterada com sucesso!");

      } else if (acao === 'deletar') {
        await api.delete(`/campeonato/campeonatos/${campeonatoId}/rodadas/${rodadaId}`);
        alert("Rodada deletada com sucesso!");
      }

    } catch (error) {
      console.error(`Erro ao ${acao} rodada:`, error?.response?.data || error.message);
      alert(`Erro ao ${acao} rodada.`);
    }
  };

  const renderFormulario = () => {
    switch (acao) {
      case 'adicionar':
        return (
          <form onSubmit={handleSubmit}>
            <h3>Adicionar Rodada</h3>
            <input
              type="text"
              placeholder="Nome do jogo"
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
            <h3>Alterar Rodada</h3>
            <input
              type="text"
              placeholder="ID da rodada"
              value={rodadaId}
              onChange={(e) => setRodadaId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Novo nome do jogo"
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
            <h3>Deletar Rodada</h3>
            <input
              type="text"
              placeholder="ID da rodada"
              value={rodadaId}
              onChange={(e) => setRodadaId(e.target.value)}
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
        <Title>{campeonato?.nome ?? "Campeonato não encontrado"}</Title>
        <ActionList>
          <ActionButton onClick={() => handleClick('adicionar')}>Adicionar Rodada</ActionButton>
          <ActionButton onClick={() => handleClick('alterar')}>Alterar Rodada</ActionButton>
          <ActionButton onClick={() => handleClick('deletar')}>Deletar Rodada</ActionButton>
        </ActionList>
      </div>

      <div id="formulario">
        {renderFormulario()}
      </div>
    </Container>
  );
}
