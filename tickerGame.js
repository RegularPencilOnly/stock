import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { StockData } from './stockCompany.js';

export const TickerGame = ({ display}) => {
    
    const [correct, setCorrect] = useState(0);
    const [rndm, setRndm] = useState(0);

    return (

        <Text style={display}> Hello </Text>

    )
}