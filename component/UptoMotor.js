import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class UptoMotor extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Not exceeding 1000cc')
        {
            this.setState({
                tax:700
            })
        }
        else if(value == "> 1000cc && <= 1300cc"){
            this.setState({
                tax: 1200
            })
        }
        else if(value == "> 1300cc && <= 1500cc"){
            this.setState({
                tax: 2000
            })
        }
        else if(value == "> 1500cc && <= 2000cc"){
            this.setState({
                tax: 3000
            })
        }
        else if(value == "> 2000cc && <= 2500cc"){
            this.setState({
                tax: 4000
            })
        }
        else if(value == "Exceeding 2500cc"){
            this.setState({
                tax: 5000
            })
        }
    }
      render(){
        let data = [{
            value: 'Not exceeding 1000cc',
          }, {
            value: '> 1000cc && <= 1300cc',
          }, {
            value: '> 1300cc && <= 1500cc',
          }, {
            value: '> 1500cc && <= 2000cc',
          }, {
            value: '> 2000cc && <= 2500cc',
          }, {
            value: 'Exceeding 2500cc',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Engine Capacity'
                        data={data}
                        dropdownPosition={-3.5}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Tax = {this.state.tax} Rs. per Anum
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
export default UptoMotor