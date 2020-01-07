import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Unsalaried extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: 0,
            monthly_income: 0,
            monthly_tax: 0,
            yearly_tax: 0,
            visible: false,
        }
    }
    
RoundCorrect(num, precision = 2) {
	// half epsilon to correct edge cases.
	var c = 0.5 * Number.EPSILON * num;
//	var p = Math.pow(10, precision); //slow
	var p = 1; while (precision--> 0) p *= 10;
	if (num < 0)
		p *= -1;
	return Math.round((num + c) * p) / p;
}
    Calculate = () => {

        if(this.state.value<=400000){
            var month = this.state.value / 12;
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: 0,
                yearly_tax: 0,
                visible: true
            })
            alert("No tax will be imposed if Yearly Income is less than or equals to 400000 Rs.")
        }
        else if(this.state.value > 400000 && this.state.value <= 600000){
            var month = this.state.value / 12;
            var mtax = (0.05 * ( this.state.value - 400000)) / 12;
            var ytax = (0.05 * ( this.state.value - 400000))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.value > 600000 && this.state.value <= 1200000){
            var month = this.state.value / 12;
            var mtax = (833.33 + ((0.1 * (this.state.value - 600000)) / 12));
            var ytax = (10000 + (0.1 * (this.state.value - 600000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.value > 1200000 && this.state.value <= 2400000){
            var month = this.state.value / 12;
            var mtax = (5833.33 + ((0.15 * (this.state.value - 1200000)) / 12));
            var ytax = (70000 + (0.15 * (this.state.value - 1200000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.value > 2400000 && this.state.value <= 3000000){
            var month = this.state.value / 12;
            var mtax = (20833.33 + ((0.2 * (this.state.value - 2400000)) / 12));
            var ytax = (250000 + (0.2 * (this.state.value - 2400000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.value > 3000000 && this.state.value <=4000000){
            var month = this.state.value / 12;
            var mtax = (30833.33 + ((0.25 * (this.state.value - 3000000)) / 12));
            var ytax = (370000 + (0.25 * (this.state.value - 3000000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.value > 4000000 && this.state.value <=6000000){
            var month = this.state.value / 12;
            var mtax = (51666.67 + ((0.3 * (this.state.value - 4000000)) / 12));
            var ytax = (620000 + (0.3 * (this.state.value - 4000000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else{
            var month = this.state.value / 12;
            var mtax = (101666.67 + ((0.35 * (this.state.value - 6000000)) / 12));
            var ytax = (1220000 + (0.35 * (this.state.value - 6000000)))
            this.setState({
                monthly_income : this.RoundCorrect(month,2),
                monthly_tax: this.RoundCorrect(mtax,2),
                yearly_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
    }

      render(){
             return(
                 <View >
                     <View style={{height: 60}}></View>
                     <TextInput style={styles.container} onChangeText= {(text) => this.setState({value:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Yearly Income"></TextInput>
                     <View style={styles.button}>
                     <View style={{height: 30}}></View>
                         <Button title="Calculate" onPress={this.Calculate} color='#ff7f00'></Button>
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
                            Monthly Income = <Text style={styles.output}>{this.state.monthly_income} Rs.</Text>
                         </Text>
                         <Text style={styles.title1}>
                            Monthly Tax = <Text style={styles.output}>{this.state.monthly_tax} Rs.</Text>
                         </Text>
                         <Text style={styles.title1}>
                            Yearly Tax = <Text style={styles.output}>{this.state.yearly_tax} Rs.</Text>
                          </Text>
                    </DialogContent>
                    </Dialog>
                     </View>
                 </View>
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
        paddingLeft: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        height: 60
    },
    
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000'
    },
    title1: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 10,
        textAlign:'justify',
        color: '#000'
    },
    output: {
        fontWeight:"bold"
    }
});


export default Unsalaried