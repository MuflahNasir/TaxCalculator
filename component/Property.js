import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Selling from './Selling';
import Rental from './Rental';
import RadioButton from 'radio-button-react-native';

export default class Property extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, };
  }
  
  handleOnPress(value){
    this.setState({value:value})
}
  renderElement = () => {
    if (this.state.value === 1) {
      return <Selling />;
    }else if(this.state.value === 2){
        return <Rental />;
    }
}
  render() {
    return (
      <View>
        <View style={{height: 30}}></View>
                <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                      outerCircleColor='#ff7f00'
                      outerCircleSize={24}
                      outerCircleWidth={2}
                      innerCircleColor='#ff7f00'
                      innerCircleSize={12}
                      value={1}
                      >
                <Text style={styles.title}>  Tax on Selling Property</Text>
                 </RadioButton>
                      <View style={{height: 15}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                      outerCircleColor='#ff7f00'
                      outerCircleSize={24}
                      outerCircleWidth={2}
                      innerCircleColor='#ff7f00'
                      innerCircleSize={12}
                      value={2}>
                 <Text style={styles.title}>  Tax on Gross rental</Text>
                 </RadioButton>
        <View style={{ backgroundColor: '#ffffff' }}>
                    {this.renderElement()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    title: {
      fontSize: 16,
      justifyContent: 'center',
      textAlign:'justify',
      color: '#868787'
  },
});