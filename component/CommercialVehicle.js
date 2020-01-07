import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class CommercialVehicle extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'upto 4060 kg')
        {
            this.setState({
                tax:1000
            })
        }
        else if(value == "> 4060 Kg. && <= 8120 Kg."){
            this.setState({
                tax: 2200
            })
        }
        else if(value == "> 8120 Kg. && <= 12000 Kg"){
            this.setState({
                tax: 4000
            })
        }
        else if(value == "> 12000 Kg. && <= 16000 Kg"){
            this.setState({
                tax: 6000
            })
        }
        else if(value == "exceeding 16000 Kg"){
            this.setState({
                tax: 8000
            })
        }
    }
      render(){
        let data = [{
            value: 'upto 4060 kg',
          }, {
            value: '> 4060 Kg. && <= 8120 Kg.',
          }, {
            value: '> 8120 Kg. && <= 12000 Kg',
          }, {
            value: '> 12000 Kg. && <= 16000 Kg',
          }, {
            value: 'exceeding 16000 Kg',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Select Laden Capacity'
                        data={data}
                        dropdownPosition={-3.3}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Tax = {this.state.tax} Rs. per anum
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

export default CommercialVehicle