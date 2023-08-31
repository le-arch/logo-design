import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
const App = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const handleClick = (row, col) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[row][col] = 'X';
      return newBoard;
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {board.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((cell, j) => (
              <Button
                key={j}
                title={cell}
                onPress={() => handleClick(i, j)}
              />
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.status}>
        {board.some(row => row.some(cell => cell === 'X')) ? 'X wins!' : ''}
        {board.some(row => row.some(cell => cell === 'O')) ? 'O wins!' : ''}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default App;



