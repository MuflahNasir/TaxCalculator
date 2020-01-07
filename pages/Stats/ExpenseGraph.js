import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Container } from 'native-base'

export default class ExpenseGraph extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Container>
                <Card cardbody style={styles.card}>
                    <Text style={styles.text}>No data available.</Text>
                </Card>
                <Card cardbody style={styles.card1}>
                    <Text style={styles.text1}>No data available.</Text>
                </Card>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#dcdcdc'
    },
    card: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 14,
        color: '#000'
    },
    card1:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });