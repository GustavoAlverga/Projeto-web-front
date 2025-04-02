import { Container, Title, ActionList, ActionButton } from "./styles";

export default function Jogador() {
    return (
        <Container>
            <div id="content">
                <Title>Campeonato Nome</Title>
                <ActionList>
                    <ActionButton>Adicionar Jogador</ActionButton>
                    <ActionButton>Alterar Jogador</ActionButton>
                    <ActionButton>Deletar Jogador</ActionButton>
                </ActionList>
            </div>
        </Container>
    );
}