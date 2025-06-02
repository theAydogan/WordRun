import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import SquareBox from '../common/SquareBox';

// Generates a random number of boxes to be displayed
const randomNumber = Math.floor(Math.random() * 4) + 3;

// Generates an array of SquareBox components
// Currently creates a fixed number of boxes with placeholder values
// TODO: Make this dynamic based on game difficulty/level and user input
const generateBoxes = (inputText: string) => {
    const boxes = [];
    const screenWidth = Dimensions.get('window').width;
    for(let i = 0; i < randomNumber; i++) {
        boxes.push(
            <SquareBox text={inputText[i]} boxWidth={screenWidth / randomNumber - 10} style={{margin: 5, borderRadius: 10}} key={i}/>
        )
    }
    return boxes;
}

// Main game screen component that displays the game interface
// Contains the title and the letter boxes container
// I will be getting rid of the title to make it have a cleaner look but currently working on the logic of the game
const GameScreen = () => {
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '100%'}}>
                {generateBoxes(inputText)}
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                value={inputText}
                autoFocus={true}
                maxLength={randomNumber}
                autoCorrect={false}
                spellCheck={false}
                autoComplete="off"
                blurOnSubmit={false}
                onSubmitEditing={() => {}}
                returnKeyType="none"
                keyboardType="default"
                selectTextOnFocus={false}
                showSoftInputOnFocus={true}
                placeholder="Enter your text"
            />
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
    input: {
        width: '100%',
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        opacity: 0,
    },
});

export default GameScreen;