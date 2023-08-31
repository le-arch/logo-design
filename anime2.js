import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
const App = () =>{} 
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const handleClick = (row, col) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[row][col] = "X";
      return newBoard;
    });
  };
  const checkWinner = () => {
    // Check rows for a winner
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== null
      ) {
        return board[i][0];
      }
    }
    // Check columns for a winner
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== null
      ) {
        return board[0][i];
      }
    }
    // Check diagonals for a winner
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== null
    ) {
      return board[0][0];
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== null
    ) {
      return board[0][2];
    }
   
};   