
import './App.css';
import React, { useState } from 'react';
import Square from './components/square';
import styled from 'styled-components';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setxPlayer] = useState(true);

  const handlePlay = (index) => {
    const temp = board.slice();
    if (xPlayer) {
      temp[index] = "X";
    } else {
      temp[index] = "O";
    }
    setBoard(temp);
    setxPlayer(!xPlayer);
  };
  const winer = caculateWinner(board);
  // if (winer) {
  //   console.log(winer);
  //   winer.style.fontSize = "30px"
  // }

  if (winer) {
    const check = checkPeopleWinner(board);
    // console.log(check);

    // for (let i = 0; i < board.length; i++) {
    const [a, b, c] = check;
    // console.log(a);
    checkXem(a, b, c);
    // if (i == a || i == b || i == c) {
    // checkXem();
    // }
    // }
    // }
  }

  const handleReset = () => {
    setxPlayer(true);
    setBoard(Array(9).fill(null));
    const nodeList = document.querySelectorAll(".qua");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "";
      }
  };
  return (
    <>
      {winer ? <H2>{winer} is Winner </H2> : null}
      <Board>
        {board.map((item, index) => (
          <Square handlePlay={() => handlePlay(index)} value={item} />
        ))}
      </Board>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => handleReset()}
          className="reset"
          style={{
            textAlign: "center",
            margin: "auto",
            width: "120px",
            height: "40px",
            fontSize: "20px",
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

const H2 = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;
const Board = styled.div`
  background-color: light-gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  max-width: 256px;
  margin: auto;
`;
const caculateWinner = (board) => {
  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winLine.length; i++) {
    const [a, b, c] = winLine[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      // console.log(a,b,c);
      return board[a];
    }
  }

  return null;
};
const checkXem = (a, b, c) => {
  // const abc = document.querySelectorAll(".qua");
  const nodeList = document.querySelectorAll(".qua");
  // console.log(nodeList[a].value)
  for (let i = 0; i < nodeList.length; i++) {
    if (i == a || i == b || i == c) {
      nodeList[i].style.backgroundColor = "red";
    }
  }
};

const checkPeopleWinner = (board) => {
  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winLine.length; i++) {
    const [a, b, c] = winLine[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      return [a, b, c];
    }
  }

  return null;
};
export default App;