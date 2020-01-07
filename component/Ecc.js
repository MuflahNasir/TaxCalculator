import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class Ecc extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Upto 1000cc')
        {
            this.setState({
                tax:1200
            })
        }
        else if(value == "Exceeding 1000cc but not more than 1800cc"){
            this.setState({
                tax: 2000
            })
        }
        else if(value == "Exceeding 1800cc"){
            this.setState({
                tax: 3000
            })
        }
    }
      render(){
        let data = [{
            value: 'Upto 1000cc',
          }, {
            value: 'Exceeding 1000cc but not more than 1800cc',
          }, {
            value: 'Exceeding 1800cc',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Select Engine Capacity'
                        data={data}
                        dropdownPosition={-3.3}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Tax = {this.state.tax} Rs.
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

export default Ecc