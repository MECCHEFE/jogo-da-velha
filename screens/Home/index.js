import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Velha</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={styles.textoBotao}>Jogar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightgreen',
    },
    titulo: {
        fontSize: 64,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 70,
        color: 'white',
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'green',
        borderWidth: 3,
        backgroundColor: 'white',
    },
    textoBotao: {
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default HomeScreen;