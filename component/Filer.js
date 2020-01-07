import React, {Component} from 'react';
import { View, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Spacer from 'react-native-spacer';
  
class Filer extends Component {
    constructor (props){
        super (props)
        this.state = {
            engine: 0,
            tax: 0,
            visible: false,
        }
    }
    Calculate = () => {
        if(this.state.engine<=1000){
            this.setState({
                tax: 100000,
                visible: true
            })
        }
        else if(this.state.engine > 1000 && this.state.engine <= 1199){
            this.setState({
                tax: 1500,
                visible: true
            })
        }
        else if(this.state.engine >= 1200 && this.state.engine <= 1299){
            this.setState({
                tax: 1750,
                visible: true
            })
        }
        else if(this.state.engine == 1300){
            this.setState({
                tax: 2500,
                visible: true
            })
        }
        else if(this.state.engine >= 1301 && this.state.engine <= 1499){
            this.setState({
                tax: 2500,
                visible: true
            })
        }
        
        else if(this.state.engine == 1500){
            this.setState({
                tax: 3750,
                visible: true
            })
        }
        else if(this.state.engine > 1500 && this.state.engine <= 1599){
            this.setState({
                tax: 3750,
                visible: true
            })
        }
        else if(this.state.engine > 1599 && this.state.engine <= 1999){
            this.setState({
                tax: 4500,
                visible: true
            })
        }
        else if(this.state.engine == 2000){
            this.setState({
                tax: 100000,
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
                tax: 100000,
                visible: true
            })
        }
    }
      render(){
             return(
                <Spacer spaceMargin={20}>
                 <View>
                     <TextInput style={styles.container} onChangeText= {(text) => this.setState({engine:parseInt(text)})} keyboardType={'numeric'} placeholder="Enter Engine Capacity cc"></TextInput>
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
        marginTop: 30,
        paddingLeft: 10,
    },
    button: {
        marginTop: 30,
        height: 60
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

export default Filer