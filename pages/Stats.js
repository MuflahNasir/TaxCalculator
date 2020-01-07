import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import Income from './Stats/Income';
import ExpenseGraph from "./Stats/ExpenseGraph";

export default class Stats extends Component{
    static navigationOptions = {
        header: null
    }
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
                <TabHeading style={{backgroundColor: '#FF9800'}}>
                  <Text style={styles.text}>Expense</Text>
                </TabHeading>
              }>
                <ExpenseGraph />
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