import React, {Component} from 'react';
import { Container, Tabs, TabHeading, Tab, Text} from 'native-base';
import Income from './Expense/Income';
import Expenses from './Expense/Expense'
import { StyleSheet } from 'react-native'

export default class Expense extends Component{

    render(){
        return(
            <Container>
            <Tabs>
              <Tab heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text}>Income</Text>
                </TabHeading>
              }>
                <Income />
              </Tab>
              <Tab heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text}>Expense</Text>
                </TabHeading>
              }>
                <Expenses />
              </Tab>
            </Tabs>
          </Container>
        )
    }
}
const styles = StyleSheet.create({
    tab: {
      backgroundColor: '#FF9800'
    },
    text:{
      color: '#fff',
      fontSize: 14
    }
  });