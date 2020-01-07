import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
  
class Motorbike extends Component {
      render(){
             return(
                 <View style = {styles.container}>
                     <Text style = {styles.title}>"The rate of Transfer Fee on Motorcycle or Scooter is equal to Rupees 150."</Text>
                 </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
      width: 250,
      marginTop: 40,
      justifyContent: 'center',
      alignContent: 'center',
      borderColor: '#ff7f00',
      borderRadius: 10,
      borderWidth: 1,
    },
    title: {
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#868787',
        padding: 20,
        fontStyle: 'italic'
    },
  });

export default Motorbike