import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
  
class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            tax: 0,
            value: 0,
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
        var mtax = this.state.value * 0.17;
        this.setState({
            tax: this.RoundCorrect(mtax,2),
            visible: true
        })
    }
      render(){
             return(
                 <View>
                     <TextInput style={styles.container} onChangeText= {(text) => this.setState({value:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Product Price"></TextInput>
                     <View style={styles.button}>
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
        marginTop: 30,
        paddingLeft: 10,
    },
    button: {
        marginTop: 30,
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000',
        marginTop: 15
    },
    output:{
        fontWeight: 'bold'
    }
});

export default Product