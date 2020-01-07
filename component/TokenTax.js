import React, {Component} from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import RadioButton from 'radio-button-react-native';
import LocalVehicle from './Local';
import Imported from './Imported';

  
class TokenTax extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1,
           };
      }
      
      handleOnPress(value){
        this.setState({value:value})
        }
      renderElement = () => {
        if (this.state.value === 1) {
          return <LocalVehicle />;
        }else if(this.state.value === 2){
          return <Imported />;
        }
        }
      render(){
             return(
                <View style={styles.container}>
                <View>
                <View style={{height: 10}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={1}
                 >
                 <Text style={styles.title}> Local Vehicles </Text>
                 </RadioButton>
                 <View style={{height: 10}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={2}>
                 <Text style={styles.title}> Imported Vehicles </Text>
                 </RadioButton>
                 </View>
                 <View style={{ backgroundColor: '#ffffff' }}>
                    {this.renderElement()}
                 </View>
             </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 10
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      },
      title: {
        fontSize: 14,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#868787'
    }
})
export default TokenTax