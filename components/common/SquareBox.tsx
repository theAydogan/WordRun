import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface SquareBoxProps {
    text: string;
    boxWidth: number;
    style?: ViewStyle;  
    textStyle?: TextStyle;  
}

export default function SquareBox({ 
    text, 
    boxWidth, 
    style, 
    textStyle 
}: SquareBoxProps): React.JSX.Element {
    return (
        <View style={[styles.square, { width: boxWidth, height: boxWidth }, style]}>
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderBottomWidth: 5,
        borderColor: '#000',
    } as ViewStyle,
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'center',
    } as TextStyle,
});
  