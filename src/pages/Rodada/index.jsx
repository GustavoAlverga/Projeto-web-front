import { Container, Title, ActionList, ActionButton } from "./styles";

export default function Rodada() {
    return (
        <Container>
            <div id="content">
                <Title>Campeonato Nome</Title>
                <ActionList>
                    <ActionButton>Adicionar Rodada</ActionButton>
                    <ActionButton>Alterar Rodada</ActionButton>
                    <ActionButton>Deletar Rodada</ActionButton>
                </ActionList>
            </div>
        </Container>
    );
}