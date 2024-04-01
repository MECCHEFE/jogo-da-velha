import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GameTable from './Table';
import TurnRecorder from './TurnRecorder';
import EndGameDialog from '../../components/EndGameDialog';
import InvalidMoveDialog from '../../components/InvalidMoveDialog';
import { initialTableState, fullTable, hasWinner, isValidPlay } from './gameRules';

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2'];

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false);
  const [endGameDialog, setEndGameDialog] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [table, setTable] = useState(initialTableState);

  const endGameText = hasWinner(table) ? `${PLAYERS_NAME[activePlayer - 1]} ganhou!` : fullTable(table) ? 'Empate!' : '';

  const resetGame = () => {
    setTable(initialTableState);
    setActivePlayer(1);
    setEndGameDialog(false);
    setInvalidMoveDialog(false);
  }

  const onCellClicked = (cellId) => {
    if (!isValidPlay(cellId, table)) {
      setInvalidMoveDialog(true);
      return;
    }

    const newTable = [...table];
    newTable[cellId] = activePlayer;
    setTable(newTable);

    if (hasWinner(newTable) || fullTable(newTable)) {
      setEndGameDialog(true);
      return;
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1);
  }

  return (
    <View style={styles.game}>
      <TurnRecorder
        playerName={PLAYERS_NAME[activePlayer - 1]}
      />
      <GameTable
        onCellClicked={onCellClicked}
        tableState={table}
      />
      <EndGameDialog
        isOpen={endGameDialog}
        resultText={endGameText}
        onClickYes={resetGame}
        onClickNo={() => navigation.navigate('Home')}
      />
      <InvalidMoveDialog
        isOpen={invalidMoveDialog}
        onClickClose={() => setInvalidMoveDialog(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  game: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});

export default GameScreen;
