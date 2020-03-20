import React from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import styled from 'styled-components';

const App = () => {
const Container = styled.div`
  display: flex;
  max-width:100%;
  flex-wrap: wrap;
  justify-content:space-evenly;
  padding:40px;
`;
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <CharacterGrid />
      </Container>
    </div>   
  );
}

export default App;
