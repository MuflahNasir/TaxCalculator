import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class FedCigarette extends Component {
    constructor(props){
        super(props)
        this.state = {
            tax: 0,
            value: 0,
            amount: 0,
            total: 0,
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
        if(this.state.value <= 5960){
            var totalt = this.state.value * this.state.amount /1000;
            var mtax = 1650 * this.state.amount / 1000
        this.setState({
            total: this.RoundCorrect(totalt,2),
            tax: this.RoundCorrect(mtax, 2),
            message: '(1650 per 1000 cigarettes)',
            visible: true
        })
    }
    else if(this.state.value > 5960){
        var totalt = this.state.value * this.state.amount /1000;
            var mtax = 5200 * this.state.amount /1000
        this.setState({
            total: this.RoundCorrect(totalt,2),
            tax: this.RoundCorrect(mtax, 2),
            message: '(5200 per 1000 cigarettes)',
            visible: true
        })
    }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                 <View>
                     <View style={{height: 10}}></View>
                     <TextInput style={styles.container} onChangeText= {(text) => this.setState({amount:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Amount of cigarettes"></TextInput>
                     <View style={{height: 15}}></View>
                     <TextInput style={styles.container1} onChangeText= {(text) => this.setState({value:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Retail Price /1000 cigarettes"></TextInput>
                     <View style={styles.button}>
                     <View style={{height: 15}}></View>
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
                            Total Price = <Text style={styles.output}>{this.state.total} Rs.</Text>
                         </Text>
                        <Text style={styles.title1}>
                            FED: <Text style={styles.output}>{this.state.tax} Rs.</Text>
                        </Text>
                        <Text style={styles.title2}>
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
        marginTop: 20,
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
        marginTop: 10,
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000',
        marginTop: 15
    },
    title1: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 10,
        textAlign:'justify',
        color: '#000'
    },
    title2: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        marginTop: 10,
        textAlign:'justify',
        color: '#000'
    },
    output: {
        fontWeight: 'bold'
    }
});
export default FedCigarette