import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class Postnonfiler extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'upto 850cc')
        {
            this.setState({
                tax: 5000
            })
        }
        else if(value == "851 to 1000cc"){
            this.setState({
                tax: 10000
            })
        }
        else if(value == "1001 to 1300cc"){
            this.setState({
                tax: 15000
            })
        }
        else if(value == "1301 to 1600cc"){
            this.setState({
                tax: 25000
            })
        }
        else if(value == "1601 to 1800cc"){
            this.setState({
                tax: 37000
            })
        }
        else if(value == "1801 to 2000cc"){
            this.setState({
                tax: 50000
            })
        }
        else if(value == "2001 to 2500cc"){
            this.setState({
                tax: 75000
            })
        }
        else if(value == "2501 to 3000cc"){
            this.setState({
                tax: 100000
            })
        }
        else if(value == "3001 and above"){
            this.setState({
                tax: 125000
            })
        }
    }
    render(){
        let data = [{
        value: 'upto 850cc',
      }, {
        value: '851 to 1000cc',
      }, {
        value: '1001 to 1300cc',
      }, {
        value: '1301 to 1600cc',
      }, {
        value: '1601 to 1800cc',
      }, {
        value: '1801 to 2000cc',
      }, {
        value: '2001 to 2500cc',
      }, {
        value: '2501 to 3000cc',
      }, {
        value: '3001 and above',
      }];
         return(
             <View style = {styles.container}>
                 <Dropdown
                    label='Select Engine Capacity'
                    data={data}
                    dropdownPosition={-4.0}
                    onChangeText={value => this.Onchange(value)}
                />
                <View>
                     <Text style={styles.title}>
                        Wiht Holding Tax = {this.state.tax} Rs.
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

export default Postnonfiler