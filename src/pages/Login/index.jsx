import { Container, LoginContainer } from "./styles";

export default function Blank() {
  return (
    <Container>
      <LoginContainer>
        <div id="inputs">
          <input type="text" placeholder="USERNAME" />
          <input type="password" placeholder="PASSWORD" />
        </div>
        <div id="buttons">
          <button>LOGIN</button>
          <p>Forgot password?</p>
        </div>
      </LoginContainer>
    </Container>
  );
}