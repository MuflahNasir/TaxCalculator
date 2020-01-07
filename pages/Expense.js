import React, {Component} from 'react';
import { Container, Segment, Button, Text, Content } from 'native-base';
import Income from './Expense/Income';
import Expenses from './Expense/Expense'
import { StyleSheet } from 'react-native'

export default class Expense extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }
    
    static navigationOptions = {
        header: null
    }

    selectComponent = (activePage) => () => this.setState({activePage})

    _renderComponent = () => {
        if(this.state.activePage === 1)
          return <Income/> //... Your Component 1 to display
        else 
          return <Expenses/> //... Your Component 2 to display
      }

    render(){
        return(
            <Container>
                <Segment>
                    <Button first active={this.state.activePage === 1}
                    onPress={() =>this.selectComponent(1)}>
                        <Text>Income</Text>
                    </Button>
                    <Button last active={this.state.activePage === 2}
                     onPress= {() =>this.selectComponent(2)}>
                        <Text>Expense</Text>
                    </Button>
                </Segment>
                <Content>
                    {this._renderComponent()}
                </Content>
            </Container>
        )
    }
}
