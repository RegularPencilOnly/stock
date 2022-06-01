import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
      backgroundColor: '#913f30',
      flex: 1,
    },
  
    titleContainer: {
      textAlign: 'center',
      flex: 1,
      marginTop: '150px',
    },
  
    titleText: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  
    chooseGameButton: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      textAlign: 'center',
      borderRadius: 20,
      justifyContent: 'center',
      marginRight: 20,
      backgroundColor: '#000000',
    },
  
    chooseGameText: {
      color: '#ffffff',
      fontSize: 25,
    },
  
    tickerClicked: {
      display: 'flex',
    },
  
    tickerNotClicked: {
      display: 'none'
    },

    companyClicked: {
        display: 'flex',
      },
    
    companyNotClicked: {
        display: 'none'
      },

    stockClicked: {
        display: 'flex',
      },
    
    stockNotClicked: {
        display: 'none'
      },

    gameText: {
        alignItems: 'center',
        marginTop: -250,
    },

    gameTitle: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    inputBox: {
        backgroundColor: '#ffffff',
        height: 50,
        width: 250,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    }
  });