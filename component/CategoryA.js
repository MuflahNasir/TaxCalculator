import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class CategoryA extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            price: 0,
            fee: 0,
            visible: false,
        }
    }
    Onchange = (value) =>{
        if(value == 'Motorcycle/Scooter')
        {
            this.setState({
                data: value
            })
        }
        else if(value == "Tractor"){
            this.setState({
                data: value
            })
        }
        else if(value == "Truck"){
            this.setState({
                data: value
            })
        }
        else if(value == "Bus"){
            this.setState({
                data: value
            })
        }
        else if(value == "Rickshaw"){
            this.setState({
                data: value
            })
        }
        else if(value == "Taxi"){
            this.setState({
                data: value
            })
        }
    }
    Calculate = () => {
        if(this.state.data == ''){
            alert("Please Select Vehicle Type")
        }
        else if(this.state.data == 'Motorcycle/Scooter')
        {
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.data == "Tractor"){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.data == "Truck"){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.data == "Bus"){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.data == "Rickshaw"){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.data == "Taxi"){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
    }
      render(){
        let data = [{
            value: 'Motorcycle/Scooter',
          }, {
            value: 'Tractor',
          }, {
            value: 'Truck',
          }, {
            value: 'Bus',
          }, {
            value: 'Rickshaw',
          }, {
            value: 'Taxi',
          }];
             return(
                <Spacer spaceMargin={20}>
                 <View style = {styles.container}>
                     <Dropdown
                        label='Vehicle Type'
                        data={data}
                        dropdownPosition={-4.0}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View style={{height: 10}}></View>
                    <TextInput style={styles.container1} onChangeText= {(text) => this.setState({price:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Vehicle Price"></TextInput>
                    <View style={styles.button}>
                    <View style={{height: 10}}></View>
                    <Button title="Calculate" onPress = {this.Calculate} color="#ff7f00"></Button>
                    </View>
                    <View>
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                          }}
                        dialogTitle={<DialogTitle title="Calculated Tax" textStyle={{color: '#ff7f00'}} />}
                        dialogAnimation={new SlideAnimation({
                            slideFrom: 'bottom',
                          })}
                        footer={
                        <DialogFooter>
                        <DialogButton 
                        text="OK"
                        textStyle={{color: '#ff7f00'}}
                        onPress={() => {this.setState({ visible: false });}}
                        />
                        <DialogButton 
                        text="Cancel"
                        textStyle={{color: '#ff7f00'}}
                        onPress={() => {this.setState({ visible: false });}}
                        />
                        </DialogFooter>
                        }
                    >
                    <DialogContent>
                        <View style={{height: 15}}></View>
                        <Text style={styles.title}>
                        Registration Fee = <Text style={styles.output}>{this.state.fee} Rs.</Text>
                         </Text>
                    </DialogContent>
                    </Dialog>
                     </View>
                 </View>
                 </Spacer>
             );
        }
}
const styles = StyleSheet.create({
    container: {
        width: 250,
        justifyContent: 'center',
        alignContent: 'center'
    },
    container1: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: '#868787',
        borderRadius: 6,
        marginTop: 10,
        paddingLeft: 10,
    },
    button: {
        width: 250,
        marginTop: 10,
        height: 60
    },
    
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000'
    },
    output: {
        fontWeight: 'bold'
    }
});

export default CategoryA