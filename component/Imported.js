import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Imported extends Component {
    constructor(props){
        super(props)
        this.state = {
            engine: 0,
            tax: 0,
            visible: false,
        }
    }
    Calculate = () => {
        if(this.state.engine < 1590){
            alert("Token Tax does not apply on engine cpacity less than 1590cc")
        }
        else if( this.state.engine >= 1590 && this.state.engine <= 1990){
            this.setState({
                tax: 20000,
                visible: true
            })
        }
        else if(this.state.engine > 1990 && this.state.engine <= 2990){
            this.setState({
                tax: 25000,
                visible: true
            })
        }
        else{
            this.setState({
                tax: 35000,
                visible: true
            })
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                 <View style ={ styles.container }>
                     <View style={{height: 10}}></View>
                     <Text style ={ styles.title }>*Token Tax applies only on those vehicles whose engine capacity is more than or equals to 1590cc</Text>
                     <View style={{height: 10}}></View>
                     <TextInput style={styles.container1} onChangeText= {(text) => this.setState({engine:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Engine Capacity cc"></TextInput>
                     <View style={{height: 10}}></View>
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
                            Token Tax = <Text style={styles.output}>{this.state.tax} Rs.</Text>
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
      marginTop: 10,
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
        marginTop: 10,
        paddingLeft: 10,
    },
    button: {
        marginTop: 10,
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

export default Imported