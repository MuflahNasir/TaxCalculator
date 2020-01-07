import React, {Component} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import Engine from './Engine';
import Motorbike from './Motorbike';
import HeavyVehicle from './HeavyVehicle';
  
class TransferFee extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
     renderElement = () => {
        if (this.state.value === 1) {
          return <Engine />;
        }else if(this.state.value === 2){
          return <Motorbike />;
        }else if(this.state.value === 3){
          return <HeavyVehicle />;
        }
    }
      render(){
             return(
                 <View>
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
                     <Text style={styles.title}> Engine Capacity </Text>
                     </RadioButton>
                     <View style={{height: 10}}></View>
                     <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                        outerCircleColor='#ff7f00'
                        outerCircleSize={24}
                        outerCircleWidth={2}
                        innerCircleColor='#ff7f00'
                        innerCircleSize={12}
                        value={2}>
                     <Text style={styles.title}> Motorbike </Text>
                     </RadioButton>
                     <View style={{height: 10}}></View>
                     <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                        outerCircleColor='#ff7f00'
                        outerCircleSize={24}
                        outerCircleWidth={2}
                        innerCircleColor='#ff7f00'
                        innerCircleSize={12}
                        value={3}>
                     <Text style={styles.title}> Heavy Vehicle </Text>
                     </RadioButton>
                     </View>
                     <View style={{ backgroundColor: '#ffffff' }}>
                        {this.renderElement()}
                     </View>
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
    },
  });
export default TransferFee