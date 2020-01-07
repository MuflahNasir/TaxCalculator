import React, {Component} from 'react';
import { View, StyleSheet,ScrollView, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import Upto from './upto';
import Morethan from './Morethan'
  
class CommercialPassenger extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
     renderElement = () => {
        if (this.state.value === 1) {
          return <Upto />;
        }else if(this.state.value === 2){
          return <Morethan />;
        }
    }
      render(){
             return(
                <View style={styles.container}>
                  <Text style={styles.title1}>Select seating capacity: </Text>
                  <View style={{height: 10}}></View>
                <View style={{flexDirection: 'row'}}>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={1}
                 >
                 <Text style={styles.title}>  upto 6 person  </Text>
                 </RadioButton>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={2}>
                 <Text style={styles.title}> more than 6 person.</Text>
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
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'center'
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
    title1: {
      fontSize: 14,
      justifyContent: 'center',
      textAlign:'justify',
      color: '#868787',
      fontWeight: 'bold'
  },
  });

export default CommercialPassenger