import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  h1 {
    color: white;
    margin: 5rem;
  }

  h2 {
    margin-left: 2rem;
  }

  h3{
    font-weight: 400;
  }

  ul {
    border: 1px solid white;
    list-style: none;
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 2rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 1px solid white;
    color: white;
    font-size: 1rem;
  }
`;

export const ButtonNav = styled(NavLink)`
  display: flex;
  width: 15rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  color: black;
  margin: 1rem;
  font-size: 1.2rem;
`;