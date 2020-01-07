import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

  
class PrivateVehicles extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Other than Buses & station wagons')
        {
            this.setState({
                tax:2500
            })
        }
        else if(value == "Buses & station wagons"){
            this.setState({
                tax: 300
            })
        }
    }
      render(){
        let data = [{
            value: 'Other than Buses & station wagons',
          }, {
            value: 'Buses & station wagons',
          }];
             return(
                 <View style = {styles.container}>
                     <Text style={styles.title}>
                            Seating capacity of more than 6 persons
                         </Text>
                     <Dropdown
                        label='Types of Motor Vehicles'
                        data={data}
                        dropdownPosition={-3.3}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Tax = {this.state.tax} Rs. per seat per anum
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

export default PrivateVehicles