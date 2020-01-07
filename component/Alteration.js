import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class Alteration extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Transport Vehicles')
        {
            this.setState({
                tax:3000
            })
        }
        else if(value == "Other Vehicles"){
            this.setState({
                tax: 1500
            })
        }
    }
      render(){
        let data = [{
            value: 'Transport Vehicles',
          }, {
            value: 'Other Vehicles',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Vehicle Type'
                        data={data}
                        dropdownPosition={-3.3}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Fee for Alteration = {this.state.tax} Rs.
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
export default Alteration