import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainMenu = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Word Run</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameScreen')}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Leaderboard</Text>
            </TouchableOpacity>
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
    button: {
      backgroundColor: 'black',
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginVertical: 10,
      borderRadius: 100,
      width: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
});

export default MainMenu;