import React, {Component} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
  
class CategoryB extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            price: 0,
            fee: 0
        }
    }
    Onchange = (value) =>{
        if(value == 'Combined Harvestor')
        {
            this.setState({
                fee: 300
            })
        }
        else if(value == "Rigs"){
            this.setState({
                fee: 300
            })
        }
        else if(value == "Fork Lifters"){
            this.setState({
                fee: 300
            })
        }
        else if(value == "Road Rollers"){
            this.setState({
                fee: 300
            })
        }
        else if(value == "Excavators"){
            this.setState({
                fee: 300
            })
        }
        else if(value == "Sewerage Cleaning Plants"){
            this.setState({
                fee: 300
            })
        }
    }
      render(){
        let data = [{
            value: 'Combined Harvestor',
          }, {
            value: 'Rigs',
          }, {
            value: 'Fork Lifters',
          }, {
            value: 'Road Rollers',
          }, {
            value: 'Excavators',
          }, {
            value: 'Sewerage Cleaning Plants',
          }];
             return(
                 <View style = {styles.container}>
                     <Dropdown
                        label='Vehicle Type'
                        data={data}
                        dropdownPosition={-4.0}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View>
                         <Text style={styles.title}>
                            Registration Fee = {this.state.fee} Rs.
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

export default CategoryB