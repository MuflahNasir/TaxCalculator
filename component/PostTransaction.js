import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import Alteration from './Alteration';
import Duplicate from './Duplicate';
import Purchase from './Purchase';
import Ecc from './Ecc';
  
class PostTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
    renderElement = () => {
        if (this.state.value === 1) {
          return <Alteration />;
        }else if(this.state.value === 2){
          return <Duplicate />;
        }else if(this.state.value === 3){
          return <Purchase />;
        }else if(this.state.value === 4){
            return <Ecc />;
          }
    }
      render(){
             return(
                <View style={styles.container}>
                <View>
                <View style={{height: 15}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={1}
                 >
                 <Text style={styles.title}> Fee for Alteration </Text>
                 </RadioButton>
                 <View style={{height: 15}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={2}>
                 <Text style={styles.title}> Duplicate Registartion Certificate </Text>
                 </RadioButton>
                 <View style={{height: 15}}></View>
                 </View>
                 <View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={3}>
                 <Text style={styles.title}> Hire Purchase Agreement </Text>
                 </RadioButton>
                 <View style={{height: 15}}></View>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={4}>
                 <Text style={styles.title}> Others (engine capacity) </Text>
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

export default PostTransaction