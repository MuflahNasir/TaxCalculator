import React, {Component} from 'react';
import { View, StyleSheet,ScrollView, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import CommercialVehicle from './CommercialVehicle';
import CommercialPassenger from './CommercialPassenger';
import MotorCabs from './MotorCabs';
import PrivateVehicles from './PrivateVehicles';
  
class MotorTax extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
     renderElement = () => {
        if (this.state.value === 1) {
          return <CommercialVehicle />;
        }else if(this.state.value === 2){
          return <CommercialPassenger />;
        }
        else if(this.state.value === 3){
          return <MotorCabs />;
        }
        else if(this.state.value === 4){
          return <PrivateVehicles />;
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
                 <Text style={styles.title}> Commercial Vehicles </Text>
                 </RadioButton>
                 <View style={{height: 10}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={2}>
                 <Text style={styles.title}> Commercial Passenger Vehicles </Text>
                 </RadioButton>
                 </View>
                 <View style={{height: 10}}></View>
                 <View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={3}
                 >
                 <Text style={styles.title}> Commercial Motor Cabs </Text>
                 </RadioButton>
                 <View style={{height: 10}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={4}>
                 <Text style={styles.title}> Private Vehicles </Text>
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
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      },
      title: {
        fontSize: 12,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#868787'
    },
  });

export default MotorTax