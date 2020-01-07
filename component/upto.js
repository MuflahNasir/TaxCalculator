import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class upto extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Motor Cab Rickshaws')
        {
            this.setState({
                tax:3000
            })
        }
        else if(value == "Vehicles for Corporation"){
            this.setState({
                tax: 140
            })
        }
        else if(value == "Vehicles for Municipality"){
            this.setState({
                tax: 140
            })
        }
        else if(value == "Vehicles for Cantonment"){
            this.setState({
                tax: 140
            })
        }
    }
      render(){
        let data = [{
            value: 'Motor Cab Rickshaws',
          }, {
            value: 'Vehicles for Corporation',
          }, {
            value: 'Vehicles for Municipality',
          }, {
            value: 'Vehicles for Cantonment',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Types of Motor Vehicles'
                        data={data}
                        dropdownPosition={-3.5}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Tax = {this.state.tax} Rs. per seat
                         </Text>
                     </View>
                 </View>
             );
        }
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#868787',
        marginTop: 20
    }
});
export default upto