import { Container, ChampionshipContainer, ChampionshipButton } from "./styles";

export default function ChampionshipMenu() {
    return (
        <Container>
            <ChampionshipContainer>
                <ChampionshipButton>Criar Novo Campeonato</ChampionshipButton>
                <ChampionshipButton>Editar Seus Campeonatos</ChampionshipButton>
                <ChampionshipButton>Deletar Seus Campeonatos</ChampionshipButton>
            </ChampionshipContainer>
        </Container>
    );
}