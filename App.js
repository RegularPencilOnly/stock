import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styling'
import { stockData } from './stockData';

export default function App() {

  const [buttonClicked, setButtonClicked] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [correct, setCorrect] = useState(0);
  const [skipped, setSkipped] = useState(0);

  const [tickerGame, setTickerGame] = useState(false);
  const [stockGame, setStockGame] = useState(true);
  const [text, onChangeText] = useState(null);

  const display = buttonClicked ? "flex" : "none"

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100))
  const [currentTicker, setCurrentTicker] = useState(stockData[randomNumber]?.Symbol);
  const [currentCompany, setCurrentCompany] = useState(stockData[randomNumber]?.Name);
  const [lastTicker, setLastTicker] = useState("")

  const tickerButton = () => {
    setButtonClicked(!buttonClicked)
    setTickerGame(!tickerGame)
  }

  const companyButton = () => {
    setButtonClicked(!buttonClicked)
    setCompanyGame(!companyGame)
  }

  const stockButton = () => {
    setButtonClicked(!buttonClicked)
    setStockGame(!stockGame)
  }

  const generateNumber = () => {
    var number = Math.floor(Math.random() * stockData.length)

    if (number === randomNumber) {
      generateNumber()
    } else {
    setRandomNumber(number)
    }
  }
  const newTickerCompany = () => {
    
    generateNumber();
    setCorrect(correct + 1);
    setTextInput("")
    setLastTicker("")
    setCurrentTicker(stockData[randomNumber]?.Symbol);
    setCurrentCompany(stockData[randomNumber]?.Name);
  }

  const checkIfTickerRight = () => {
    if (currentTicker === textInput) {
      newTickerCompany();
    } 
  }

  const checkIfCompanyRight = () => {
    if (currentCompany === textInput) {
      newTickerCompany();
    }
  }
  
  const skip = () => {
    generateNumber();
    setSkipped(skipped + 1);
    setTextInput("")
    setLastTicker(currentTicker)
    setCurrentTicker(stockData[randomNumber]?.Symbol);
    setCurrentCompany(stockData[randomNumber]?.Name);
  }
  return (

    <View style={styles.background}> 

      <View style={[styles.titleContainer, {display}]}> 

          <Text style={styles.titleText}>
            My Game 
          </Text>

      </View>

      <View 
      style={{ alignItems: 'center',
      marginBottom: 400, flexDirection: 'row', justifyContent: 'center' }}>

        <Pressable onPress={() => tickerButton()} style={[styles.chooseGameButton, {display}]}> <Text style={styles.chooseGameText}> Guess the Ticker </Text>  </Pressable>

        <Pressable onPress={() => stockButton()} style={[styles.chooseGameButton, {display}]}> <Text style={styles.chooseGameText}> Guess the Stock </Text>  </Pressable>

      </View> 

      {/* Code for Ticker Game */}

      <View style={ tickerGame ? styles.tickerNotClicked : styles.tickerClicked }>

        <View style={styles.gameText}> 
          <Text style={styles.gameTitle}> Guess the Stock Ticker </Text>
        </View>

        <View> 
            <Text style={{ textAlign: 'center', fontSize: 40, marginTop: 25 }}> {currentCompany} </Text>
        </View>

        <View style={{ justifyContent: 'center', marginTop: 50, flexDirection: "row"}}>
          <TextInput value={textInput} onChange={(text) => {setTextInput(text.target.value)}} blurOnSubmit={false} onChangeText={checkIfTickerRight()} onKeyDown={e => e.key === 'Enter'}
          style={styles.inputBox} autoFocus={true} onKeyPress={(e) => {
            if (e.key === "Enter") {
              skip();}}}/> 

        </View>

        <View style={{ textAlign: 'center', fontSize: 40, marginTop: 20 }}> Correct: {correct} </View>
        <View style={{ textAlign: 'center', fontSize: 40, marginTop: 20 }}> Skipped: {skipped} </View>
        <View style={{ textAlign: 'center', fontSize: 40, marginTop: 20 }}> Last Ticker: {lastTicker} </View>

        <View style={{ alignItems: 'center', padding: 12, marginTop: 150, fontSize: 25, fontStyle: 'italic'}} onPress={() => skip()}> Press Enter to skip </View>
        
      </View>

      {/* Code for Stock Game */}

      <View style={ stockGame ? styles.stockNotClicked : styles.stockClicked }>

        <Text> Stock </Text>

      </View>
      

    </View>
  );
}
