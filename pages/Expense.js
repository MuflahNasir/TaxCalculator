import React, {Component} from 'react';
import { Container, Tabs, TabHeading, Tab, Text} from 'native-base';
import Income from './Expense/Income';
import Expenses from './Expense/Expense'
import { styles } from './styles'

export default class Expense extends Component{

    render(){
        return(
            <Container>
            <Tabs>
              <Tab heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text1}>Income</Text>
                </TabHeading>
              }>
                <Income />
              </Tab>
              <Tab heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text1}>Expense</Text>
                </TabHeading>
              }>
                <Expenses />
              </Tab>
            </Tabs>
          </Container>
        )
    }
}