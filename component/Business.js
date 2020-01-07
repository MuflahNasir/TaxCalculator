import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';

class Business extends Component {
    constructor(props){
        super(props)
        this.state = {
            monthly_income: 0,
            yearly_income: 0,
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

    Calculate = () =>{
        const year_income = this.state.yearly_income;
        var month = year_income / 12;
        var mtax = (0.29 * (year_income));
        var ytax = (0.29 * (year_income / 12));
        this.setState({
            monthly_income: this.RoundCorrect(month,2),
            yearly_tax: this.RoundCorrect(mtax,2),
            monthly_tax: this.RoundCorrect(ytax,2),
            visible: true
        })
    }
      render(){
             return(
                <View>
                    <View style={{height: 60}}></View>
                <TextInput style={styles.container} onChangeText= {(text) => this.setState({yearly_income:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Yearly Income"></TextInput>
                <View style={styles.button}>
                <View style={{height: 30}}></View>
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
    },
    button: {
        height: 60
    },
    inner: {
        padding: 24,
        justifyContent: "flex-end",
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

export default Business