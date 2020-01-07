import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Profit extends Component {
    constructor(props){
        super(props)
        this.state = {
            income: 0,
            Yearly_tax: 0,
            Monthly_tax: 0,
            message: '',
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
        var ytax = this.state.income * 0.15;
        var mtax = (this.state.income * 0.15) / 12;
        if (this.state.income <= 5000000) {
            this.setState({
                Yearly_tax: this.RoundCorrect(ytax,2),
                Monthly_tax: this.RoundCorrect(mtax,2),
                visible: true
            })
        }
        else if(this.state.income > 5000000 && this.state.income <= 25000000){
            var ytax = this.state.income * 0.175;
            var mtax = (this.state.income * 0.175) / 12;
            this.setState({
                Yearly_tax: this.RoundCorrect(ytax,2),
                Monthly_tax: this.RoundCorrect(mtax,2),
                visible: true
            })
        }
        else if(this.state.income > 25000000 && this.state.income <= 36000000){
            var ytax = this.state.income * 0.2;
            var mtax = (this.state.income * 0.2) / 12;
            this.setState({
                Yearly_tax: this.RoundCorrect(ytax,2),
                Monthly_tax: this.RoundCorrect(mtax,2),
                visible: true
            })
        }
        else{
            this.setState({
                Yearly_tax: 0,
                Monthly_tax: 0,
                visible: true
            })
            alert("Exceeding 36 million profit on debt will be part of total income and taxed at normal rates GOTO Tax on salaried person.")
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                 <View>
                     <View style={{height: 15}}></View>
                   <TextInput style={styles.container} onChangeText= {(text) => this.setState({income:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Yearly Profit on Debt"></TextInput>
                   <View style={styles.button}>
                   <View style={{height: 25}}></View>
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
                            Yearly Tax = <Text style={styles.output}>{this.state.Yearly_tax} Rs.</Text>
                         </Text>
                         <Text style = {styles.title1}>
                         Monthly Tax = <Text style={styles.output}>{this.state.Monthly_tax} Rs.</Text>
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
    button: {
        width: 250,
        height: 50
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
    output:{
        fontWeight: 'bold'
    }
});

export default Profit