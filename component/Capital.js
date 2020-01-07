import React, {Component} from 'react';
import { View, Button, StyleSheet, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Capital extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            message: '',
            tax: 0,
            income: 0,
            year: 0,
            visible: false,

        }
    }
    Onchange = (value) =>{
        if(value == 'Plot')
        {
            this.setState({
                data: value
            })
        }
        else if(value == "Constructed Property"){
            this.setState({
                data: value
            })
        }
    }
    Calculate = () =>{

        if(this.state.data == ''){
            alert("Please Select Property type")
        }
        else if(this.state.data == 'Plot'){
            if(this.state.year == 1)
            {
                this.setState({
                    message: 'There is 100% tax on Capital gain if holding period of open plot is upto 1 year',
                    tax: this.state.income * 1,
                    visible: true,
                })
            }
            else if(this.state.year > 1 && this.state.year <=10){
                this.setState({
                    message: 'There is 75% tax on Capital gain if holding period of open plot is between 1 to 10 years',
                    tax: this.state.income * 0.75,
                    visible: true,
                })
            }
            else{
                this.setState({
                    message: 'There is no tax on Capital gain if holding period of open plot is more than 10 years',
                    visible: true
                })
            }
        }
        else if(this.state.data == 'Constructed Property'){
            if(this.state.year == 1)
            {
                this.setState({
                    message: 'There is 100% tax on Capital gain if holding period of Constructed Property is upto 1 year',
                    tax: this.state.income * 1,
                    visible: true
                })
            }
            else if(this.state.year > 1 && this.state.year <=5){
                this.setState({
                    message: 'There is 75% tax on Capital gain if holding period of Constructed Property is between 1 to 5 years',
                    tax: this.state.income * 0.75,
                    visible: true
                })
            }
            else{
                this.setState({
                    message: 'There is no tax on Capital gain if holding period of Constructed Property is more than 5 years',
                    visible: true
                })
            }
        }
    }
      render(){
        let data = [{
            value: 'Plot',
          }, {
            value: 'Constructed Property',
          }];
             return(
                <Spacer spaceMargin={20}>
                 <View >
                     <Dropdown
                        label='Property Type'
                        data={data}
                        containerStyle={{width: 245}}
                        dropdownPosition={-3.5}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View style={{height: 15}}></View>
                    <TextInput style={styles.container1} onChangeText= {(text) => this.setState({year:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Holding years"></TextInput>
                    <View style={{height: 15}}></View>
                    <TextInput style={styles.container} onChangeText= {(text) => this.setState({income:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Capital Gain"></TextInput>
                    <View style = {styles.button}>
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
                            Tax = <Text style={styles.output}>{this.state.tax} Rs.</Text>
                         </Text>
                         <Text style = {styles.title1}>
                            {this.state.message}
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
        height: 50,
        borderWidth: 1,
        borderColor: '#868787',
        borderRadius: 6,
        marginTop: 10,
        paddingLeft: 10,
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
        height: 50,
        marginTop: 25
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000',
        marginTop: 10
    },
    title1: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000',
        marginTop: 10
    },
    output: {
        fontWeight:"bold"
    }
});

export default Capital