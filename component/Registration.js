import React, {Component} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import CategoryA from './CategoryA';
import CategoryB from './CategoryB';
import CategoryC from './CategoryC';
  
class Registartion extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
     renderElement = () => {
        if (this.state.value === 1) {
          return <CategoryC />;
        }else if(this.state.value === 2){
          return <CategoryA />;
        }else if(this.state.value === 3){
          return <CategoryB />;
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
                     <Text style={styles.title}> Agriculture </Text>
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
    },
  });

export default Registartion