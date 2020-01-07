import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Dividend extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            tax: 0,
            income: 0,
            visible: false
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

    Onchange = (value) =>{
        if(value == 'Mutual Fund')
        {
            this.setState({
                data: value
            })
        }
        else if(value == "Stock Fund"){
            this.setState({
                data: value
            })
        }
    }
    Calculate = () => {
        if(this.state.data == ""){
            alert("Please Select Fund Type")
        }
        else if(this.state.data == "Mutual Fund"){
            if(this.state.income <= 2500000){
                this.setState({
                    tax: this.state.income * 0.1,
                    visible: true
                })
            }
            else{
                var mtax = this.state.income * 0.125;
                this.setState({
                    tax: this.RoundCorrect(mtax,2),
                    visible: true
                })
            }
        }
        else if(this.state.data == "Stock Fund"){
            var mtax = this.state.income * 0.125;
            this.setState({
                tax: this.RoundCorrect(mtax,2),
                visible: true
            })
        }
    }
      render(){
        const offset = (Platform.OS === 'android') ? -500 : 0;
          let data = [{
            value: 'Mutual Fund',
          }, {
            value: 'Stock Fund',
          }];
             return(
                <Spacer spaceMargin={20}>
                 <View>
                   <Dropdown
                        label='Fund Type'
                        data={data}
                        dropdownPosition={-3.3}
                        onChangeText={value => this.Onchange(value)}
                    />
                    <View style={{height: 25}}></View>
                    <TextInput style={styles.container} onChangeText= {(text) => this.setState({income:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Dividend Income"></TextInput>
                    <View style={{height: 25}}></View>
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
        paddingLeft: 10,
    },
    yourStyle: {
        justifyContent: 'flex-end',
        padding: 24
    },
    button: {
        width: 250,
        height: 50
    },
    title: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000'
    },
    output:{
        fontWeight: 'bold'
    },
});
export default Dividend