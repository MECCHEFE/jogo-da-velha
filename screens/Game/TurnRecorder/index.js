import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{`${playerName}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        padding: 10,
        borderWidth: 3,
        backgroundColor: 'white',
    },
    texto: {
        color: 'green',
        fontSize: 36,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default TurnRecorder;