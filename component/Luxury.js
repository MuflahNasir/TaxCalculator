import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Luxury extends Component {
    constructor(props){
        super(props)
        this.state = {
            engine: 0,
            tax: 0,
            visible: false,
        }
    }
    Calculate = () => {
        if(this.state.engine < 1300){
            alert("Luxury Tax does not apply on engine cpacity less than 1300cc")
        }
        else if( this.state.engine >= 1300 && this.state.engine <= 1500){
            this.setState({
                tax: 15000,
                visible: true
            })
        }
        else if(this.state.engine > 1500 && this.state.engine <= 2000){
            this.setState({
                tax: 25000,
                visible: true
            })
        }
        else if(this.state.engine > 2000 && this.state.engine <= 2500){
            this.setState({
                tax: 100000,
                visible: true
            })
        }
        else{
            this.setState({
                tax: 300000,
                visible: true
            })
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                 <View style ={ styles.container }>
                     <Text style ={ styles.title }>*Luxury Tax applies only on those vehicles whose engine capacity is more than or equals to 1300cc</Text>
                     <View style={{height: 20}}></View>
                     <TextInput style={styles.container1} onChangeText= {(text) => this.setState({engine:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Engine Capacity cc"></TextInput>
                     <View style={{height: 20}}></View>
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
                        <Text style={styles.title1}>
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
      marginTop: 20,
      justifyContent: 'center',
      alignContent: 'center'
    },
      title: {
        width: 250,
        fontSize: 12,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#868787'
    },
    container1: {
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
    title1: {
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
        textAlign:'justify',
        color: '#000'
    },
    output: {
        fontWeight: 'bold'
    }
  });

export default Luxury