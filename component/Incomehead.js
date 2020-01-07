import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
  
class Incomehead extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: 0,
            m_income: 0,
            m_tax: 0,
            y_tax: 0,
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

        if(this.state.value <= 50000){  
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : 0,
            y_tax : 0,
            visible: true
        });
        alert("No tax will be imposed if Monthly Salary is less than or equals to 50000 Rs.")
        }

        else if(this.state.value > 50000 && this.state.value <= 100000){  
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : (0.05 * (this.state.value - 50000)),
            y_tax : (0.05 * (this.state.value - 50000)) * 12,
            visible: true
        });
        }
        else if(this.state.value > 100000 && this.state.value <= 150000){  
            var taxcal = (2500 + (0.1 * (this.state.value - 100000)));
            var year = (30000 + ((0.1 * (this.state.value - 100000)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 150000 && this.state.value <= 208333.33){  
            var taxcal= (7500 + (0.15 * (this.state.value - 150000))); 
            var year = (90000 + ((0.15 * (this.state.value - 150000)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 208333.33 && this.state.value <= 291666.67){  
            var taxcal = ( 16250 + (0.175 * (this.state.value - 208333.33)));
            var year = (195000 + ((0.175 * (this.state.value - 208333.33)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 291666.67 && this.state.value <= 416666.67){  
            var taxcal = (30833.333 + (0.2 * (this.state.value - 291666.67)));
            var year = (370000 + ((0.2 * (this.state.value - 291666.67)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 416666.67 && this.state.value <= 666666.67){  
            var taxcal = (55833.333 + (0.225 * (this.state.value - 416666.67)));
            var year = (670000 + ((0.225 * (this.state.value - 416666.67)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 666666.67 && this.state.value <= 1000000){  
            var taxcal = (112083.333 + (0.25 * (this.state.value - 666666.67)));
            var year = (1345000 + ((0.25 * (this.state.value - 666666.67)) * 12))
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 1000000 && this.state.value <= 2500000){  
            var taxcal = (195416.667 + (0.275 * (this.state.value - 1000000)));
            var year = (2345000 + ((0.275 * (this.state.value - 1000000)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 2500000 && this.state.value <= 4166666.67){  
            var taxcal= (607916.667 + (0.3 * (this.state.value - 2500000)));
            var year = (7295000 + ((0.3 * (this.state.value - 2500000)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else if(this.state.value > 4166666.67 && this.state.value <= 6250000){  
            var taxcal = (1107916.67 + (0.325 * (this.state.value - 4166666.67)));
            var year = (13295000 + ((0.325 * (this.state.value - 4166666.67)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
        else{
            var taxcal = (1785000 + (0.35 * (this.state.value - 6250000)));
            var year = (21420000 + ((0.35 * (this.state.value - 6250000)) * 12));
            this.setState({  
            m_income : this.state.value * 12,
            m_tax : this.RoundCorrect(taxcal,2),
            y_tax: this.RoundCorrect(year,2),
            visible: true
        });
        }
    }

      render(){
             return(
                 <View>
                     <View style={{height: 60}}></View>
                     <TextInput style={styles.container} onChangeText= {(text) => this.setState({value:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Monthly Salary"></TextInput>
                     <View style={styles.button}>
                     <View style={{height: 30}}></View>
                         <Button title="Calculate" onPress = {this.Calculate} color='#ff7f00' ></Button>
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
                            Yearly Income = <Text style={styles.output}>{this.state.m_income} Rs.</Text>
                         </Text>
                         <Text style={styles.title1}>
                            Monthly Tax = <Text style={styles.output}>{this.state.m_tax} Rs.</Text>
                         </Text>
                         <Text style={styles.title1}>
                            Yearly Tax = <Text style={styles.output}>{this.state.y_tax} Rs.</Text>
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
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 6,
        paddingLeft: 10,
    },
    button: {
        width: 250,
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
export default Incomehead