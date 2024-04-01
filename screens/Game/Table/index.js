import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    return (
        <View style={styles.tabela}>
            <View style={styles.linha}>
                {tableState.slice(0, 3).map((cellState, id) => (
                    <Cell
                        key={id}
                        onClick={onCellClicked}
                        id={id}
                        cellState={cellState}
                    />
                ))}
            </View>
            <View style={styles.linha}>
                {tableState.slice(3, 6).map((cellState, id) => (
                    <Cell
                        key={id + 3}
                        onClick={onCellClicked}
                        id={id + 3}
                        cellState={cellState}
                    />
                ))}
            </View>
            <View style={styles.linha}>
                {tableState.slice(6).map((cellState, id) => (
                    <Cell
                        key={id + 6}
                        onClick={onCellClicked}
                        id={id + 6}
                        cellState={cellState}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabela: {
        width: 500,
        height: 500,
    },
    linha: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '33.33%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default Table;
