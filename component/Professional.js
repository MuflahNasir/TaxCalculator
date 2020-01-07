import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
  
class Professional extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>"Professional Tax is applied on any vehicle with any engine capacity which equals to 200 PKR"</Text>
            </View>
        );
   }
}
const styles = StyleSheet.create({
container: {
 width: 250,
 marginTop: 70, 
 borderColor: '#ff7f00',
 borderRadius: 10,
 borderWidth: 1,
},
title: {
   fontSize: 18,
   justifyContent: 'center',
   textAlign: 'center',
   color: '#868787',
   padding: 15,
   fontStyle: 'italic'
},
});

export default Professional