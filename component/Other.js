import React, {Component} from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import RadioButton from 'radio-button-react-native';
import Dividend from './Dividend';
import Profit from './Profit'
    
 class Other extends Component {
    constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  handleOnPress(value){
    this.setState({value:value})
}
  renderElement = () => {
    if (this.state.value === 1) {
      return <Dividend />;
    }else if(this.state.value === 2){
        return <Profit />;
    }
}
  render() {
    return (
      <View >
        <View style={{height: 30}}></View>
        <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                      outerCircleColor='#ff7f00'
                      outerCircleSize={24}
                      outerCircleWidth={2}
                      innerCircleColor='#ff7f00'
                      innerCircleSize={12}
                      value={1}
                      >
                <Text style={styles.title}>  Tax on Dividend Income</Text>
                 </RadioButton>
                      <View style={{height: 15}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                      outerCircleColor='#ff7f00'
                      outerCircleSize={24}
                      outerCircleWidth={2}
                      innerCircleColor='#ff7f00'
                      innerCircleSize={12}
                      value={2}>
                 <Text style={styles.title}>  Tax on Profit on Debt</Text>
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
  inner: {
    padding: 24,
    justifyContent: "flex-end",
},
});

export default Other