import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class Duplicate extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Motorcycles & Cars')
        {
            this.setState({
                tax:500
            })
        }
        else if(value == "HTV, Rikshaws & others"){
            this.setState({
                tax: 1000
            })
        }
    }
      render(){
        let data = [{
            value: 'Motorcycles & Cars',
          }, {
            value: 'HTV, Rikshaws & others',
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
                            Fee for Duplicate Certificate = {this.state.tax} Rs.
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
export default Duplicate