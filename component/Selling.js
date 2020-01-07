import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';

  
class Selling extends Component {
    constructor(props){
        super(props)
        this.state = {
            income : 0,
            years : 0,
            tax : 0, 
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
         if(this.state.years > 4){
             this.setState({
                tax: 0,
                 visible: true
             })
             alert("No tax will be imposed on a house or a flat if sold after four years")
         }
         else{
         if(this.state.income <= 5000000)
         {
             var taxa = (0.05 * (this.state.income));
             this.setState({
                 tax: this.RoundCorrect(taxa,2),
                 visible: true
             })
         }
         else if(this.state.income >= 5000000 && this.state.income <= 10000000)
         {
             var taxa = (0.1 * (this.state.income));
             this.setState({
                 tax: this.RoundCorrect(taxa,2),
                 visible: true
             })
         }
         else if(this.state.income >= 10000000 && this.state.income <= 15000000){
             var taxa = (0.15 * (this.state.income));
             this.setState({
                 tax: this.RoundCorrect(taxa,2),
                 visible: true
             })
         }
         else if (this.state.income >= 15000000 && this.state.income <= 20000000){
             var taxa = (0.2 * (this.state.income));
             this.setState({
                 tax: this.RoundCorrect(taxa,2),
                 visible: true
             })
         }
        }
    }
      render(){
          return(
            <Spacer spaceMargin={20}>
                 <View >
                     <View style={{height: 15}}></View>
                    <TextInput style={styles.container} onChangeText= {(text) => this.setState({income:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Property Worth"></TextInput>
                    <View style={{height: 15}}></View>
                    <TextInput style={styles.container1} onChangeText= {(text) => this.setState({years:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Holding years"></TextInput>
                    <View style={{height: 25}}></View>
                     <View style={styles.button}>
                         <Button title="Calculate" onPress = {this.Calculate} color='#ff7f00'></Button>
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
                        <View style={{height: 10}}></View>
                        <Text style={styles.title}>
                            Tax = <Text style={styles.output}>{this.state.tax} Rs.</Text>
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
        height: 35
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000',
        marginTop: 13
    },
    output: {
        fontWeight:"bold"
    }
});


export default Selling