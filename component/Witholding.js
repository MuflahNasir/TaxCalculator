import React, {Component} from 'react';
import { View, StyleSheet,ScrollView, Text } from 'react-native';
import RadioButton from 'radio-button-react-native';
import NewRegistration from './NewRegistration';
import PostTrans from './PostTrans';
  
class Witholding extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
      }
      
      handleOnPress(value){
        this.setState({value:value})
    }
     renderElement = () => {
        if (this.state.value === 1) {
          return <NewRegistration />;
        }else if(this.state.value === 2){
          return <PostTrans />;
        }
    }
      render(){
             return(
                <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={1}
                 >
                 <Text style={styles.title}> New Registration </Text>
                 </RadioButton>
                 <RadioButton currentValue={this.state.value} onPress={this.handleOnPress.bind(this)}
                    outerCircleColor='#ff7f00'
                    outerCircleSize={24}
                    outerCircleWidth={2}
                    innerCircleColor='#ff7f00'
                    innerCircleSize={12}
                    value={2}>
                 <Text style={styles.title}> Post Transaction </Text>
                 </RadioButton>
                 </View>
                 <View style={{height: 10}}></View>
                 <View style={{ backgroundColor: '#ffffff' }}>
                    {this.renderElement()}
                 </View>
             </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 30
    },
    paragraph: {
      marginTop: 10,
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

export default Witholding