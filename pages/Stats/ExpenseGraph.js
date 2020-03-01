import React, {Component} from 'react';
import { styles } from './styles'
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