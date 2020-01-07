import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text, Button, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class CategoryC extends Component {
    constructor(props){
        super(props)
        this.state = {
            fee : 0,
            engine: 0,
            price: 0,
            visible: false,
        }
    }
    Calculate = () => {
        if(this.state.engine <= 1000){
            this.setState({
                fee: this.state.price * 0.01,
                visible: true
            })
        }
        else if(this.state.engine > 1000 && this.state.engine <= 1500){
            this.setState({
                fee: this.state.price * 0.02,
                visible: true
            })
        }
        else if(this.state.engine > 1500 && this.state.engine <= 2000){
            this.setState({
                fee: this.state.price * 0.03,
                visible: true
            })
        }
        else{
            this.setState({
                fee: this.state.price * 0.04,
                visible: true
            })
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                <View style={styles.container}>
                    <View style={{height: 10}}></View>
                    <TextInput style={styles.container1} onChangeText= {(text) => this.setState({engine:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Engine Capacity CC"></TextInput>
                    <View style={{height: 10}}></View>
                    <TextInput style={styles.container2} onChangeText= {(text) => this.setState({price:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Vehicle Price"></TextInput>
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
                        <Text style={styles.title}>
                            Fee = <Text style={styles.output}>{this.state.fee} Rs.</Text>
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
        justifyContent: 'center',
        alignContent: 'center',
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
    container2: {
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
        height: 60,
        marginTop: 10
    },
    
    title: {
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

export default CategoryC