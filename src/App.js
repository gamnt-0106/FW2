
import './App.css';
import React, { useState } from 'react';
import Square from './components/square';
import styled from 'styled-components';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlayer, setXPlayer] = useState(true)
  const handlePlay = (index) => {
    const temp = board.slice()
    if (xPlayer) {
      temp[index] = "X"
    } else {
      temp[index] = "O"
    }
    setBoard(temp)
    setXPlayer(!xPlayer)
  }
  const winner = caculatiWiner(board)
  return (
    <Container>
      {winner ? <h2 style={{color:"red"}}>{winner} is winner</h2> : null}
      <Board>

        {board.map((item, index) => <Square handlePlay={() => handlePlay(index)} value={item} />)}
      </Board>
      
      <button type="button" style={{backgroundColor:"green",padding:"10px" , marginTop:"20px", borderRadius:"100px"}} onClick={refreshPage}> <span>Reload</span> </button>
    </Container>
  );
}

function refreshPage() {
  window.location.reload();
}
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Board = styled.div`
background: lightgray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  max-width: 650px;
  margin: auto;
`;
const caculatiWiner = (board) => {
  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
  ]
  for (let i = 0; i < winLine.length; i++) {
    const [a, b, c] = winLine[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export default App;
