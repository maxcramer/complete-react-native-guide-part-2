import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <Text>Game Over</Text>
        <Text>Number of Guesses: {props.roundsNumber}</Text>
        <Text>Your number was {props.userNumber}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;