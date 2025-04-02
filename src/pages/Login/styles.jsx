import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 20rem;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 15px;

  #inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45%;
    width: 100%;
    gap: 2rem;
  }

  input {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: white;
      opacity: 0.7;
    }
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    gap: 2rem;
    margin-top: 1rem;
  }

  button {
    width: 100%;
    padding: 10px;
    background: white;
    color: #3d3de2;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: #e2e8f0;
    }
  }

  p {
    color: white;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;