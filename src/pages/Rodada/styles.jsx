import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: center;
  margin: 4vh 0;
  padding: 0 20px;

  #content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
  }


  #formulario{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin-top: 2rem;
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  form button {
    padding: 12px 20px;
    background-color: #3d3de2;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #2a2ac0;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

export const ActionButton = styled.button`
  padding: 12px 20px;
  background-color: #3d3de2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #2a2ac0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;