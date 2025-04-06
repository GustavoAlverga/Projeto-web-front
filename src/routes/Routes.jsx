import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './styles';
import Home from '../pages/Home'
import Campeonato from '../pages/Campeonato'
import Jogador from '../pages/Jogador'
import Rodada from '../pages/Rodada'
import RodadaIn from '../pages/RodadaVisualization'
import Login from '../pages/Login'

export default function AppRoutes() {
    return (
      <BrowserRouter>
      <Container />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campeonato/:id" element={<Campeonato />} />
          <Route path="/campeonato/:id/jogadores" element={<Jogador />} />
          <Route path="/campeonato/:id/rodada" element={<Rodada />} />
          <Route path="/campeonato/rodadaIn" element={<RodadaIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }