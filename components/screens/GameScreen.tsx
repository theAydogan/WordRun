import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
    },
});

export default GameScreen;