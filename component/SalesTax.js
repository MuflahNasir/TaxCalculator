import React, {Component} from 'react';
import {StyleSheet,ScrollView , View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Product from './Product';
import FedCigarette from './FedCigarette';
import TextTicker from 'react-native-text-ticker'

  
class SalesTax extends Component {

    constructor(props) {
        super(props);
        this.state = { val: 1,
          clicked:true,
          button: '#ff7f00',
          button1: '#ffb66e' };
      }
      renderElement() {
        if (this.state.val === 1) {
            return <Product />;
        }
        else if(this.state.val === 2){
          return <FedCigarette />;
        }
    }

      render(){

             return(
                <View style={styles.container}>
                  <TextTicker
                    style={{ fontSize: 12 }}
                    duration={3000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                  >
                  This Sales tax Calculation is only applicable in Punjab Province.
                  </TextTicker>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button}]}
                      onPress={() => this.setState({ val: 1,
                      button: '#ff7f00',
                      button1: '#ffb66e'})}>
                      <Text style={{ color: '#ffffff' }}>Tax on Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button1}]}
                      onPress={() => this.setState({ val: 2,
                      button: '#ffb66e',
                      button1: '#ff7f00'})}>
                      <Text style={{ color: '#ffffff' }}>FED On Cigarettes</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                <View style={{ backgroundColor: '#ffffff' }}>
                    {this.renderElement()}
                </View>
                </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    marginTop: 70
    },
    paragraph: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      margin: 2,
      borderRadius: 100
      },
});

export default SalesTax