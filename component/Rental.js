import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Rental extends Component {
    constructor(props){
        super(props)
        this.state = {
            monthly_rent: 0,
            yearly_rent: 0,
            monthly_rental_tax: 0,
            yearly_rental_tax: 0,
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
        if(this.state.yearly_rent <= 200000){
            var month = this.state.yearly_rent / 12;
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: 0,
                yearly_rental_tax: 0,
                visible: true
            })
            alert("No tax will be imposed if Yearly Rent is less than or equals to 200000 Rs.")
        }
        else if(this.state.yearly_rent > 200000 && this.state.yearly_rent <= 600000){
            var month = this.state.yearly_rent / 12;
            var mtax = (0.05 * (this.state.yearly_rent - 200000)) / 12;
            var ytax = (0.05 * (this.state.yearly_rent - 200000));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.yearly_rent > 600000 && this.state.yearly_rent <= 1000000)
        {
            var month = this.state.yearly_rent / 12;
            var mtax = (1666.67 + (0.1 * ((this.state.yearly_rent - 600000)) / 12));
            var ytax = (20000 + (0.1 * (this.state.yearly_rent - 600000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.yearly_rent > 1000000 && this.state.yearly_rent <= 2000000){
            var month = this.state.yearly_rent / 12;
            var mtax = (5000 + ((0.15 * (this.state.yearly_rent - 1000000)) / 12));
            var ytax = (60000 + (0.15 * (this.state.yearly_rent - 1000000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.yearly_rent > 2000000 && this.state.yearly_rent <= 4000000){
            var month = this.state.yearly_rent / 12;
            var mtax = (17500 + ((0.2 * (this.state.yearly_rent - 2000000)) / 12));
            var ytax = (210000 + (0.2 * (this.state.yearly_rent - 2000000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.yearly_rent > 4000000 && this.state.yearly_rent <= 6000000){
            var month = this.state.yearly_rent / 12;
            var mtax = (50833.33 + ((0.25 * (this.state.yearly_rent - 4000000)) / 12));
            var ytax = (610000 + (0.25 * (this.state.yearly_rent - 4000000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else if(this.state.yearly_rent > 6000000 && this.state.yearly_rent <= 8000000){
            var month = this.state.yearly_rent / 12;
            var mtax = (92500 + ((0.3 * (this.state.yearly_rent - 6000000)) / 12));
            var ytax = (1110000 + (0.3 * (this.state.yearly_rent - 6000000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
        else{
            var month = this.state.yearly_rent / 12;
            var mtax = (142500 + ((0.35 * (this.state.yearly_rent - 8000000)) / 12));
            var ytax = (1710000 + (0.35 * (this.state.yearly_rent - 8000000)));
            this.setState({
                monthly_rent: this.RoundCorrect(month,2),
                monthly_rental_tax: this.RoundCorrect(mtax,2),
                yearly_rental_tax: this.RoundCorrect(ytax,2),
                visible: true
            })
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                <View >
                    <View style={{height: 15}}></View>
                <TextInput style={styles.container} onChangeText= {(text) => this.setState({yearly_rent:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Yearly Gross Rent"></TextInput>
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
                        <View style={{height: 10}}></View>
                        <Text style={styles.title}>
                        Monthly Rent = <Text style={styles.output}>{this.state.monthly_rent} Rs.</Text>
                         </Text>
                        <Text style={styles.title1}>
                        Monthly Tax = <Text style={styles.output}>{this.state.monthly_rental_tax} Rs.</Text>
                        </Text>
                        <Text style={styles.title1}>
                        Yearly Tax = <Text style={styles.output}>{this.state.yearly_rental_tax} Rs.</Text>
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
        height: 50
    },
    inner: {
        padding: 24,
        justifyContent: "flex-end",
    },
    title: {
        width: 245,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000'
    },
    title1: {
        width: 245,
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

export default Rental